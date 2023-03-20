import Image from "next/image";
import styled from "styled-components";
import gptIcon from "../assets/images/gpt.png";
const Wrapper = styled.div`
  display: flex;
  flex-direction: ${(p) =>
    p.messageType === "receive" ? "row" : "row-reverse"};
  justify-content: flex-start;
  margin-bottom: 16px;
  gap: 8px;
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
  background-color: ${(p) =>
    p.messageType === "receive" ? "#92A9FC" : "white"};
  padding: 5px 12px;
  border-radius: 0.4rem;
`;

const message = ({ messageType, name, content }) => {
  const formattedContent = content.replace(/\n/g, "<br>");
  return (
    <Wrapper messageType={messageType}>
      {messageType !== "send" && (
        <Avatar messageType={messageType}>
          <Image src={gptIcon} alt="GPT Avatar" width={32} height={32} />
        </Avatar>
      )}
      <MessageBody>
        {/* {messageType !== "send" && <Name>{name}</Name>} */}
        <Content messageType={messageType}>
          <p dangerouslySetInnerHTML={{ __html: formattedContent }}></p>
        </Content>
      </MessageBody>
    </Wrapper>
  );
};

export default message;
