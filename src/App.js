import React, { Component } from 'react';
import styled from 'styled-components/macro'
import Background from './Background';
import Projects from './Projects';

const AppRoot = styled.div`
  text-align: center;
  font-weight: 200;

  display: flex;
  height: 100vh;
  flex-direction: column;

  z-index: 0;
`;

const AppTitle = styled.h1`
  color: rgba(0, 0, 0, 1);
  font-size: 15vw;
  font-weight: 100;

  @media only screen and (min-width: 768px) {
    font-size: 5vw;
  } 
`;

const AppHeader = styled.header`
  height: 2vh;
  z-index: 1;
`;

const AppFooter = styled.footer`
  height: 2vh;
  z-index: 1;
`;

const AppContent = styled.main`
  overflow: auto;
  flex: 1;
  padding: 5vh 5vw;
`;

const Divider = styled.hr`
  width: 50%;
  background-color: rgba(245,245,245,0.7);
  color: rgba(245,245,245,0.7);
  border: 0;
  height: 1px;
`;

const Section = styled.section`
  background-color: rgba(245,245,245,0.7);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1 0 auto;
  padding: 0.5em;
  min-height: 20em;
`;


class App extends Component {
  render() {
    const email = 'lovisa@skeppeconsulting.com';
    return (
      <AppRoot>
        <Background />
        <AppHeader />
        <AppContent>
          <Section>
            <AppTitle>SKEPPE CONSULTING</AppTitle>
            <p>
              {email}
            </p>
          </Section>
          <Divider />
          <Section>
            <Projects />
          </Section>
        </AppContent>
        <AppFooter />
      </AppRoot>
    );
  }
}

export default App;
