import styled from 'styled-components';

export const AppTitle = styled.h1`
  color: ${({ theme }) => theme.color};
  font-size: 15vw;
  font-weight: 100;
  margin: 0 auto 0.5em;
  @media only screen and (min-width: 768px) {
    font-size: 5vw;
  } 
`;

export const TitleRoot = styled.div`
  color: ${({ theme }) => theme.color};
  position: relative;
  width: fit-content;
  margin: 0 auto 1em;
`;

export const Title = styled.h3`
  color: ${({ theme }) => theme.color};
  font-weight: 100;
  margin-bottom: 0.2em;
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.color};
  font-weight: 100;
  margin: 0.5em 0;
`;
