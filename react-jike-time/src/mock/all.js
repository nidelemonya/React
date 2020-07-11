import Mock from 'mockjs';

export default Mock.mock('/all','get',{
    success: true,
    title: '我的课程',
    'list|8-12':[{
        'title|1': '@ctitle()',
        "image": "@image('75x75','#4A7BF7','Hello')",
        'key|+1':1,
        'total|40-60':1,
        'already|0-40':1,
        'state|1':['未学完','已学完'],
        'tag|1':[
            '专栏',
            '视频课',
            '微课',
            '每日一课',
            '其他'
        ]
    }]
})