export interface ChatResponse {
  userMessage: string;
  chatHistory:Chatt[]
}

export interface Chatt {
  role:string,
  content: string
}
