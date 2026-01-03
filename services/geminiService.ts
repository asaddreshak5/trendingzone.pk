
import { GoogleGenAI } from "@google/genai";
import { PRODUCTS, BRAND_NAME, OWNER_NAME, CONTACT_PHONE } from "../constants";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function getAIResponse(userInput: string) {
  try {
    const productsContext = PRODUCTS.map(p => `- ${p.name}: Rs. ${p.price} (${p.category})`).join('\n');
    
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userInput,
      config: {
        systemInstruction: `You are the Official AI Assistant for ${BRAND_NAME}, a premium brands store in Pakistan owned by ${OWNER_NAME}.
        Your goal is to help customers find products, explain brand value, and guide them to checkout.
        
        Business Details:
        - Owner: ${OWNER_NAME}
        - WhatsApp/Phone: ${CONTACT_PHONE}
        - Social Media (FB/IG): trendingzone.pk
        
        Available Products:
        ${productsContext}
        
        Guidelines:
        1. Be professional, friendly, and concise.
        2. If a user asks for a recommendation, pick from the provided list.
        3. Remind users that they can order directly via WhatsApp or the website's Cart.
        4. If they ask about the owner, mention Ali Asad.
        5. Keep responses short and helpful.`,
      },
    });

    return response.text || "I'm sorry, I couldn't process that. How can I help you with TrendingZone.pk products today?";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Our AI assistant is currently resting. Please contact us directly at 03366441941!";
  }
}
