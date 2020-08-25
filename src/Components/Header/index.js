import React, { useState, useEffect } from 'react';
import styled from 'styled-components/macro'

import Link from '../Link';
import Navigation from '../Navigation';

const HeaderStyled = styled.header`
  z-index: 1;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: ${({ isOpen }) => isOpen ? '100%' : 'auto'};
  height: ${({ isOpen }) => isOpen ? '100%' : 'auto'};
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
  margin: calc(5vh - 15px) calc(5vw - 15px);
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
`;

const NavigationRoot = styled.nav`
  width: 100%;
  align-content: flex-start;
  display: flex;
  margin-left: ${(props) => { return props.isOpen ? 0 : 'calc(-100% - 5vw)'}};
  transition: margin 0.5s ease-in;
  height:100%;
  flex-direction:column;
  box-sizing: border-box;
  position: absolute;
`;

const NavLinkWrapper = styled.div`
  transition: background 0.5s ease-in;
  font-size: 1em;
  height: auto;
  cursor: pointer;
  flex: 1 1 0;
  display: flex;
  justify-content: center;
  align-items: center;

  &:focus {
    outline: none;
  }

  & a {
    font-size: 10vw;
    text-decoration: none;
  }

  &:nth-child(2n) {
    background: ${(props) => { return props.isOpen ? 'rgba(0, 0, 0, 0.7)' : 'transparent'}};
  }

  // Because React Router DOM
  &:nth-child(2n) > a {
    color: rgba(255, 255, 255, 1);
  } 

  &:nth-child(2n+1) {
    background: ${(props) => { return props.isOpen ? 'rgba(255, 255, 255, 0.7)' : 'transparent'}};
  }

  // Because React Router DOM
  &:nth-child(2n+1) > a {
    color: black;
  }
`;

const Header = ({ isNavOpen, toggleIsNavOpen }) => {
  return (
    <HeaderStyled isOpen={isNavOpen}>
      <NavButton onClick={toggleIsNavOpen} isOpen={isNavOpen} />
      <NavigationRoot isOpen={isNavOpen}>
        <NavLinkWrapper isOpen={isNavOpen}>
          <Link to="/" onClick={toggleIsNavOpen}>
            Who am I?
          </Link> 
        </NavLinkWrapper>
        <NavLinkWrapper isOpen={isNavOpen}>
          <Link to="/work" onClick={toggleIsNavOpen}>
            Work
          </Link>
        </NavLinkWrapper>
        <NavLinkWrapper isOpen={isNavOpen}>
          <Link to="/contact" onClick={toggleIsNavOpen}>
            Contact
          </Link>
        </NavLinkWrapper>
      </NavigationRoot>
    </HeaderStyled>
  );
}
export default Header;