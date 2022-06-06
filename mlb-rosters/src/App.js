import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Teams from './components/Teams';
import Player from './components/Player';
import './App.css';
import React from 'react';
import Roster from './components/Roster';

class App extends React.Component {
  render () {
    return (
      <div>
        <Routes>
          <Route path='/teams' element={<Teams/>} />
          <Route path='/teams/:id/players' element={<Roster/>} />
          <Route path='/player/:id' element={<Player/>} />
        </Routes>
      </div>
    );
  }
}

export default App;
