import Chat from '@/component/chat/Chat';
import { mdiSend } from '@mdi/js';
import Icon from '@mdi/react';
import React, { Component } from 'react';
import chatHis from '@/data/chat.json'
import { messageApi } from '@/store/features/chat/message-history-api';
interface Message {
  message: string;
  isUser: boolean;
}

interface State {
  userInput: string;
  chatHistory: Message[];
}
var count = 0
class Chatbot extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      userInput: '',
      chatHistory: [],
    };
    const initial = {
      userMessage: "How do I get my ID from the kebele?",
      chatHistory: [
        {
          role: "assistant",
          content:
            "You are very experienced assistant that gives out really concise steps on the proceeding of Ethiopian kebele institustions. The lowest level of local government with limited autonomy there are the kebeles. They are at the neighbourhood level and are the primary contact for most citizens living in Ethiopia. Their administrative unit consists of an elected council, a cabinet (executive committee), a social court and the development and security staff. Kebeles are accountable to their woreda councils and are typically responsible for providing basic education, primary health care, agriculture, water, and rural roads. The kebeles are headed by cadres loyal to the political coalition who see the people's everyday lives. Therefore, they are also excellent for observing movements undesirable for the central government.",
        },
      ],
    };
  

  }

  

  

  handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ userInput: event.target.value });
  };

  handleSendMessage = () => {
    const { userInput } = this.state;

    // Add user's message to chat history
    if (userInput.trim() !== '') {
      this.setState((prevState) => ({
        userInput: '',
        chatHistory: [...prevState.chatHistory, { message: userInput, isUser: true }],
      }));

      // Simulate a backend response (you can replace this with actual API calls)
      setTimeout(() => {
        this.setState((prevState) => ({
          chatHistory: [
            ...prevState.chatHistory,
            { message: chatHis.chatHistory[count%5].content, isUser: false },
            
          ],
        }));
      }, 2000); 
      count += 1
    }

    
  };

 render() {
    const { userInput, chatHistory } = this.state;

    return (
      <div className='font-poppin'>
        <div className="p-40">
          {chatHistory.map((message, index) => (
            <div
              key={index}
              className={
                message.isUser ? "py-4 flex flex-wrap" : "py-4 flex flex-wrap"
              }
            >
              <div className="">
                {message.isUser ? (
                  <span className="bg-blue-500 rounded-full mr-10 w-[80px] h-[80px]  items-center justify-center flex">
                    You
                  </span>
                ) : (
                  <span className="bg-primary rounded-full mr-10 w-[80px] h-[80px]  items-center justify-center flex">
                    AfriData
                  </span>
                )}
              </div>
              <div
                className={
                  message.isUser
                    ? "bg-gray-200 py-4 flex flex-wrap w-2/3 px-2"
                    : "py-4 flex flex-wrap w-2/3 px-2"
                }
              >
                {message.message}
              </div>
            </div>
          ))}
        </div>

        <footer>
          <div className="biruk bg-gray-200 rounded-lg h-{30px}">
            <input
              className="appearance-none bg-transparent border-none rounded-lg p-4 w-full bg-gray-200 h-{30px}"
              type="text"
              placeholder="Ask me anything..."
              aria-label="message"
              value={userInput}
              onChange={this.handleInputChange}
            />
            <button
              className="text-chat hover:text-black "
              onClick={this.handleSendMessage}
            >
              <Icon path={mdiSend} size={2} color="#F97C08" />
            </button>
          </div>
        </footer>
      </div>
    );
  }
}

export default Chatbot;
