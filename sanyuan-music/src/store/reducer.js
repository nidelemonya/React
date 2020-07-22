import { combineReducers } from 'redux';
// redux 模块化
import { reducer as recommendReducer } from '../application/Recommend/store/index';

export default combineReducers({
    recommend:recommendReducer
})