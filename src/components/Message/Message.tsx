import React from "react";
import styles from "./Message.module.scss";

// Types
import { MessageProps } from "../../types/Interface"


const Message: React.FC<MessageProps> = ({ msg, type }) => {
  return (
    <div className={`${styles.message} ${styles.error}`}>
      {msg.map((err, index) => {
        return <p key={index}>{err}</p>
      })}

    </div>
  );
};

export default Message;
