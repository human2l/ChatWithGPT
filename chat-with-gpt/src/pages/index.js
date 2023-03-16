import MessageInput from "@/components/messageInput";
import MessageWindow from "@/components/messageWindow";
import Navbar from "@/components/navbar";
import { verifyToken } from "@/lib/utils";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const MessageWindowWrapper = styled.div`
  flex: 1;
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
  return (
    <Wrapper>
      <Navbar username={user} />
      <MessageWindowWrapper>
        <MessageWindow />
      </MessageWindowWrapper>
      <MessageInput />
    </Wrapper>
  );
}

export default Home;
