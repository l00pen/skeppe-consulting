import React, { useState, useEffect } from 'react';
import slipgatan from './slipgatan2.m4v';
import slipgatanPictureLow from './slipgatanLow.png';
import slipgatanPicture from './slipgatan.png';

import './styles.css';

const Background = () => {
  const [isMobileDevice, setIsMobileDevice] = useState(undefined);

  useEffect(() => {
    const checkForIsMobileDevice = () => {
      return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
    };

    setIsMobileDevice(checkForIsMobileDevice())
  });

  if (isMobileDevice === undefined) {
    return null
  }

  if (isMobileDevice) {
    return <img className="BackgroundImage" src={slipgatanPicture} alt='view over sky and houses'/>
  }

  return (
    <video
      className="Background"
      autoPlay
      loop
      id="video-background"
      muted
      plays-inline={"true"}
      poster={slipgatanPictureLow}
    >
      <source src={slipgatan} type="video/mp4" />
    </video>
  );
}

export default Background;
