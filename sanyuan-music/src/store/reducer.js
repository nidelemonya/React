import { combineReducers } from 'redux';
// redux 模块化
import { reducer as recommendReducer } from '../application/Recommend/store/index';
import { reducer as singersReducer } from "../application/Singers/store/index";
export default combineReducers({
    recommend:recommendReducer,
    singers: singersReducer,
})