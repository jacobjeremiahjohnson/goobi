import type { PageLoad } from './$types'
import { GoogleGenerativeAI } from "@google/generative-ai"
import dotenv from 'dotenv'

export const load: PageLoad = async ({ params }) => {
    dotenv.config()
     
    const apiKey = process.env.API_KEY as string;
     
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
    
    const prompt = "Explain how AI works";
    
    const result = (await model.generateContent(prompt));
    console.log(result.response.text);

    return  {
        post: await model.generateContent(prompt)
    }
}