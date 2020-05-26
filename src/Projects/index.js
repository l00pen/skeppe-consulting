import React, { Component } from 'react';
import styled from 'styled-components'

import {
  Title,
  TitleRoot
} from '../Components/Text';

import soundcloud from './soundcloud2.png';
import namely from './namely-logo.png';
import hemnet from './hemnet_logo.svg';
import trustly from './trustly.svg';
import fiftySixK from './56k.png';

const ImgLogo = styled.img`
  height: 25px;
  margin: 0;

  @media only screen and (min-width: 768px) {
    margin: 0 1em;
  } 
`;

const ProjectRoot = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const LogoGroup = styled.div`
  display: flex;
  justify-content: space-between;

  @media only screen and (min-width: 768px) {
    justify-content: center;
  } 
`;

class Projects extends Component {
  render() {
    return (
      <ProjectRoot>
        <TitleRoot>
          <Title>{'Brands I\'ve worked with'}</Title>
        </TitleRoot>
        <LogoGroup>
          <a href="https://www.namely.com" target="_blank" rel="noopener noreferrer">
            <ImgLogo src={namely} />
          </a>
          <a href="https://soundcloud.com" target="_blank" rel="noopener noreferrer">
            <ImgLogo src={soundcloud} />
          </a>
          <a href="https://56kdigital.com" target="_blank" rel="noopener noreferrer">
            <ImgLogo src={fiftySixK} />
          </a>
          <a href="https://hemnet.se" target="_blank" rel="noopener noreferrer">
            <ImgLogo src={hemnet} />
          </a>
          <a href="https://trustly.net" target="_blank" rel="noopener noreferrer">
            <ImgLogo src={trustly} />
          </a>
        </LogoGroup>
      </ProjectRoot>
    );
  }
}

export default Projects;
