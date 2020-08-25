import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import slipgatan from './slipgatan2.m4v';
import slipgatanPictureLow from './slipgatanLow.png';
import slipgatanPicture from './slipgatan.png';

const BackgroundImage = styled.img`
  position: fixed;
  z-index: -100;
  clip-path: polygon(34% 100%, 19% 100%, 0px 0px);
  -webkit-clip-path: polygon(34% 100%, 19% 100%, 0px 0px);
`;

const BackgroundStyled = styled.video`
  position: fixed;
  right: 0;
  top: 0;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: -100;
  clip-path: polygon(100% 0, 0 100%, 0 0);
  -webkit-clip-path: polygon(100% 0, 0 100%, 0 0);
`;

const Background = () => {
  const [isMobileDevice, setIsMobileDevice] = useState(undefined);

  useEffect(() => {
    const checkForIsMobileDevice = () => {
      return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
    };

    setIsMobileDevice(checkForIsMobileDevice())
  }, []);

  if (isMobileDevice === undefined) {
    return null
  }

  if (isMobileDevice) {
    // return <BackgroundImage src={slipgatanPicture} alt='view over sky and houses' />
    return null;
  }

  return (
    <BackgroundStyled
      autoPlay
      loop
      id="video-background"
      muted
      plays-inline={"true"}
      poster={slipgatanPictureLow}
    >
      <source src={slipgatan} type="video/mp4" />
    </BackgroundStyled>
  );
}

export default Background;
