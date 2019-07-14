import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components/macro'
import ContentSection from 'styleguide/dist/ContentSection';
import Background from './Background';
import Projects from './Projects';

import Header from './Components/Header';
import Footer from './Components/Footer';

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

class App extends Component {
  render() {
    const email = 'lovisa@skeppeconsulting.com';
    return (
      <ThemeProvider theme={{ mode: 'light', layout: 'cozy' }}>
        <AppRoot>
          <Background />
          <Header />
          <AppContent>
            <ContentSection>
              <AppTitle>SKEPPE CONSULTING</AppTitle>
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
