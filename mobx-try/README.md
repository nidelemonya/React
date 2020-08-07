    宣州谢朓楼饯别校书叔云

        作者：李白

    弃我去者，昨日之日不可留；
    乱我心者，今日之日多烦忧。
    长风万里送秋雁，对此可以酣高楼。
    蓬莱文章建安骨，中间小谢又清发。
    俱怀逸兴壮思飞，欲上青天览明月。
    抽刀断水水更流，举杯消愁愁更愁。


class setState -> 父子组件 props + props 调用 -> Context
-> redux useReducer -> mobx 从connect 得到灵感 装饰器模式

1. 当数据流动层次超过两层， 简单的 useState 传起来太麻烦了 而redux useReducer 太重， 如果 action 可以忽略 可以使用useContext
useState React.createContext结合 数据模板+实际操作
useContext 
2. reducer 函数是灵魂
    redux 企业级的数据状态安全流程及架构
    - state 读可以， 但不能写
    - state 写操作 dispatch action + reducer -> 旧新状态的切换
    - reducer 一个旧状态通过同样的方法 同样的type， 和payload 新状态 一定是一样的。