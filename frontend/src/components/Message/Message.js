import "./Message.css";

const Message = ({ msg, type }) => {
  return (
    <div className={`message ${type}`}>
      {msg.map((err, index) => {
        return <p key={index}>{err}</p>
      })}
      
    </div>
  );
};

export default Message;
