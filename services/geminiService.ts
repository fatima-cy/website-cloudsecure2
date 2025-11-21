import { GoogleGenAI, Chat } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are the official AI Assistant for CloudSecure Solutions Ltd.
Your goal is to help visitors understand the company's three main pillars:
1. Cybersecurity Services: Managed Detection, Pen Testing, Disaster Recovery.
2. EcoCold Chain Solutions: Solar-powered cold storage for farmers to reduce post-harvest loss.
3. CyberTales Africa (Cyber Wahala): Animated storytelling to teach cybersecurity safety.

Tone: Professional, helpful, and technically accurate, but accessible.
If asked about "Cyber Wahala", mention the character 'Sarah' and the educational animated series.
If asked about farming, focus on reducing waste with solar cold rooms.
Keep responses concise (under 100 words) unless asked for a detailed explanation.
`;

let chatSession: Chat | null = null;

export const getChatResponse = async (message: string): Promise<string> => {
  try {
    if (!process.env.API_KEY) {
      return "I'm sorry, but I'm currently offline (API Key missing). Please contact the team directly.";
    }

    if (!chatSession) {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      chatSession = ai.chats.create({
        model: 'gemini-2.5-flash',
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
        },
      });
    }

    const response = await chatSession.sendMessage({ message });
    return response.text || "I couldn't generate a response.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting to the server right now. Please try again later.";
  }
};