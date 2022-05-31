import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Teams from './components/Teams';
import './App.css';
import React from 'react';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='teams' element={<Teams/>} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
