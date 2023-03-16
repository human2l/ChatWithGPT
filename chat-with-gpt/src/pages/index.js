import MessageInput from "@/components/messageInput";
import MessageWindow from "@/components/messageWindow";
import Navbar from "@/components/navbar";
import { DUMMY_DATA } from "@/constances";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const MessageWindowWrapper = styled.div`
  flex: 1;
`;

export default function Home() {
  return (
    <Wrapper>
      <Navbar username={DUMMY_DATA.username} />
      <MessageWindowWrapper>
        <MessageWindow />
      </MessageWindowWrapper>
      <MessageInput />
    </Wrapper>
  );
}
