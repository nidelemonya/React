import * as actionTypes from './constants';

const defaultState = {
    category:"",
    alpha:"",
    singerList:[],
    enterLoading:true,
    // 分页功能
    listOffset: 0
}
export default (state = defaultState, action) => {
    switch(action.type) {
        // case actionTypes.:
        //     // 把原有状态展开
        //     return { ...state, banners: action.data}
        // case actionTypes.:
        //     return { ...state, recommendList: action.data}
        // case actionTypes.CHANGE_ENTER_LOADING:
        //     return { ...state, enterLoading: action.data}
        default:
            return state
    }
}