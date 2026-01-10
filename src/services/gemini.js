import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

let chatSession = null;

const SYSTEM_PROMPT = `
You are Ronit's AI Assistant, a helpful and professional virtual assistant for Ronit Prasad's portfolio website.
Your goal is to answer visitor questions about Ronit based on his skills, projects, and background.

**Ronit's Persona & Background:**
- **Role:** Data Science Intern & Web Developer
- **Focus:** Python, React, Data Analytics, Machine Learning
- **Experience:**
    - Developing portfolio websites with React and Tailwind CSS.
    - Working on Django backends.
    - Data analysis and visualization.
- **Tone:** Professional, enthusiastic, concise, and friendly.

**Rules:**
1.  **Be Concise:** Keep answers short and relevant (2-3 sentences max unless asked for detail).
2.  **Stay on Topic:** Only answer questions related to Ronit, his work, tech stack, or professional inquiries. Refuse to answer general irrelevant questions (e.g., "What is the capital of France?") politely by saying "I can only answer questions about Ronit."
3.  **No Hallucinations:** If you don't know something about Ronit, say "I don't have that information right now, but you can contact Ronit directly."
4.  **Contact Info:** If asked how to contact him, suggest the Contact form on the website or his social links.

**Key Projects to Mention if asked:**
- Portfolio Website (React, Tailwind)
- (Add other projects here if known, otherwise generic)

Start by acting as this persona.
`;

export const initializeGemini = async () => {
  if (!API_KEY) {
    console.warn("Gemini API Key is missing!");
    return null;
  }

  try {
    const genAI = new GoogleGenerativeAI(API_KEY);
    // Basic safety settings to prevent over-blocking
    const safetySettings = [
      { category: "HARM_CATEGORY_HARASSMENT", threshold: "BLOCK_NONE" },
      { category: "HARM_CATEGORY_HATE_SPEECH", threshold: "BLOCK_NONE" },
      { category: "HARM_CATEGORY_SEXUALLY_EXPLICIT", threshold: "BLOCK_NONE" },
      { category: "HARM_CATEGORY_DANGEROUS_CONTENT", threshold: "BLOCK_NONE" },
    ];

    const model = genAI.getGenerativeModel({ model: "gemini-flash-latest", safetySettings });

    chatSession = model.startChat({
      history: [
        {
          role: "user",
          parts: [{ text: SYSTEM_PROMPT }],
        },
        {
          role: "model",
          parts: [{ text: "Understood. I am ready to answer questions about Ronit Prasad." }],
        },
      ],
    });

    return chatSession;
  } catch (error) {
    console.error("Failed to initialize Gemini:", error);
    return null;
  }
};

export const sendMessageToGemini = async (message) => {
  if (!API_KEY) {
    return "⚠️ Configuration Error: API Key is missing. Please add VITE_GEMINI_API_KEY to your .env file.";
  }

  if (!chatSession) {
    await initializeGemini();
    if (!chatSession) {
      return "⚠️ Connection Failed: Could not initialize chat session. Check console for details.";
    }
  }

  try {
    const result = await chatSession.sendMessage(message);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error("Error sending message to Gemini:", error);
    // Return the actual error message to the user for debugging
    return `⚠️ Error: ${error.message || "Unknown error occurred"}.`;
  }
};
