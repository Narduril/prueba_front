import { MessageContainer, Message } from './MessageText.styled';

const MessageText = ({ text }) => {
  return (
    <MessageContainer>
      <Message>{text}</Message>
    </MessageContainer>
  );
};

export default MessageText;
