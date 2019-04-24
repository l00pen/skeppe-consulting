import React, { Component } from 'react';
import styled from 'styled-components/macro'
import soundcloud from './soundcloud2.png';
import namely from './namely-logo.png';
import hemnet from './hemnet_logo.svg';
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

const TitleRoot = styled.div`
  position: relative;
  width: fit-content;
  margin: 0 auto 1em;
`

const Divider = styled.hr`
  width: 100%;
  border: 0;
  height: 1px;
  background-color: rgba(0, 0, 0, 0.4);
`;

const Title = styled.h3`
  font-weight: 100;
  margin-bottom: 0.2em;
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
          <ImgLogo src={namely} />
          <ImgLogo src={soundcloud} />
          <ImgLogo src={fiftySixK} />
          <ImgLogo src={hemnet} />
        </LogoGroup>
      </ProjectRoot>
    );
  }
}

export default Projects;
