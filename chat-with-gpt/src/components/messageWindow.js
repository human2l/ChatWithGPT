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

const messageWindow = () => {
  return (
    <Wrapper>
      <MessageList>
        <Message
          messageType="send"
          name="Alice"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit."
        />
        <Message
          messageType="send"
          name="Alice"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit."
        />
        <Message
          messageType="receive"
          name="Bob"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit."
        />
        <Message
          messageType="send"
          name="Alice"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit."
        />
        <Message
          messageType="receive"
          name="Bob"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit."
        />
      </MessageList>
    </Wrapper>
  );
};

export default messageWindow;
