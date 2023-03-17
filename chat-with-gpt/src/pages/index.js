import MessageInput from "@/components/messageInput";
import MessageWindow from "@/components/messageWindow";
import Navbar from "@/components/navbar";
import { verifyToken } from "@/lib/utils";
import { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const MessageWindowWrapper = styled.div`
  flex: 1;
`;

const MessageInputWrapper = styled.div`
  width: 100%;
  position: fixed;
  left: 0;
  bottom: 0;
`;

export const getServerSideProps = async ({ req, res }) => {
  const token = req.cookies.token;
  const user = await verifyToken(token);
  if (user) {
    return {
      props: { user },
    };
  }
  return {
    redirect: {
      destination: "/login",
      permanent: false,
    },
  };
};

function Home({ user }) {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const addNewMessage = async (role, newMessageContent) => {
    setIsLoading(true);
    const newMessage = { role, content: newMessageContent };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify([...messages, newMessage]),
      });
      if (response.ok) {
        const gptMessage = await response.json();
        setMessages((prevMessages) => [...prevMessages, gptMessage]);
      } else {
        console.log("something went wrong with GPT", response);
      }
    } catch (error) {
      console.log("something is wrong", error);
    }
    setIsLoading(false);
  };

  return (
    <Wrapper>
      <Navbar username={user} />
      <MessageWindowWrapper>
        <MessageWindow messages={messages} />
      </MessageWindowWrapper>
      <MessageInputWrapper>
        <MessageInput addNewMessage={addNewMessage} isLoading={isLoading} />
      </MessageInputWrapper>
    </Wrapper>
  );
}

export default Home;
