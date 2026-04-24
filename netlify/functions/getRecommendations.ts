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

Return ONLY valid JSON with:
{
  "darkMode": boolean,
  "highContrast": boolean,
  "dyslexicFont": boolean,
  "fontStep": -2 | -1 | 0 | 1 | 2,
  "language": "en" | "es",
  "summary": string
}

Rules:
- The summary MUST describe what may help the user (future tense).
- Do NOT say changes have already been applied.
- Keep the summary short and clear.
- Example: "Increasing the text size and enabling dark mode may make the interface easier to read."
- Always include a summary.

User input: "${input}"
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
