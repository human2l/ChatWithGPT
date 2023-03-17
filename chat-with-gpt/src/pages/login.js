import { useRouter } from "next/router";
import { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  padding-top: 20vh;
`;

const LoginCard = styled.div`
  width: 320px;
  border: 1px solid red;
  margin: auto;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

const AppTittle = styled.div``;

const LoginTittle = styled.div``;

const UsernameInput = styled.input`
  width: 100%;
`;

const PasswordInput = styled.input`
  width: 100%;
`;
const LoginButton = styled.button`
  width: 100%;
`;

const RegisterRedirection = styled.div``;

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const handleLogin = async (e) => {
    try {
      setIsLoading(true);

      e.preventDefault();
      console.log("logging in...");
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });
      const loggedInResponse = await response.json();
      if (loggedInResponse.done) {
        console.log("log in successful");
        router.push("/");
      } else {
        setIsLoading(false);
      }
    } catch (error) {
      setIsLoading(false);
      console.error("Something went wrong logging in", error);
    }
  };
  return (
    <Wrapper>
      <form onSubmit={handleLogin}>
        <LoginCard>
          <AppTittle>Chat with GPT</AppTittle>
          <LoginTittle>Login</LoginTittle>
          <UsernameInput
            type="text"
            onChange={(e) => setUsername(e.target.value)}
          />
          <PasswordInput
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <LoginButton type="submit">
            {isLoading ? "Logging in..." : "Sign In"}
          </LoginButton>
          <RegisterRedirection>
            Don't have an account?{" "}
            <a href="#" onClick={() => console.log(123)}>
              Register
            </a>
          </RegisterRedirection>
        </LoginCard>
      </form>
    </Wrapper>
  );
};

export default Login;
