export function getNewAlbum() { // 模块化到 api 目录
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve([{
                id:1,
                img: 'http://p1.music.126.net/_PsKVKgTAhOvXJmL-r9KlQ==/109951165041015191.jpg?imageView=1&type=webp&thumbnail=370x0',
                name: '断桥',
                singer: '程小溪',
                publicTime: '2018-01-28'
              },
              {
                id:2,
                img: 'http://p1.music.126.net/_PsKVKgTAhOvXJmL-r9KlQ==/109951165041015191.jpg?imageView=1&type=webp&thumbnail=370x0',
                name: '断桥',
                singer: '程小溪',
                publicTime: '2018-01-28'
              },
              {
                id:3,
                img: 'http://p1.music.126.net/_PsKVKgTAhOvXJmL-r9KlQ==/109951165041015191.jpg?imageView=1&type=webp&thumbnail=370x0',
                name: '断桥',
                singer: '程小溪',
                publicTime: '2018-01-28'
              },
              {
                id:4,
                img: 'http://p1.music.126.net/_PsKVKgTAhOvXJmL-r9KlQ==/109951165041015191.jpg?imageView=1&type=webp&thumbnail=370x0',
                name: '断桥',
                singer: '程小溪',
                publicTime: '2018-01-28'
              },
              {
                id:5,
                img: 'http://p1.music.126.net/_PsKVKgTAhOvXJmL-r9KlQ==/109951165041015191.jpg?imageView=1&type=webp&thumbnail=370x0',
                name: '断桥',
                singer: '程小溪',
                publicTime: '2018-01-28'
              },
              {
                id:6,
                img: 'http://p1.music.126.net/_PsKVKgTAhOvXJmL-r9KlQ==/109951165041015191.jpg?imageView=1&type=webp&thumbnail=370x0',
                name: '断桥',
                singer: '程小溪',
                publicTime: '2018-01-28'
              },
              {
                id:7,
                img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3272833289,3342113989&fm=26&gp=0.jpg',
                name: '断桥',
                singer: '程小溪',
                publicTime: '2018-01-28'
              },
              {
                id:8,
                img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1686769048,4104828146&fm=26&gp=0.jpg',
                name: '断桥',
                singer: '程小溪',
                publicTime: '2018-01-28'
              },
              {
                id:9,
                img: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2073089996,1051470887&fm=15&gp=0.jpg',
                name: '断桥',
                singer: '程小溪',
                publicTime: '2018-01-28'
              }])
        },3000)
    })
}