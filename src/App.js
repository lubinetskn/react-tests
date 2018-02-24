import React, { Component } from 'react';
import Ticker from './components/Ticker';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Ticker price={0.75} pair="BTC/USD" />
      </div>
    );
  }
}

export default App;
