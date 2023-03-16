import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: ${(p) =>
    p.messageType === "receive" ? "row" : "row-reverse"};
  justify-content: flex-start;
  border: 1px solid black;
`;

const Avatar = styled.div``;
const MessageBody = styled.div`
  flex: 1;
`;
const Name = styled.div``;
// const Date = styled.div`

// `;
const Content = styled.div`
  margin-left: ${(p) => (p.messageType === "receive" ? null : "auto")};
  width: fit-content;
`;

const message = ({ messageType, name, content }) => {
  return (
    <Wrapper messageType={messageType}>
      <Avatar messageType={messageType}>[avatar]</Avatar>
      <MessageBody>
        {messageType !== "send" && <Name>[{name}]</Name>}
        <Content messageType={messageType}>{content}</Content>
      </MessageBody>
    </Wrapper>
  );
};

export default message;
