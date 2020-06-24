import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Tabs, Row, Col, Tag, Spin } from 'antd';
import { Pagination } from 'antd';
import Articleitem from './ArticleItem';

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
        // page 当前页数
        // console.log(page)
        // 1 offset 0
        // 2 offset 1
        // 3 offset 2
        const { activityKey } = this.props.articleStore
        this.props.articleStore.getArticle(`${activityKey}`, page - 1);
        this.props.articleStore.handlePageChange(page);
    }
    render() {
        const { total, LIMIT, articles, handleTabChange, handleAddTab, tags, isLoading, activityKey, pageCurrent } = this.props.articleStore
        return (
            <div>
                <Row>
                    <Col span={19}>
                        <Tabs defaultActiveKey={'all'} onChange={handleTabChange} activeKey={activityKey}>
                            {Object.keys(articles).map((tag, i) => {
                                return (
                                    <TabPane key={tag} tab={tag}>
                                        <Spin tip="正在加载中..." spinning={isLoading}>
                                            {
                                                articles[tag].map((article, i) => {
                                                    return (
                                                        <Articleitem key={i} article={article}></Articleitem>
                                                    )
                                                })
                                            }
                                        </Spin>
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
                            current={pageCurrent}
                        />
                    </Col>
                    <Col span={5}>
                        {tags.map((tag, i) => {
                            // tag 传到 handleAddTab 这个函数
                            return (
                                // <Tag key={i} onClick={handleAddTab.bind(this, tag)}>{tag}</Tag>
                                // or
                                <Tag key={i} onClick={() => { handleAddTab(tag) }}>{tag}</Tag>
                            )
                        })}
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Home;