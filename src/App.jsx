import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import RandomGift from './pages/Randomgift';
import BoxCheck from './pages/BoxCheck';
import RadioCheck from './pages/RadioCheck';
import Randomgift from './pages/Randomgift';
import ToDoList from "./pages/ToDoList";
import HookEffect from "./pages/HookEffect";
import Timeout from "./pages/Timeout";
import PreviewAvatar from "./pages/PreviewAvatar";
import 'antd/dist/reset.css';
import './index.css';

const { Header, Content } = Layout;

function App() {
  return (
    <Layout>
      <Header>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1"><Link to="/">RandomGift</Link></Menu.Item>
          <Menu.Item key="2"><Link to="/RadioCheck">RadioCheck</Link></Menu.Item>
          <Menu.Item key="3"><Link to="/BoxCheck">BoxCheck</Link></Menu.Item>
          <Menu.Item key="4"><Link to="/ToDoList">ToDoList</Link></Menu.Item>
          <Menu.Item key="5"><Link to="/HookEffect">HookEffect</Link></Menu.Item>
          <Menu.Item key="6"><Link to="/Timeout">Timeout</Link></Menu.Item>
          <Menu.Item key="7"><Link to="/PreviewAvatar">PreviewAvatar</Link></Menu.Item>
        </Menu>
      </Header>
      
      <Content style={{ padding: '50px'}}>
        <Routes>
          <Route path="/" element={<Randomgift />} />
          <Route path="/RadioCheck" element={<RadioCheck />} />
          <Route path="/BoxCheck" element={<BoxCheck />} />
          <Route path="/ToDoList" element={<ToDoList />} />
          <Route path="/HookEffect" element={<HookEffect />} />
          <Route path="/Timeout" element={<Timeout />} />
          <Route path="/PreviewAvatar" element={<PreviewAvatar />} />
        </Routes>
      </Content>
    </Layout>
  );
}

export default App;
