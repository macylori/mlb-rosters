import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Teams from './components/Teams'
import './App.css';
import React from "react";

function App() {
  return (
    <React.Fragment>
      <div className="App">
        <Router>
          <Routes>
            <Route path='/teams' element={<Teams/>} />
          </Routes>
        </Router>
      </div>
    </React.Fragment>
  );
}

export default App;
