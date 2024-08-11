"use client";

import { useEffect, useRef, useState } from "react";
import BotResponse from "./botResponse";
import UserPrompt from "./userPrompt";

const Interaction = () => {
  const [prompts, setPrompts] = useState([]);
  const scrollableDivRef = useRef(null);

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      const newPrompt = event.target.value.trim();
      if (newPrompt) {
        setPrompts([...prompts, newPrompt]);
        event.target.value = ""; // Clear the input field
      }
    }
  };

  useEffect(() => {
    if (scrollableDivRef.current) {
      scrollableDivRef.current.scrollTop =
        scrollableDivRef.current.scrollHeight;
    }
  }, [prompts]);

  return (
    <>
      <UserPrompt handleKeyDown={handleKeyDown} />
      <div
        ref={scrollableDivRef}
        className=" bg-[#182141] w-[51%] h-[40vh] absolute bottom-28 right-[19%] overflow-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-gray-500"
      >
        {prompts.map((prompt, index) => (
          <BotResponse key={index} prompt={prompt} />
        ))}
      </div>
    </>
  );
};

export default Interaction;
