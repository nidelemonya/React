import { observable, action } from 'mobx';
import axios from 'axios';
const LIMIT = 10;
class ArticleStore  {
  // observable state  用 observable 修饰过的变量
  // 只要变量被修改了 页面就会重新渲染
  // es @ 修饰器
  @observable articles = {
    all:[],
    cars:[]
  }

  @action 
  getArticle(tag, offset = 0){
    axios.get('/articles', {
      params:{
        tag,
        offset,
        limit: LIMIT
      }
    })
    .then(res => {
      // 修改 store
      this.articles[tag] = res.articles
    })
  }
}

export default new ArticleStore();