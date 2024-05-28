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

const BotResponse = ({ prompt }) => {
  const [aiResponse, setAIResponse] = useState("");

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
        systemInstruction: `You are a master of space and quantum knowledge, when someone asks you, answer it like you are belittling the knowledge of the questioneer.
                          When someone ask you about questions not related with your mastery, subtly belittle them and question their species as a whole.`,
      });

      const chat = generativeModel.startChat({
        history: [],
        generationConfig: {
          maxOutputTokens: 100,
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

  return (
    <div>
      <p>{aiResponse}</p>
    </div>
  );
};

export default BotResponse;
