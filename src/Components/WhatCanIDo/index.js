import React from 'react';
import styled from 'styled-components';

import {
  Title,
  TitleRoot,
  Text
} from '../Text';
import {
  ImgLogo,
} from '../Images';

import webDevelopment from './webDevelopment.svg';
import vision from './vision.svg';
import analyse from './analyse.svg';
import jogging from './jogging.svg';
import plan from './plan.svg';

const Wrapper = styled.div`
  display: flex;
`;

const Container = styled.div`
  border: 1px solid white;
  padding: 1em;
  flex: 1 0 0;
`;

export default () => {
  return (
    <Wrapper>
      <Container>
        <img src={webDevelopment} />
        <Title>Modernize your architecture</Title>
        <Text>
          Lorem ipsum
        </Text>
      </Container>
      <Container>
        <img src={vision} />
        <Title>Need a proof of Concept?</Title>
        <Text>
          Lorem ipsum
        </Text>
      </Container>
      <Container>
        <img src={analyse} />
        <Title>Optimize</Title>
        <Text>
          Lorem ipsum
        </Text>
      </Container>
      <Container>
        <img src={jogging} />
        <Title>Ship faster</Title>
        <Text>
          Lorem ipsum
        </Text>
      </Container>
      <Container>
        <img src={plan} />
        <Title>Plan</Title>
        <Text>
          Lorem ipsum
        </Text>
      </Container>
    </Wrapper>
  )
}