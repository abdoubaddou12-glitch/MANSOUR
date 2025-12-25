
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const generateBlogDraft = async (topic: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `اكتب مسودة مقال مدونة احترافي باللغة العربية حول موضوع: ${topic}. 
      يجب أن يتضمن المقال: عنواناً جذاباً، مقدمة، فقرات تفصيلية، وخاتمة.`,
    });
    return response.text;
  } catch (error) {
    console.error("AI Generation Error:", error);
    return "عذراً، فشل توليد المحتوى حالياً.";
  }
};

export const summarizePost = async (content: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `قم بتلخيص النص التالي في جملة واحدة جذابة لتكون مقتطفاً للمقال: ${content}`,
    });
    return response.text;
  } catch (error) {
    return content.substring(0, 100) + "...";
  }
};
