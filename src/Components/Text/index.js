import styled from 'styled-components';

export const AppTitle = styled.h1`
  color: ${({ theme }) => theme.color};
  font-size: 15vw;
  font-weight: 200;
  margin: 0 auto 0.5em;
  @media only screen and (min-width: 768px) {
    font-size: 5vw;
  } 
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.color};
  font-size: 8vw;
  font-weight: 200;
  margin: 0 auto 0.5em;
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.color};
  font-weight: 200;
  margin: 0.5em 0;
`;
