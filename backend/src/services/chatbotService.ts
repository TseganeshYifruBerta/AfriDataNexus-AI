import axios from 'axios';
import { ChatMessage } from '../models/chatMessage';
import dotenv from 'dotenv';
dotenv.config();

// OpenAI API endpoint and API key (replace with your credentials)
const OPENAI_API_ENDPOINT = 'https://api.openai.com/v1/chat/completions';  // Your API endpoint
const OPENAI_API_KEY = process.env.API_KEY;  // Your API key

// Function to send a message to GPT-3.5 and receive a response
export async function generateResponse(inputMessages: ChatMessage[]): Promise<string> {
  try {
    const response = await axios.post(
      OPENAI_API_ENDPOINT,
      {
        messages: inputMessages,
        model: "gpt-3.5-turbo",
        max_tokens: 1024,
        temperature: 0.3,
      },
      {
        headers: {
          'Authorization': `Bearer ${OPENAI_API_KEY}`,
          'Content-Type': 'application/json'
        },
        
      }
    );
    //   console.log(OPENAI_API_ENDPOINT, OPENAI_API_KEY, inputMessages)
    // Extract and return the chatbot's response
    // console.log('hello pretty', response.data.choices[0].message.content)
    return response.data.choices[0].message.content;
    // return ""
  } catch (error) {
    console.error('Error generating chatbot response:', error);
    throw error;
  }
}
