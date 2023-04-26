import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from '@/styles/Message.module.scss';

import { MessageProps } from '@/types/Interface';

const Message: React.FC<MessageProps> = ({ msg }) => (

  <div className={`${styles.message} ${styles.error}`}>
    {msg.map((err) => (
      <p key={uuidv4()}>
        {err}
      </p>
    ))}
  </div>
);

export default Message;
