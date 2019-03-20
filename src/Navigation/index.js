import React, { Component } from 'react';
import styled from 'styled-components/macro'

const NavigationRoot = styled.nav`
  height: 1em;
  width: 100%;
  align-content: flex-start;
  display: flex;
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

class Navigation extends Component {
  render() {
    return (
      <NavigationRoot>
        <Button>
          Projects
        </Button>
        <Button>
          What can I do for you
        </Button>
      </NavigationRoot>
    );
  }
}

export default Navigation;
