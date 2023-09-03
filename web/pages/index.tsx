import React, { useState, useEffect } from "react";
import Image from "next/image";
// import { chat_logo } from "@/public";
// import mockChat from "@/data/chat.json";
import user from "@/data/user.json";
import { FC } from "react";
import ChatCard from "@/component/chatbot/ChatCard";
import Chat from "@/component/chat/Chat";
import ChatInput from "@/component/chatbot/ChatInput";
import { useGetMessagesQuery } from "@/store/features/chat/message-history-api";
import { mdiSend } from "@mdi/js";
import Icon from "@mdi/react";
import { count } from "console";
import Chatbot from "@/pages/chat/chats";

interface chatHistory {
  role: string;
  message: string;
}
const mockChat = [
  {
    role: "User",
    message:
      "hi i want to start the process for having a birth certificate, where can i go ?",
  },
  {
    role: "Bot",
    message:
      "Hello! You can initiate the process for obtaining a birth certificate by visiting your local kebele administrative office. They will assist you in starting the application process and guide you through the required steps.",
  },
  {
    role: "User",
    message: "yes i have, i don't know what is required to get the certificate",
  },
  {
    role: "Bot",
    message:
      "No problem, I can help you with that. To obtain a birth certificate, you'll typically need to provide the following information and documents:\n\n1. Full name of the newborn\n2. Date of birth\n3. Place of birth\n4. Names of parents\n5. Parent's identification documents (e.g., ID cards, passports)",
  },
  {
    role: "User",
    message:
      "and also i want to know how long it will take me to have the certificate ?",
  },
  {
    role: "Bot",
    message:
      "The processing time for obtaining a birth certificate can vary depending on several factors, including the administrative procedures in your kebele and any specific requirements they may have. Typically, it may take a few days to a few weeks to receive the birth certificate after submitting your application.",
  },
  { role: "User", message: "ok thank you, i will ask you if i have any" },
];
const Index = () => {
  const [inputValue, setInputValue] = useState("");
  const [chatHistory, setChatHistory] = useState<chatHistory[]>(mockChat);
  const [isBotTyping, setIsBotTyping] = useState(false);

  const handleInputChange = (event: any) => {
    setInputValue(event.target.value);
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
  const { data: messages, isLoading, isError } = useGetMessagesQuery(initial);
  console.log(messages);
  const handleButtonClick = () => {
    if (inputValue.trim() !== "") {
      // Append the user's message to the chat history
      const newUserMessage = { role: "User", message: inputValue };
      setChatHistory((prevChatHistory) => [...prevChatHistory, newUserMessage]);

      // Clear the input field
      setInputValue("");

      // Simulate bot typing
      setIsBotTyping(true);

      // Simulate bot response after a delay
      setTimeout(() => {
        handleBotResponse();
      }, 3000); // Adjust the delay as needed
    }
  };

  const handleBotResponse = () => {
    // Replace this with your logic to fetch bot responses from your JSON data
    const mockResponse = getResponseFromJson();

    // Append the bot's message to the chat history
    setChatHistory([...chatHistory, { role: "Bot", message: mockResponse }]);

    // Bot typing is done
    setIsBotTyping(false);
  };

  const getResponseFromJson = () => {
    const nextMessageIndex = chatHistory.findIndex(
      (message) => message.role === "User" && !message.message
    );
    if (nextMessageIndex >= 0 && nextMessageIndex < mockChat.length - 1) {
      return mockChat[nextMessageIndex + 1].message;
    } else {
      return "No chat history available.";
    }
  };

  return (
    <div className="relative bg-white">
      <div className="body">
        <div className="flex flex-col mb-16 ">
          <div className="flex-grow">
            <div className="flex flex-col gap-2 ">
              <div className="flex  flex-col items-center  gap-2 max-sm:flex-col  justify-center pt-8 mb-6">
                {/* <Image
                  src={"/favicon.ico"}
                  width={100}
                  height={100}
                /> */}
                <p className="text-5xl font-bold text-center font-inter text-primary">
                  Welcome to AfriData<span className="text-black">Nexus</span>
                  <span className="text-5xl">AI</span>
                </p>
                <p className="text-xl text-center font-bold font-inter">
                  Your AI-powered copilot for your services
                </p>
              </div>
              <div className="flex flex-wrap justify-center">
                <Image src={"/landing.svg"} alt={""} width={400} height={200} />
              </div>
              <div className="flex flex-wrap justify-center font-poppins text-xl font-md pt-10">
                <div className="w-1/4 bg-gray-200 rounded-lg m-8 p-6 pb-1">
                  <ChatCard
                    content={
                      "AfriData Nexus is an innovative platform designed to streamline documentation processes in Africa."
                    }
                  />
                </div>
                <div className="w-1/4 bg-gray-200 rounded-lg m-8 p-6 ">
                  <ChatCard
                    content={
                      "User-Friendly Interface:An intuitive platform that simplifies the documentation process for users"
                    }
                  />
                </div>
                <div className="w-1/4 bg-gray-200 rounded-lg m-8 p-6 ">
                  <ChatCard
                    content={
                      "Accessible Information :Easy access to essential documents and information, reducing delays"
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          {/* <div className="shoadow-md">
              {chats.chatHistory.map((message, index: number) => (
                <div
                  key={index}
                  className={
                    typeof message === "string"
                      ? "flex items-center gap-4 "
                      : "flex items-center  gap-4  max-md:justify-end max-md:flex-row-reverse"
                  }
                >
                  <div
                    className={
                      typeof message === "string"
                        ? message ===
                          "An error occured while generating response try again"
                          ? " bg-red-50 p-7 w-full "
                          : " bg-[#f4f8ff] p-7  w-full  "
                        : "bg-white  w-full p-7"
                    }
                  >
                    {typeof message === "string" ? (
                      message ===
                      "An error occured while generating response try again" ? (
                        <p className="max-w-[600px] md:ml-[25%] text-red-600 ">
                          {message}
                        </p>
                      ) : (
                        <p className="max-w-[600px] md:ml-[25%] ">{message}</p>
                      )
                    ) : (
                      <div className="max-w-[600px] md:ml-[25%] pl-1/2 ">
                        <p>{message.content}</p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div> */}
        </div>
      </div>

      {/* <div className="shoadow-md">
            {chatHistory.map((messages, index: number) => (
              <div
                key={index}
                className={
                  messages.role === "User"
                    ? "flex items-center gap-4 justify-end"
                    : "flex items-center gap-4"
                }
              >
                <div
                  className={
                    messages.role === "User"
                      ? "bg-white w-full p-7"
                      : "bg-[#f4f8ff] p-7 w-full"
                  }
                >
                  {messages.message}
                </div>
              </div>
            ))}
            {isBotTyping && (
              <div className="flex items-center gap-4 justify-end">
                <div className="bg-white w-full p-7">Bot is typing...</div>
              </div>
            )}
          </div> */}

      <Chatbot />
    </div>
  );
};

export default Index;
