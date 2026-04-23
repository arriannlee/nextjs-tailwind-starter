"use client";

import { useState } from "react";
import Dashboard from "./components/Dashboard";
import AssistModal from "./components/AssistModal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(true); // true for testing

  return (
    <>
      <Dashboard />

{isModalOpen && (

  <AssistModal setIsModalOpen={setIsModalOpen} />

)}    </>
  );
}
