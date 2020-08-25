import React, { useState, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Background from '../Background';
import Projects from '../Projects';
import Contact from '../Contact';
import { lightTheme, darkTheme } from "../Themes"
import Header from '../Header';
import Footer from '../Footer';
import {
  Title,
  Text,
} from '../Text';

import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => props.theme.bodyBackground};
    margin: 0;
    padding: 0;
    font-family: "Helvetica Neue", Helvetica, "Hiragino Sans GB", Arial, sans-serif;
    font-size: 16px;
  }
`

const AppRoot = styled.div`
  text-align: center;
  font-weight: 200;
  display: flex;
  justify-content: center;
  height: 100vh;
  flex-direction: column;
  z-index: 0;
  overflow: hidden;
`;

const AppContent = styled.main`
  overflow: auto;
  flex: 1;
  padding: 5vh 5vw;
  display: flex;
  justify-content: center;
  opacity: ${(props) => { return props.isNavOpen ? 0 : 1}};
  transition: opacity 0.3s ease-in;
`;

const ContentSection = styled.section`
  background-color: ${({ theme }) => theme.background};
  flex: 1 0 0;
  padding: 0.5em;
  min-height: 20em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  transition: all 0.50s linear;
`;

const ContentSectionContent = styled.div`
  box-sizing: border-box;
  width: 100%;

  @media only screen and (min-width: 768px) {
    width: 60%;
  }
`;

const App = () => {
  const [theme, setTheme] = useState('light');
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleIsNavOpen = () => {
    setIsNavOpen(!isNavOpen)
  }

  useEffect(() => {
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
    const themeMatcher = () => {
      setTheme(prefersDarkScheme.matches ? 'dark' : 'light')
    }

    themeMatcher();
    prefersDarkScheme.addListener(themeMatcher);

    return () => {
      prefersDarkScheme.removeListener(themeMatcher)
    }
  }, []);

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <Router>
        <GlobalStyle />
        <AppRoot>
          <Background />
          <Header isNavOpen={isNavOpen} toggleIsNavOpen={toggleIsNavOpen} />
          <AppContent isNavOpen={isNavOpen}>
            <Switch>
              <Route path="/contact">
                <ContentSection>
                  <Title>Contact</Title>
                  <ContentSectionContent>
                    <Contact theme={theme} />
                  </ContentSectionContent>
                </ContentSection>                
              </Route>
              <Route path="/work">
                <ContentSection>
                  <Projects />
                </ContentSection>
              </Route>
              <Route path="/">
                <ContentSection>
                  <Title>SKEPPE CONSULTING</Title>
                  <ContentSectionContent>
                    <Text>
                      Experience in building and maintaining large web applications including CI/CD pipelines, hosting and integrating with internal and external API's. Optimizing for speed, scale and code readability.
                    </Text>
                    <Text>
                      Worked with JavaScript and in the React ecosystem since 2014 and have a passion for modularization and readable code.
                    </Text>
                  </ContentSectionContent>
                </ContentSection>
              </Route>
            </Switch>
          </AppContent>
          <Footer />
        </AppRoot>
      </Router>
    </ThemeProvider>
  );
}

export default App;
