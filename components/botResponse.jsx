import { GoogleGenerativeAI } from "@google/generative-ai";

const BotResponse = ({userPrompt}) => {

    // Access your API key as an environment variable (see "Set up your API key" above)
  const genAI = new GoogleGenerativeAI(process.env.API_KEY);

  async function run() {
    // For text-only input, use the gemini-pro model
    const model = genAI.getGenerativeModel({ model: "gemini-pro"});

    const prompt = "What is matter?";

    const result = await model.generateContentStream(prompt);
    const response = await result.response;
    const text = response.text();
    console.log(text);

    return text;
  }

  let text = run();

  
  return (
    <div>
      {text}
    </div>
  );
}
 
export default BotResponse;