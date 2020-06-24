import React from 'react';
import { Provider } from 'mobx-react';
import { Layout } from 'antd';
import { Row, Col } from 'antd';
import articleStore from './store/articleStore';
import Home from './pages/home';
import './util/request.js'
import './App.css';
import './index.css';

const { Header, Content, Footer } = Layout;
// 自己合并成一个对象
// 每一个模块 对应一个 store
const store = {
  articleStore
}
function App() {
  return (
    // 解构 store
    <Provider {...store}>
      <Layout>
        <Header></Header>
        <Content className="site-layout">
          <Row>
            {/* 总共24份 自身占16份 向右偏移4份 */}
            <Col offset={3} span={18}>
              <Home />
            </Col>
          </Row>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Hello world</Footer>
      </Layout>
    </Provider>
  );
}

export default App;
