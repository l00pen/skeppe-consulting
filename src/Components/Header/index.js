import React from 'react';
import styled from 'styled-components/macro'

import { Slide } from "react-awesome-reveal";
import { Link } from "react-router-dom";

const HeaderStyled = styled.header`
  z-index: 1;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;

const NavButton = styled.div`
  height: 30px;
  width 30px;
  border: 1px solid black;
  background-color: transparent;
  border-radius: ${({ isOpen }) => isOpen ? '50%' : 0};
  transition: border-radius 0.5s ease-in;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  z-index: 1;

  &:hover {
    background-color: rgba(0, 0, 0, 0.3);
    transition: all 0.2s ease-in;
    cursor: pointer;
  }

  &:focus {
    outline: none;
    box-shadow: 0px 0px 1em #0066ff;
  }

  @media only screen and (min-width: 768px) {
    margin: calc(5vh - 15px) calc(5vw - 15px);
  }
`;

const NavigationRoot = styled.nav`
  width: 100%;
  align-content: flex-start;
  display: flex;
  height:100%;
  flex-direction:column;
  box-sizing: border-box;
  position: absolute;

  & > div {
    flex: 1 0 0;
    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;
    &:focus {
      outline: none;
    }
  }

  & > div:nth-child(even) {
    background: ${(props) => { return props.isOpen ? 'rgba(0, 0, 0, 0.7)' : 'transparent'}};
  }

  & > div:nth-child(odd) {
    background: ${(props) => { return props.isOpen ? 'rgba(255, 255, 255, 0.7)' : 'transparent'}};
  }

  & a {
    font-size: 10vw;
    text-decoration: none;
  }

  // Because React Router DOM
  & > div:nth-child(even) a {
    color: rgba(255, 255, 255, 1);
  }

  // Because React Router DOM
  & > div:nth-child(odd) a {
    color: black;
  }
`;

const Header = ({ isNavOpen, toggleIsNavOpen }) => {
  const navList = [
    {label: 'Who am I?', route: '/'},
    {label: 'Work', route: '/work'},
    {label: 'Contact', route: '/contact'},
  ];
  return (
    <HeaderStyled isOpen={isNavOpen}>
      <NavButton onClick={toggleIsNavOpen} isOpen={isNavOpen} />
      { isNavOpen &&
        <NavigationRoot isOpen={isNavOpen}>
          <Slide cascade direction={'left'}>    
            { navList.map(({ label, route }) => (
              <Link to={route} onClick={toggleIsNavOpen} key={route}>
                {label}
              </Link> 
            ))}
          </Slide>
        </NavigationRoot>
      }
    </HeaderStyled>
  );
}
export default Header;