import styled from 'styled-components';

// styled 样式 结构放在一起 专门解决切页面的问题
// 兼容性强大
// 容器式组件
export const Top = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 5px 10px;
    background: #d44439;
    & > span {
        line-height: 40px;
        color: #f1f1f1;
        font-size: 20px;
    }
    &.iconfont {
        font-size: 25px;
    }
`;

export const Tab = styled.div`
    height:44px;
    display:flex;
    flex-direction:row;
    justify-content:space-around;
    background:#d44439;
    a {
        flex:1%;
        padding:2px 0;
        font-size:14px;
        color:#e4d4d4;
        &.selected {
            span {
                border-bottom: 2px solid #f1f1f1;
                padding: 3px 0;
                font-weight:700;
                color:#f1f1f1;
            }
        }
    }
`;

export const TabItem = styled.div`
    height: 100%;
    display:flex;
    flex-direction: row;
    justify-content:center;
    align-items:center;
`;