import MessageInput from "@/components/messageInput";
import MessageWindow from "@/components/messageWindow";
import Navbar from "@/components/navbar";
import { Inter } from "next/font/google";
import styled from "styled-components";

const inter = Inter({ subsets: ["latin"] });

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
      <Navbar />
      <MessageWindowWrapper>
        <MessageWindow />
      </MessageWindowWrapper>
      <MessageInput />
    </Wrapper>
  );
}
