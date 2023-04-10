import React from "react";
import "./Message.css";

// Types
import { MessageProps } from "../../types/Interface"


const Message: React.FC<MessageProps> = ({ msg, type }) => {
  return (
    <div className={`message ${type}`}>
      {msg.map((err, index) => {
        return <p key={index}>{err}</p>
      })}

    </div>
  );
};

export default Message;
