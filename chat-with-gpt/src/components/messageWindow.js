import styled from "styled-components";
import Message from "./message";

const Wrapper = styled.div`
  height: 100%;
  border: 1px solid blue;
`;

const MessageList = styled.div`
  min-height: 100%;
  width: 100%;
`;

const messageWindow = ({ messages }) => {
  return (
    <Wrapper>
      <MessageList>
        {messages.length > 0 &&
          messages.map((message, index) => (
            <Message
              key={index}
              messageType={message.role === "user" ? "send" : "receive"}
              name={message.role === "user" ? "Alice" : "GPT"}
              content={message.content}
            />
          ))}
      </MessageList>
    </Wrapper>
  );
};

export default messageWindow;
