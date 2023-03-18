import styled from "styled-components";

const Wrapper = styled.div`
  height: 64px;
  background-color: #696799;
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 0 16px;
`;

const Menu = styled.a``;

const Name = styled.div`
  font-weight: 700;
  color: white;
  &::before {
    font-weight: 500;
    content: "welcome ";
  }
`;

const Group = styled.a`
  margin-left: auto;
`;

const navbar = ({ username }) => {
  return (
    <Wrapper>
      {/* <Menu>[menu]</Menu> */}

      <Name>{username}</Name>
      {/* <Group>[group]</Group> */}
    </Wrapper>
  );
};

export default navbar;
