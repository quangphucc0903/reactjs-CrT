import React from 'react';
import { Routes, Route } from 'react-router-dom';
import 'antd/dist/reset.css';
import './index.css';
import { RandomGift } from './pages/selflearning/RandomGift';
import { BoxCheck } from './pages/selflearning/BoxCheck';
import { RadioCheck } from './pages/selflearning/RadioCheck';
import { ToDoList } from "./pages/selflearning/ToDoList";
import { HookEffect } from "./pages/selflearning/HookEffect";
import { Timeout } from "./pages/selflearning/Timeout";
import { PreviewAvatar } from "./pages/selflearning/PreviewAvatar";
import { DefaultLayout } from "./common/layout/DefaultLayout";
import { HomePages } from "./pages/homepages/HomePages";

function App() {
  return (
    <>
      <Routes>
        <Route element={<DefaultLayout />} >
          <Route path="/" element={<HomePages />} />
          <Route path="*" element={<HomePages />} />
          <Route path="/RandomGift" element={<RandomGift />} />
          <Route path="/RadioCheck" element={<RadioCheck />} />
          <Route path="/BoxCheck" element={<BoxCheck />} />
          <Route path="/ToDoList" element={<ToDoList />} />
          <Route path="/HookEffect" element={<HookEffect />} />
          <Route path="/Timeout" element={<Timeout />} />
          <Route path="/PreviewAvatar" element={<PreviewAvatar />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
