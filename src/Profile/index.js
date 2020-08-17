import React, { Component, useState, useEffect } from 'react';
import styled from 'styled-components'

import {
  Title,
  TitleRoot
} from '../Components/Text';

const ProfileRoot = styled.div`
  text-align: left;
`;

function groupSiblingsByTitleTag(titleTag, nodeList) {
  return nodeList.reduce((acc, node) => {
    if (node.tagName.includes(titleTag)) {
      acc.push({
        tagName: node.tagName,
        innerText: node.innerText,
        children: [],
      })

      return acc;
    }

    if (acc.length) {
      acc[acc.length - 1].children.push({
        tagName: node.tagName,
        innerText: node.innerText,
        children: node.children,
      });
    }

    return acc;
  }, []);
}

function nodeToReact(node) {
  switch(node.tagName){
    case 'P':
      return <p>{node.innerText}</p>;
    case 'UL':
    console.log(node)
      return [...node.children].map(nodeToReact);
    case 'LI':
      return <li>{node.innerText}</li>;
    default:
      return null;
  }
}

const Profile = () => {
  const [aboutMe, setAboutMe] = useState({ innerText: '', tagName: '', children: []});
  useEffect(() => {
    if (aboutMe.children.length === 0) {
      fetch('https://docs.google.com/document/d/e/2PACX-1vRNRfupR3nSkqAGKG9A2FIqJNZ-OoiRYxEe25NnBhUEfODNbG4dOBJs-XlFGPyuErHST0DkopUos1SK/pub')
        .then((consultantProfile) => {
          return consultantProfile.text();
        })
        .then((data) => {
          let parser = new DOMParser()
          const tmp = parser.parseFromString(data, 'text/html')
          const contents = tmp.getElementById('contents')
          const contentArray = [...contents.children]
          const content = groupSiblingsByTitleTag('H3', contentArray)
          const aboutMeNode = content.find(({ innerText }) => innerText.toLowerCase().includes('about'))
          setAboutMe(aboutMeNode)
        });
    }
  }, [aboutMe.children])

  return (
    <ProfileRoot>
      <TitleRoot>
        <Title>{'Profile'}</Title>
      </TitleRoot>
      { !!aboutMe.children.length && 
        aboutMe.children.map((p) => nodeToReact(p))
      }
    </ProfileRoot>
  );
}

export default Profile;
