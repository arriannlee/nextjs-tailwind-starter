import type { Handler, HandlerEvent } from "@netlify/functions";

const handler: Handler = async (event: HandlerEvent) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  if (!event.body) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Missing request body" }),
    };
  }

  try {
    const { input } = JSON.parse(event.body) as { input: string };

    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: "Missing Gemini API key" }),
      };
    }

    const prompt = `
You are an accessibility assistant for a smart campus dashboard.

Analyse the user's difficulty and recommend interface settings.

Rules:

Decision rules:
- If the user struggles reading small text, recommend increasing font size
- If the user mentions bright screens, headaches, or eye strain, recommend enabling dark mode
- If the user mentions difficulty distinguishing text, recommend enabling high contrast
- If the user mentions dyslexia, reading difficulty, or focus issues, recommend enabling a dyslexic-friendly font
- If the user writes in Spanish, set language to "es"
- Otherwise use "en"
- If the user's input does not describe a reading, navigation, accessibility, or focus-related difficulty, set "isRelevant" to false.
- If "isRelevant" is false, return an empty settings recommendation and explain that the user should describe a difficulty they experience when using online systems.
Relevance rules:
- If the user input is unrelated to accessibility, reading, navigation, focus, comprehension, or visual comfort, set "isRelevant" to false.
- If the input is abusive, random, or unrelated, do not generate recommendations.

Summary rules:
- Describe the recommendations as pending suggestions only
- Do not describe them as active or enabled
- Do not imply the settings are already turned on
- Do not use phrases like "is enabled", "has been enabled", "is increased", "has been changed"
- Frame them as possible interface changes the system can preview
- Write directly to the user using "you" and "your"
- Keep the summary concise and specific to the user's input
- Do not tell the user to make the changes themselves

Good examples:
"Dark mode may help reduce the screen brightness you mentioned."
"Increasing your text size may make content easier for you to read."
"A dyslexic-friendly font may improve your reading experience."

Bad examples:
"Dark mode is enabled to reduce screen brightness."
"Your font size is increased to improve readability."
"A dyslexic-friendly font is enabled to support your reading."

Return ONLY valid JSON:

{
  "isRelevant": boolean,
  "darkMode": boolean,
  "highContrast": boolean,
  "dyslexicFont": boolean,
  "fontStep": -2 | -1 | 0 | 1 | 2,
  "language": "en" | "es",
  "summary": string[]
}

The summary should explain suggested improvements clearly for the user.

User input:
"${input}"
`;

    const geminiResponse = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: {
            response_mime_type: "application/json",
          },
        }),
      },
    );

    const data = await geminiResponse.json();
    const text = data.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!text) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: "No Gemini response" }),
      };
    }

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: text,
    };
  } catch {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Something went wrong" }),
    };
  }
};

export { handler };
