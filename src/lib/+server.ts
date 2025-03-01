import { GoogleGenerativeAI } from "@google/generative-ai"
import dotenv from 'dotenv'

export async function POST({ }) {
    dotenv.config()
    
    console.log("SFLKJKD")
    //@ts-ignore
    const apiKey: string = process.env.API_KEY;
    
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
    
    const prompt = "Explain how AI works";
    
    const result = await model.generateContent(prompt);
    console.log(result)

}
