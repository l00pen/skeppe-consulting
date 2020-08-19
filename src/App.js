import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components'
import Background from './Background';
import Projects from './Projects';

import Header from './Components/Header';
import Footer from './Components/Footer';
import {
  AppTitle,
  Title,
  Text,
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
  flex: 1 0 auto;
  padding: 0.5em;
  min-height: 20em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
`;

const ContentSectionContent = styled.div`
  box-sizing: border-box;
  width: 100%;

  @media only screen and (min-width: 768px) {
    width: 60%;
  }
`;

const ContactCards = styled.a`
  box-sizing: border-box;
  padding: 1em;
  background-color: rgba(230, 230, 230, 0.5);
  flex: 1 0 auto;
  color: rgba(3,2,20,0.7);
  text-decoration: none;

  &:hover {
    color: ${props => props.href ? 'rgba(3,2,20,1)' : 'rgba(3,2,20,0.7)'};
  }

  @media only screen and (min-width: 768px) {

  }
`

const Contact = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
  
  & > ${ContactCards} {
    margin: 0.5em 0 0 0;
  }

  @media only screen and (min-width: 768px) {
    flex-direction: row;
  
    & > ${ContactCards} {
      margin: 0 0.125em 0 0;
    }

    & > ${ContactCards}:last-child {
      margin-right: 0;
    }
  }
`;


class App extends Component {
  render() {
    const email = 'lovisa.skeppe@gmail.com';
    const github = 'https://github.com/l00pen';
    const profileGoogleDocs = 'https://docs.google.com/document/d/e/2PACX-1vRNRfupR3nSkqAGKG9A2FIqJNZ-OoiRYxEe25NnBhUEfODNbG4dOBJs-XlFGPyuErHST0DkopUos1SK/pub';

    return (
      <ThemeProvider theme={{ mode: 'light', layout: 'cozy' }}>
        <AppRoot>
          <Background />
          <Header />
          <AppContent>
            <ContentSection>
              <AppTitle>SKEPPE CONSULTING</AppTitle>
              <ContentSectionContent>
                <Text>
                  Experience in building and maintaining large web applications including CI/CD pipelines, hosting and integrating with internal and external API's. Optimizing for speed, scale and code readability.
                </Text>
                <Text>
                  Worked with JavaScript and in the React ecosystem since 2014 and have a passion for modularization and readable code.
                </Text>
              </ContentSectionContent>
            </ContentSection>
            <Divider />
            <ContentSection>
              <Title>Contact</Title>
              <ContentSectionContent>
                <Contact>
                  <ContactCards>{email}</ContactCards>
                  <ContactCards href={github}>github profile</ContactCards>
                  <ContactCards href={profileGoogleDocs}>profile</ContactCards>
                </Contact>
              </ContentSectionContent>  
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
