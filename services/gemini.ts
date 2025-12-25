
import { GoogleGenAI } from "@google/genai";

const getAIInstance = () => {
  let apiKey = '';
  try {
    // Check for process.env safely
    apiKey = (typeof process !== 'undefined' && process.env) ? process.env.API_KEY || '' : '';
  } catch (e) {
    console.warn("Could not access process.env.API_KEY");
  }
  
  return new GoogleGenAI({ apiKey: apiKey || 'NO_KEY_PROVIDED' });
};

export const generateBlogDraft = async (topic: string) => {
  try {
    const ai = getAIInstance();
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `اكتب مسودة مقال مدونة احترافي باللغة العربية حول موضوع: ${topic}. 
      يجب أن يتضمن المقال: عنواناً جذاباً، مقدمة، فقرات تفصيلية، وخاتمة.`,
    });
    return response.text || "فشل توليد المحتوى من الذكاء الاصطناعي.";
  } catch (error) {
    console.error("AI Generation Error:", error);
    return "عذراً، تعذر استخدام ميزة الذكاء الاصطناعي حالياً. يرجى كتابة المحتوى يدوياً.";
  }
};

export const summarizePost = async (content: string) => {
  try {
    const ai = getAIInstance();
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `قم بتلخيص النص التالي في جملة واحدة جذابة لتكون مقتطفاً للمقال: ${content}`,
    });
    return response.text || content.substring(0, 100) + "...";
  } catch (error) {
    return content.substring(0, 100) + "...";
  }
};
