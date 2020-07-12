import Mock from 'mockjs'

const lesson = Mock.mock('/allLessons/',
    'get', {
        // 属性 list 的值是一个数组，其中含有 5 到 10 个元素
        'list|3-5': [{
            'key|+1': 1,
            'avatar': "@image('75x75','#4A7BF7','Hello')",  // 会随机生成一个图片
            'title': '@ctitle()',
            'over|1-2': 1,
            'tab|1-5': 1
        }],
        'tab1': [{
            'name': '全部',
            'value': 0
        },
        {
            'name': '未学完',
            'value': 1
        },{
            'name': '已学完',
            'value': 2
        }],
        'tab2': [{
            'name': '所有形式',
            'value': 0
        },{
            'name': '专栏',
            'value': 1
        },{
            'name': '视频课',
            'value': 2
        },{
            'name': '微课',
            'value': 3
        },{
            'name': '每日一课',
            'value': 4
        },{
            'name': '其它',
            'value': 5
        }]
    })

export default lesson;
