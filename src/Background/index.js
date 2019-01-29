import React, { Component } from 'react';
import slipgatan from './slipgatan2.m4v';

import './styles.css';

class Background extends Component {
  render() {
    return (
      <video className="Background" autoPlay loop id="video-background" muted plays-inline={"true"}>
        <source src={slipgatan} type="video/mp4" />
      </video>
    );
  }
}

export default Background;
