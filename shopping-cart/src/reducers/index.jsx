// 商品， 购物车商品， 购物车商品
// 调用多个 reducer 合并成一个 combineReducers
import { combineReducers } from "redux";
import cart from './cart'
import products from './products';

export default combineReducers({
    cart,
    products
})