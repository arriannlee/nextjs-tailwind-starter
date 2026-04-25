"use client";

import { useState } from "react";
import Dashboard from "./components/Dashboard";
import Panel from "./components/Panel";
import AssistModal from "./components/AssistModal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [language, setLanguage] = useState("en");

  return (
    <>
      {language === "en" ? <Dashboard /> : <Panel />}

      <button
        onClick={() => setIsModalOpen(true)}
        className="fixed right-0 top-[75%] -translate-y-1/2 z-40 rounded-l-xl bg-accent px-3 py-6 text-sm font-semibold text-white shadow-lg transition hover:opacity-90"
      >
        <span className="[writing-mode:vertical-rl] rotate-180">
          Savnac Assist
        </span>
      </button>

      {isModalOpen && (
        <AssistModal
          setIsModalOpen={setIsModalOpen}
          language={language}
          setLanguage={setLanguage}
        />
      )}
    </>
  );
}
