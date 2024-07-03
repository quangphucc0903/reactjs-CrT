import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import RandomGift from './pages/Randomgift';
import BoxCheck from './pages/BoxCheck';
import RadioCheck from './pages/RadioCheck';
import Randomgift from './pages/Randomgift';
import  ToDoList from "./pages/ToDoList";
import  HookEffect from "./pages/HookEffect";

function App() {
  return (
    <>
      <nav>
        <ul>
          <li><Link to="/">RandomGift</Link></li>
          <li><Link to="/RadioCheck">RadioCheck</Link></li>
          <li><Link to="/BoxCheck">BoxCheck</Link></li>
          <li><Link to="/ToDoList">ToDoList</Link></li>
          <li><Link to="/HookEffect">HookEffect</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Randomgift />} />
        <Route path="/RadioCheck" element={<RadioCheck />} />
        <Route path="/BoxCheck" element={<BoxCheck />} />
        <Route path="/ToDoList" element={<ToDoList />} />
        <Route path="/HookEffect" element={<HookEffect />} />
      </Routes>
    </>
  );
}

export default App;
