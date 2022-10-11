import { MessageContainer, Message } from './MessageText.styled';

/**
 * Este componente renderiza un mensaje.
 * @param { text }
 * @returns MessageText
 */
const MessageText = ({ text }) => {
  return (
    <MessageContainer>
      <Message>{text}</Message>
    </MessageContainer>
  );
};

export default MessageText;
