import styled from 'styled-components';

export const AppTitle = styled.h1`
  color: rgba(0, 0, 0, 1);
  font-size: 15vw;
  font-weight: 100;

  @media only screen and (min-width: 768px) {
    font-size: 5vw;
  } 
`;

export const TitleRoot = styled.div`
  position: relative;
  width: fit-content;
  margin: 0 auto 1em;
`;

export const Title = styled.h3`
  font-weight: 100;
  margin-bottom: 0.2em;
`;
