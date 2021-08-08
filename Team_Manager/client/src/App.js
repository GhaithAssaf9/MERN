import React, { useState } from 'react';
import { Router } from '@reach/router';
import './App.css';
import List from './Views/List';
import AddPlayer from './components/AddPlayer';
import Status from './components/Status';
import FinalHead from './Views/FinalHead';

function App() {
  const [player, setPlayer] = useState([]);
  return (
    <div className="App">
      <FinalHead />
      <hr />
      <Router>
        <List path="players/list" player={player} setPlayer={setPlayer} />
        <AddPlayer path="player/addplayer" player={player} setPlayer={setPlayer} />
        <Status path="/status/game/:gameId" player={player} setPlayer={setPlayer} />
      </Router>
    </div>
  );
}

export default App;









