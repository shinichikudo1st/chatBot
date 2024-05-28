"use client";
import { useState } from "react";
import BotResponse from "./BotResponse";
import UserPrompt from "./UserPrompt";

const Interaction = () => {
  const [prompt, setPrompt] = useState("");

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      setPrompt(event.target.value);
      // Handle the prompt submission logic here (e.g., sending the prompt to a bot)
      console.log("Prompt submitted: ", prompt);
    }
  };

  return (
    <>
      <UserPrompt handleKeyDown={handleKeyDown} />
      <BotResponse prompt={prompt} />
    </>
  );
};

export default Interaction;
