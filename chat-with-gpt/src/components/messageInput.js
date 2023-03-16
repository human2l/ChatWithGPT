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

const messageInput = () => {
  return (
    <Wrapper>
      <Input />
      <SendButton>Send</SendButton>
    </Wrapper>
  );
};

export default messageInput;
