import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Tabs, Row, Col, Tag } from 'antd';
import { Pagination } from 'antd';

const { TabPane } = Tabs;
// indect 注入
// 想要哪个页面的数据就注入谁
@inject('articleStore') // 不需要写 connect mapStatetoProps mapDispatch
@observer
class Home extends Component {
    componentDidMount() {
        this.props.articleStore.getArticle('all');
        this.props.articleStore.getTags();
    }
    handlePaginationChange = (page) => {
        const { articles } = this.props.articleStore;
        Object.keys(articles).map((tag) => { this.props.articleStore.getArticle(`${tag}`, page - 1); return 0; })
        // console.log(page)
        // 1 offset 0
        // 2 offset 1
        // 3 offset 2
        // this.props.articleStore.getArticle(`all`, page - 1);
    }
    render() {
        const { total, LIMIT, articles, handleTabChange, tags } = this.props.articleStore
        return (
            <div>
                <Row>
                    <Col span={19}>
                        <Tabs defaultActiveKey={'all'} onChange={handleTabChange}>
                            {Object.keys(articles).map((tag, i) => {
                                return (
                                    <TabPane key={tag} tab={tag}>
                                        {
                                            articles[tag].map((article, i) => {
                                                return (
                                                    <div key={i}>
                                                        <h3>
                                                            {article.title}
                                                        </h3>
                                                        <p>
                                                            {article.body}
                                                        </p>
                                                    </div>
                                                )
                                            })
                                        }
                                    </TabPane>
                                )
                            })}
                        </Tabs>
                        {/* {this.props.articleStore.articles.all.length} */}
                        <Pagination
                            onChange={this.handlePaginationChange}
                            total={total}
                            pageSize={LIMIT}
                            defaultCurrent={1}
                            // current={1}
                        />
                    </Col>
                    <Col span={5}>
                        {tags.map((tag, i) => {
                            return (
                                <Tag color="lime" key={i}>{tag}</Tag>
                            )
                        })}
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Home;