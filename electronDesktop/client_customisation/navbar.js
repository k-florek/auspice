import React from "react";
import styled from 'styled-components';

const NavBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  theme: "sidebarTheme";
`;

const Title = styled.a`
  padding: 0px;
  color: #000;
  text-decoration: none;
  color: ${(props) => props.theme.color};
  font-size: 20px;
  font-weight: 400;
  cursor: pointer;
  letter-spacing: 1rem;
`;

const AuspiceNavBar = ({narrativeTitle, sidebar}) => {
  if (!sidebar) return null;
  return (
    <NavBarContainer>
      <Title href="/">
        {"Auspice"}
      </Title>
    </NavBarContainer>
  );
};

export default AuspiceNavBar;
