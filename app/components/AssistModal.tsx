"use client";

import { useState } from "react";

type AssistModalProps = {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function AssistModal({ setIsModalOpen }: AssistModalProps) {
  const name = "";
  const [showRecommendations, setShowRecommendations] = useState(false);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="relative w-full max-w-4xl rounded-xl bg-background px-10 py-8 shadow-xl">
        <button
          onClick={() => setIsModalOpen(false)}
          className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-md text-text-secondary transition hover:bg-black/5 hover:opacity-80"
          aria-label="Close modal"
        >
          X
        </button>

        <div className="flex flex-col items-center text-center">
          <img
            src="/images/welcome.svg"
            alt="Welcome image"
            className="mb-4 h-auto w-64"
          />

          <p className="mb-4 text-base font-medium text-text">
            Hi {name || "there"}, welcome to B&FC! 👋
          </p>

          <p className="mb-6 max-w-3xl text-sm leading-7 text-text-secondary">
            Before you get started, let’s make things a bit easier to read and
            navigate so everything works better for you.
            <br />
            What challenges do you experience when reading or navigating online
            systems?
          </p>

          <input
            type="text"
            placeholder="Describe any challenges you face... type help for suggestions"
            className="mb-5 w-full max-w-2xl rounded-md border border-divider bg-surface-variant px-4 py-3 text-sm text-text placeholder:text-text-secondary focus:outline-none focus:ring-2 focus:ring-accent"
          />

          <button
            onClick={() => setShowRecommendations(true)}
            className="mb-5 w-full max-w-2xl rounded-md bg-accent px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
          >
            {showRecommendations
              ? "Update Recommendations"
              : "Show Recommendations"}
          </button>

          {showRecommendations && (
            <>
              <p className="mb-5 text-sm text-text-secondary">
                Based on your input, here’s what might help:
              </p>

              <div className="mb-5 flex items-center justify-center gap-4">
                <button className="rounded-md border border-accent bg-background px-8 py-3 text-sm font-semibold text-accent transition hover:opacity-90">
                  Preview
                </button>

                <button className="rounded-md bg-accent px-8 py-3 text-sm font-semibold text-white transition hover:opacity-90">
                  Apply Changes
                </button>
              </div>
            </>
          )}

          <p className="text-sm text-text-secondary opacity-80">
            Prefer to adjust things yourself? Click here!
          </p>
        </div>
      </div>
    </div>
  );
}
