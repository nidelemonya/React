## 去哪儿全栈项目
一分为二的思想
城市数据怎么做
- cityData null
    action-type
- action setCityData
- 是否显示 isCitySelectorVisible false
    ACTION_SET_IS_CITY_SELECTOR_VISIBILE
    isLoadingCityData
    ACTION_SET_IS_LOADING_CITY_DATA
- 后端API设计流程
    1. mogodb/mysql 写真后端
        mockerAPI 解决了跨域
    2. 模块化输出api配置
    3. rquire json Mocker.mock random 配置

- api -> action -> reducer -> connect 组件

- 数据请求都放在 actions 中
    异步的actions中, dispatch 多个action