import React, { Component } from 'react';

import Background from './Background';

import './App.css';

class App extends Component {
  render() {
    const email = 'lovisa@skeppeconsulting.com';
    return (
      <div className={'App'}>
        <Background />
        <div className={'App__border'}>
          <h1 className={'App__header'}>SKEPPE CONSULTING</h1>
          <p>
            {`contact: ${email}`}
          </p>
        </div>
      </div>
    );
  }
}

export default App;
