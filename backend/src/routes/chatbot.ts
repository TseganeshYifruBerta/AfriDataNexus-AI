
import express from 'express';
import { generateResponse } from '../services/chatbotService';
import { ChatMessage } from '../models/chatMessage';

const router = express.Router();

// Route to handle user messages and get chatbot responses
router.post('/chat', async (req, res) => {
  try {
    const userMessage = req.body.userMessage;  // Assuming user message is sent in the request body
    const chatHistory: ChatMessage[] = req.body.chatHistory || [];
    
    // Add user's message to chat history
    chatHistory.push({ role: 'user', content: userMessage });

    // Generate chatbot's response
    const chatbotResponse = await generateResponse(chatHistory);

    // Add chatbot's response to chat history
    chatHistory.push({ role: 'assistant', content: chatbotResponse });

    // Send the chatbot's response back to the client
    res.json({ chatbotResponse, chatHistory });
  } catch (error) {
    console.error('Error handling chat message:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default router;
