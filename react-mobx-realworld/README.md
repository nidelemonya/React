## 注意
- 不应该直接修改状态
## 如何使用mobx创建商店(store)
1. 创建全局Provider
2. 组合 store
    const store = {
        articleStore
    }
3. 取出 store @inject('articleStore) @observer
4. 怎么取：通过 props 取出来 (组件的状态 action)
5. store 怎么写？
    @observable 修饰 state