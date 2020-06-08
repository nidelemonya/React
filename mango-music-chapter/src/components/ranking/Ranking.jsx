import React from 'react';
import './ranking.styl';
import LazyLoad from 'react-lazyload'

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
                })
            })
    }
    render() {
        return (
            <div className="music-ranking">
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
                <Loading show={this.state.loading} title="正在加载排行榜..." />
            </div>
        )
    }
}

export default Ranking;