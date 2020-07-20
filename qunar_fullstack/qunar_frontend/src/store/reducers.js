import {
    ACTION_SET_IS_CITY_SELECTOR_VISIBILE,
    ACTION_SET_CITY_DATA,
    ACTION_SET_IS_LOADING_CITY_DATA
} from './actions';

export default {
    // 页面状态 改变对应数据的改变
    isCitySelectorVisible(state = false, action) {
        const { type, payload } = action;
        switch(type){
            case ACTION_SET_IS_CITY_SELECTOR_VISIBILE:
                return payload
            default:
        }
        return state
    },
    cityData(state=null,action) {
        const { type, payload } = action;
        switch(type){
            case ACTION_SET_CITY_DATA:
                return payload
            default:
        }
        return state
    },
    isLoadingCityData(state = true,action) {
        const { type, payload } = action;
        switch(type){
            case ACTION_SET_IS_LOADING_CITY_DATA:
                return payload
            default:
        }
        return state
    }
}