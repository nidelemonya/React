import React from 'react';
import './ranking.styl';
import LazyLoad, { forceCheck } from 'react-lazyload';
import Scroll from '@/common/scroll/Scroll';
// 组件的复用性
// 排行榜 路由级别页面
// import Loading from '../../common/loading/Loading';
// alias 路径短链接 相对路径 路径的别名 @
import Loading from '@/common/loading/Loading';
import { getRankingList, getRankingInfo } from '@/api/ranking'; // 把请求数据的业务， 分离到api目录下

class Ranking extends React.Component {
    constructor() {
        super()
        this.state = {
            loading: true,
            rankingList: []
        }
    }
    componentDidMount() {
        getRankingList()
            .then((res) => {
                // console.log(res);
                console.log('获取排行榜数据', res.data);
                this.setState({
                    loading: false,
                    rankingList: res.data.topList
                    // state -> new State -> dom 响应式 -> 页面更新
                    // state.rankingList -> dom 挂载到页面上 ->  scroll
                    // refreshScroll: true
                    // setState callback ， 状态更新并已经在界面同步后， 再执行callback
                }, () => {
                    // setState 新的方法 异步
                    this.setState({ // ？ 为什么要放到这里？ 考点
                        refreshScroll: true
                    })
                })
            })
    }
    render() {
        return (
            <div className="music-ranking">
                <Scroll
                    refresh={this.state.refreshScroll}
                    onScroll={(e) => {
                        // console.log(e);
                        forceCheck();
                    }}>
                    <div className="ranking-list">
                        {
                            this.state.rankingList.map(ranking => {
                                return (
                                    <div className="ranking-wrapper" key={ranking.id}>
                                        <div className="left">
                                            <LazyLoad height={100}>
                                                <img src={ranking.picUrl} alt={ranking.title} />
                                            </LazyLoad>
                                        </div>
                                        <div className="right">
                                            <h1 className="ranking-title">
                                                {ranking.title}
                                            </h1>
                                            {
                                                ranking.songList.map((song, index) => {
                                                    return (
                                                        <div className="top-song" key={index}>
                                                            <span className="index">{index + 1}</span>
                                                            <span>{song.songname}</span>
                                                        &nbsp;-&nbsp;
                                                            <span className="song">{song.singername}</span>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </Scroll>
                <Loading show={this.state.loading} title="正在加载排行榜..." />
            </div>
        )
    }
}

export default Ranking;