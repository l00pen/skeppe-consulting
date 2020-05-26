import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components'
import Background from './Background';
import Projects from './Projects';

import Header from './Components/Header';
import Footer from './Components/Footer';
import {
  AppTitle,
  Title
} from './Components/Text';

const AppRoot = styled.div`
  text-align: center;
  font-weight: 200;

  display: flex;
  height: 100vh;
  flex-direction: column;

  z-index: 0;
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

const ContentSection = styled.section`
  background-color: rgba(245,245,245,0.7);
  color: rgba(3,2,20,0.7);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1 0 auto;
  padding: 1em;
  min-height: 20em;
`;

class App extends Component {
  render() {
    const email = 'lovisa.skeppe@gmail.com';
    return (
      <ThemeProvider theme={{ mode: 'light', layout: 'cozy' }}>
        <AppRoot>
          <Background />
          <Header />
          <AppContent>
            <ContentSection>
              <AppTitle>SKEPPE CONSULTING</AppTitle>
            </ContentSection>
            <Divider />
            <ContentSection>
              <Title>Contact</Title>
              <p>
                {email}
              </p>
            </ContentSection>
            <Divider />
            <ContentSection>
              <Projects />
            </ContentSection>
          </AppContent>
          <Footer />
        </AppRoot>
      </ThemeProvider>
    );
  }
}

export default App;
