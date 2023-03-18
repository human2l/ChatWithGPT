import { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 48px;
  background-color: #cdcdcd;
  display: flex;
  align-items: center;
  padding: 0 16px;
  gap: 16px;
`;

const Input = styled.input`
  flex: 1;

  border: none;
  background-color: #cdcdcd;
  &:focus {
    outline: none;
    border-bottom: 1px solid #92a9fc;
  }
`;

const SendButton = styled.button`
  padding: 8px 16px;
  border: 1px solid #333;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
  border: none;
  background-color: #92a9fc;
  text-align: center;
  text-decoration: none;
`;

const messageInput = ({ addNewMessage, isLoading }) => {
  const [message, setMessage] = useState("");

  const handleSend = (e) => {
    e.preventDefault();
    if (message === "") return;
    console.log(`sending message: ${message}`);
    addNewMessage("user", message);
    setMessage("");
  };

  return (
    <form onSubmit={handleSend}>
      <Wrapper>
        <Input
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          placeholder="Type something"
        />
        <SendButton type="submit" disabled={isLoading}>
          {isLoading ? "......" : "Send"}
        </SendButton>
      </Wrapper>
    </form>
  );
};

export default messageInput;
