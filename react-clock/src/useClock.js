import { useState, useEffect, useMemo } from 'react'
// 自定义 hooks
// 逻辑
let obj = {
    0: '星期日',
    1: '星期一',
    2: '星期二',
    3: '星期三',
    4: '星期四',
    5: '星期五',
    6: '星期六',
}
function useClock() {
    const [date, setDate] = useState(new Date());
    useEffect(() => {
        let timer = setInterval(() => {
            setDate(new Date())
        }, 1000)
        return () => {
            clearInterval(timer)
        }
    }, [])
    let dateStr = useMemo(() => {
        let day = date.getDay()
        return `${obj[day]}${date.toLocaleTimeString()}`
    }, [date])
    return dateStr;
}

// ui
export default useClock;