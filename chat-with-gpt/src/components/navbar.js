import styled from "styled-components";

const Wrapper = styled.div`
  height: 64px;
  border: 1px solid red;
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 0 16px;
`;

const Menu = styled.a``;

const Name = styled.div``;

const Group = styled.a`
  margin-left: auto;
`;

const navbar = ({ username }) => {
  return (
    <Wrapper>
      <Menu>[menu]</Menu>
      <Name>{username}</Name>
      <Group>[group]</Group>
    </Wrapper>
  );
};

export default navbar;
