// 假数据 先用来测试
import Mock from 'mockjs';


export default Mock.mock('/posts','get',{
    success: true,
    title: '蜀道难',
    content:'噫吁戏危乎高哉',
    'list|5-10':[{
        'name':'@name()',
        'address':'@county(true)',
        'age|1-100': 100,
        'title': '@title()',
        'email':'@email()',
        'id':'@id()',
        'key|+1':1
    }]
})

// 'title': '@title()' 生成随机的标题