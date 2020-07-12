import React from 'react';
import './App.css';
import TabPan from './Component/TabPan'
import './mock/all.js';
import { Layout, Menu } from 'antd';

const { Header, Content, Footer } = Layout;
function App() {
  return (
    <Layout className="layout">
    <Header>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
      </Menu>
    </Header>
    <Content style={{ padding: '0 50px' }}>
      <h2>我的课程</h2>
      <TabPan/>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Ant Design ©2020 Created by Ant UED</Footer>
  </Layout>
  );
}

export default App;
