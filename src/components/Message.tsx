import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from '@/styles/message.module.scss';

import { MessageProps } from '@/types/Interface';

const Message: React.FC<MessageProps> = ({ msg, type }) => (

  <div className={`${styles.message} ${styles[type]}`}>
    {msg
      ? msg.map((err) => (
        <p key={uuidv4()}>
          {err}
        </p>
      ))
      : ''}
  </div>
);

export default Message;
