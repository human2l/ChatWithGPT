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

const EmailInput = styled.input`
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
  return (
    <Wrapper>
      <LoginCard>
        <AppTittle>Chat with GPT</AppTittle>
        <LoginTittle>Login</LoginTittle>
        <EmailInput />
        <PasswordInput />
        <LoginButton>Sign in</LoginButton>
        <RegisterRedirection>
          Don't have an account?{" "}
          <a href="#" onClick={() => console.log(123)}>
            Register
          </a>
        </RegisterRedirection>
      </LoginCard>
    </Wrapper>
  );
};

export default Login;
