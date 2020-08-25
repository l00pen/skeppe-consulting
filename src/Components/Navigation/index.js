import React, { Component } from 'react';
import styled from 'styled-components'

const NavigationRoot = styled.nav`
  width: 100%;
  align-content: flex-start;
  display: flex;
  width: 100%;
  margin-left: ${(props) => { return props.isOpen ? 0 : '-100%'}};
  transition: margin 0.5s ease-in;
`;

const Button = styled.button`
  background: transparent;
  border: 1px solid rgba(253,95,0,0.5);
  color: rgba(253,95,0,0.5);
  font-size: 1em;
  padding: 1em 1em;
  height: auto;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;

const Navigation = ({ isOpen }) => {
  return (
    <NavigationRoot isOpen={isOpen}>
      <Button>
        Projects
      </Button>
      <Button>
        Who am I?
      </Button>
    </NavigationRoot>
  );
}

export default Navigation;
