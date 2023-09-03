import React, { useState, useRef, useEffect } from "react";
import Icon from "@mdi/react";
import { mdiPlus, mdiSend } from "@mdi/js";

// type SetStateFunction<T> = React.Dispatch<React.SetStateAction<T>>;
// type ChatProp = {
//   setLoading: SetStateFunction<boolean>;
// };
const Chat: React.FC = () => {
  return (
    <footer> 

      <div className="biruk">
        <input
          className="appearance-none bg-transparent border-none  rounded-lg p-4 w-full bg-gray-200"
          type="text"
          placeholder="Ask me anything..."
          aria-label="message"
        />
        <button className="text-chat hover:text-black ">
          <Icon path={mdiSend} size={2} color="#F97C08" />
        </button>
      </div>
    </footer>
  );
};

export default Chat;
