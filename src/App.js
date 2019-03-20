import React, { Component } from 'react';
import styled from 'styled-components/macro'
import Background from './Background';


class App extends Component {
  render() {
    const email = 'lovisa@skeppeconsulting.com';
    return (
      <div className={'App'}>
        <Background />
        <div className={'App__border'}>
          <h1 className={'App__header'}>SKEPPE CONSULTING</h1>
          <p>
            {email}
          </p>
        </div>
      </div>
    );
  }
}

export default App;
