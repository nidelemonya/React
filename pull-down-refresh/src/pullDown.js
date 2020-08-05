import hammer from 'hammerjs'

export default function WebPullToRefresh() {
    var defaults = {
        bodyEl: document.body, // 最外层的盒子
        contentEl: null,    // 内容区域
        ptrEl: null,         // loading 区域
        distance: 40,        // 滑动距离 超过40 才认为是有效的
        loadingFunction: () => {},   // 返回 Promise
        resistance:2.5      // 阻尼     100px / 2.5
    }
    function init(options) {
        options = {
            ...defaults,
            ...options
        }
        const h = new hammer(options.contentEl)
        // 指定 pan 系列事件, 方向
        h.get('pan').set({ direction: hammer.DIRECTION_VERTICAL})
        h.on('panstart', _panStart)
        h.on('pandown', _panDown)
        h.on('panup', _panUp)
        h.on('panend', _panEnd)

        const ptrClass = options.ptrEl.classList
        // 当前移动过的距离
        let pan = {}
        function _panStart() {
            // console.log('pan start')
            ptrClass.add('ptr-start')
        }
        function _panDown(e) {
            // console.log('pan down')
            // 实际距离除以阻尼 -> 算出真实距离
            pan.distance = e.distance / options.resistance
            // 页面滑动
            _setContentPan()
        }
        function _panUp(e) {
            // console.log('pan up')
            pan.distance = e.distance / options.resistance
            _setContentPan()
        }
        function _panEnd() {
            // console.log('pan end')
            if (ptrClass.contains('ptr-refresh')) {
                _loading()
            }
            else {
                _reset()
            }
        }
        function _loading () {
            options.contentEl.style.transform = `translate3d(0,40px,0)`;
            options.ptrEl.style.transform = `translate3d(0,40px,0)`;
            options.loadingFunction().then(() => {
                // 
                _reset();
            })
        }
        function _reset () {
            options.contentEl.style.transform = `translate3d(0,0,0)`;
            options.ptrEl.style.transform = `translate3d(0,0,0)`;
        }
        function _setContentPan() {
            options.contentEl.style.transform = `translate3d(0,${pan.distance}px,0)`
            options.ptrEl.style.transform = `translate3d(0,${pan.distance}px,0)`
            if (pan.distance > options.distance) {
                ptrClass.add('ptr-refresh')
            }
            else {
                ptrClass.remove('ptr-refresh')
            }
        }
    }
    return {
        init
    }
}