import React from 'react';
import styled, {css} from 'styled-components'

import linkedinLight from './linkedinLight.svg';
import linkedinDark from './linkedinDark.svg';

const linkSharedStyles = css`
  box-sizing: border-box;
  padding: 1em;
  background-color: rgba(230, 230, 230, 0.5);
  flex: 1 0 0;
  color: ${props => props.theme.color};
  text-decoration: none;
  white-space: nowrap;

  &:hover {
    color: ${props => props.href ? 'rgba(3,2,20,1)' : 'rgba(3,2,20,0.7)'};
  }
`;

const ContactCard = styled.a`
  ${linkSharedStyles}
`

const ContactCardNoLink = styled.div`
  ${linkSharedStyles}
  cursor: pointer;
`

const ContactStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;

  & > ${ContactCardNoLink},
  & > ${ContactCard} {
    margin: 0.5em 0 0 0;
  }

  @media only screen and (min-width: 768px) {
    flex-direction: row;
  
    & > ${ContactCardNoLink},
    & > ${ContactCard} {
      margin: 0 0.125em 0 0;
    }

    & > ${ContactCardNoLink}:last-child,
    & > ${ContactCard}:last-child {
      margin-right: 0;
    }
  }
`;

const IconImage = styled.img`
  width: 1em;
  height: 1em;
  margin-right: 0.5em;
`

const Icon = styled.i`
  font-style: inherit;
  margin-right: 0.5em;
`

const ContactCardWithIcon = ({ icon, children, ...props }) => {
  if (props.href) {
    return (
      <ContactCard {...props}>
        {children}
      </ContactCard>
    )
  }
  return (
    <ContactCardNoLink {...props}>
      {children}
    </ContactCardNoLink>
  );
}

const Contact = ({ theme }) => {
  const email = 'lovisa.skeppe@gmail.com';
  const github = 'https://github.com/l00pen';
  const profileGoogleDocs = 'https://docs.google.com/document/d/e/2PACX-1vRNRfupR3nSkqAGKG9A2FIqJNZ-OoiRYxEe25NnBhUEfODNbG4dOBJs-XlFGPyuErHST0DkopUos1SK/pub';
  const profileLinkedIn = 'https://www.linkedin.com/in/lovisaskeppe/';
  const linkedInIcon = theme === 'light' ? linkedinLight : linkedinDark;
  return (
    <ContactStyled>
      <ContactCardWithIcon
        onClick={() => {navigator.clipboard.writeText(email)}}
      >
        <Icon>✉︎</Icon>
        {email}
      </ContactCardWithIcon>
      <ContactCard href={github}>github profile</ContactCard>
      <ContactCard href={profileGoogleDocs}>CV</ContactCard>
      <ContactCardWithIcon href={profileLinkedIn}>
        <IconImage src={linkedInIcon} />
        LinkedIn profile
      </ContactCardWithIcon>
    </ContactStyled>
  );
}

export default Contact;
