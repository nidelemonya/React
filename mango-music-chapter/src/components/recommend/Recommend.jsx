import React from 'react';
import './recommend.styl'; 
import Swiper from 'swiper';
import "swiper/css/swiper.css";
// 1. 幻灯片， Swiper
// 数据 { src, ilink }
class Recommend extends React.Component {
    constructor() {
        super()
        // 这个组件的 state， 属于这个组件， 不属于其他组件， 可以不用redux
        this.state = {
            // 1. 先用假数据 把页面做出来
            // 2. 未来再改成接口
            sliderList: [{
                id: 1,
                picUrl: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=4012436013,1663736653&fm=26&gp=0.jpg',
                linkUrl: 'https://image.baidu.com/search/index?tn=baiduimage&ct=201326592&lm=-1&cl=2&ie=gb18030&word=%B1%ED%C7%E9%B0%FC&fr=ala&ala=1&alatpl=adress&pos=0&hs=2&xthttps=111111'
            },
            {
                id: 2,
                picUrl: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3631898751,3282516408&fm=26&gp=0.jpg',
                linkUrl: 'https://image.baidu.com/search/index?tn=baiduimage&ct=201326592&lm=-1&cl=2&ie=gb18030&word=%B1%ED%C7%E9%B0%FC&fr=ala&ala=1&alatpl=adress&pos=0&hs=2&xthttps=111111'
            },
            {
                id: 3,
                picUrl: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2349951685,2269846305&fm=26&gp=0.jpg',
                linkUrl: 'https://image.baidu.com/search/index?tn=baiduimage&ct=201326592&lm=-1&cl=2&ie=gb18030&word=%B1%ED%C7%E9%B0%FC&fr=ala&ala=1&alatpl=adress&pos=0&hs=2&xthttps=111111'
            }]  // 幻灯片 没有必要去 redux
        }
    }
    componentDidMount() {
        new Swiper(".slider-container", {
            loop: true,
            autoplay: {
              delay: 1000,
            },
            pagination: {
              el: '.swiper-pagination',
              type: 'bullets',
            }
          })
    }
    render(){
        return (
            <div className="music-recommend">
              <div className="slider-container">
                <div className="swiper-wrapper">
                  {
                    this.state.sliderList.map(slider => {
                      return (
                        <div className="swiper-slide" key={slider.id}>
                          <a href={slider.linkUrl} className="slider-nav">
                            <img src={slider.picUrl} alt="" width="100%" height="100%"/>
                          </a>
                        </div>
                      );
                    })
                  }
                </div>
                <div className="swiper-pagination"></div>
              </div>
            </div>
        )
    }
}

export default Recommend;