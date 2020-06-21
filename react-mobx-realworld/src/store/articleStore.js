import { observable, action } from 'mobx';
import axios from 'axios';
const LIMIT = 10;
class ArticleStore  {
  // observable state  用 observable 修饰过的变量
  // 只要变量被修改了 页面就会重新渲染
  // es @ 修饰器
  LIMIT = LIMIT;
  @observable articles = {
    all:[],
    cars:[]
  }
  @observable total = 0;
  // 逻辑 尽量写到 store
  @action 
  getArticle(tag, offset = 0){
    axios.get('/articles', {
      params:{
        tag: tag === 'all' ? null : tag,
        offset,
        limit: LIMIT
      }
    })
    .then(res => {
      // 修改 store 在这一步完成
      this.articles[tag] = res.articles
      this.total = res.articlesCount
    })
  }
}

export default new ArticleStore();