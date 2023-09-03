// Define a data model for chat messages
export interface ChatMessage {
    role: 'user' | 'assistant' | 'system';
    content: string;
  }
  