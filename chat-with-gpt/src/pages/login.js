import Router from "next/router";
import { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  padding-top: 20vh;
  background-color: #b0c5fe;
`;

const LoginCard = styled.div`
  background-color: white;
  border-radius: 10px;
  width: 320px;

  margin: auto;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

const AppTittle = styled.div`
  color: #6d6b89;
  font-size: 2rem;
`;

const LoginTittle = styled.div`
  color: #414142;
`;

const UsernameInput = styled.input`
  padding: 8px;
  border: none;
  width: 100%;

  border-bottom: 1px solid #828384;
  &:focus {
    outline: none;
  }
`;

const PasswordInput = styled.input`
  padding: 8px;
  border: none;
  border-bottom: 1px solid #828384;
  width: 100%;
  &:focus {
    outline: none;
  }
`;
const LoginButton = styled.button`
  width: 100%;
  border: none;
  background-color: #b0c5fe;
  border-radius: 5px;
`;

const RegisterRedirection = styled.div``;

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
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
        Router.push("/");
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
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <PasswordInput
            type="password"
            placeholder="password"
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
