import React from 'react';
import './App.scss';

import Board from './components/Board';
import Nav from './components/Nav';
import Player from './components/Player';

const App = () => {
  return (
    <div className="App">
      <Board />
      <Nav />
      <Player />
    </div>
  );
};

export default App;
