import { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 48px;
  border: 1px solid green;
  display: flex;
  align-items: center;
  padding: 0 16px;
  gap: 16px;
`;

const Input = styled.input`
  flex: 1;
`;

const SendButton = styled.button``;

const messageInput = ({ addNewMessage, isLoading }) => {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    console.log(`sending message: ${message}`);
    addNewMessage("user", message);
    setMessage("");
  };

  return (
    <Wrapper>
      <Input onChange={(e) => setMessage(e.target.value)} value={message} />
      <SendButton onClick={handleSend} disabled={isLoading}>
        {isLoading ? "......" : "Send"}
      </SendButton>
    </Wrapper>
  );
};

export default messageInput;
