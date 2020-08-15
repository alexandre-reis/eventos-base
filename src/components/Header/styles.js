import styled from "styled-components";

export const Container = styled.header`
  background: orange;
`;

export const Content = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  height: 64px;

  img {
    margin: 10px;
    max-width: 64px;
  }

  nav {
    display: flex;
    align-items: center;
  }
`;

export const Profile = styled.header``;
