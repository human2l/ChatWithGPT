import styled from "styled-components";
import Message from "./message";

const Wrapper = styled.div`
  height: 100%;
  padding-top: 64px;
  padding-bottom: 48px;
  background-color: #e1e1f7;
`;

const MessageList = styled.div`
  min-height: 100%;
  width: 100%;
  padding: 16px;
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
              name={message.role === "user" ? "" : "GPT"}
              content={message.content}
            />
          ))}
      </MessageList>
    </Wrapper>
  );
};

export default messageWindow;
