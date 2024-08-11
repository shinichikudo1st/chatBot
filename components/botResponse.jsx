"use client";

require("dotenv").config();
const { GoogleGenerativeAI } = require("@google/generative-ai");
import { HarmBlockThreshold, HarmCategory } from "@google/generative-ai";

import { useEffect, useState } from "react";

const safetySettings = [
  {
    category: HarmCategory.HARM_CATEGORY_HARASSMENT,
    threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH,
  },
  {
    category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
    threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH,
  },
];

const BotResponse = ({ prompt, index }) => {
  const [aiResponse, setAIResponse] = useState("");
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    async function run() {
      if (!prompt) return;

      const apiKey = process.env.NEXT_PUBLIC_API_KEY;

      if (!apiKey) {
        console.error("API key is missing");
        return;
      }

      // Access your API key as an environment variable (see "Set up your API key" above)
      const genAI = new GoogleGenerativeAI(apiKey);
      // The Gemini 1.5 models are versatile and work with multi-turn conversations (like chat)

      const generativeModel = genAI.getGenerativeModel({
        model: "gemini-1.5-flash",
        safetySettings,
        systemInstruction: `You are a master of space and quantum knowledge, when someone asks you, answer it in a calm manner.
                          When someone ask you about questions not related with your mastery, you are very subtle with your humor on redirecting them in your mastery instead`,
      });

      const chat = generativeModel.startChat({
        history: [],
        generationConfig: {
          maxOutputTokens: 500,
        },
      });

      try {
        const result = await chat.sendMessage(prompt);
        console.log(result);
        const candidate = result.response.candidates[0].content.parts[0].text;
        console.log(candidate);
        setAIResponse(candidate);
      } catch (error) {
        console.error("Error generating AI response:", error);
        setAIResponse("An error occurred while generating the response.");
      }
    }
    run();
  }, [prompt]);

  useEffect(() => {
    if (!aiResponse) return;

    setDisplayedText("");

    let charIndex = -1;
    const interval = setInterval(() => {
      if (charIndex < aiResponse.length - 1) {
        setDisplayedText((prev) => prev + aiResponse[charIndex]);
        charIndex++;
      } else {
        clearInterval(interval);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [aiResponse]);

  return (
    <div key={index} className="flex flex-col gap-2">
      <div className=" p-[10px] text-[#f2f4fc] bg-[#202d5f] border-[2px] border-lime-400 2xl:w-[40%] rounded-[10px] h-auto 2xl:m-4 2xl:translate-x-[140%]">
        {prompt}
      </div>
      <div className=" p-[10px] text-[#f2f4fc] w-auto h-auto m-4">
        {displayedText}
      </div>
    </div>
  );
};

export default BotResponse;
