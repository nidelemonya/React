// memo 笑脸
import React, { memo } from 'react';

const setSatisfactionClass = (level) => {
    if (level < 100) {
        return "very-dissatisfied"
    }
    if (level < 200) {
        return "somewhat-dissatisfied"
    }
    if (level < 300) {
        return "neither"
    }
    if (level < 400) {
        return "somewhat-satisfied"
    }
    return "very-satisfied"
}

// 是一个函数 如果两个值不相同 则更改 相同则不改
const isSameRange = (prevValue, nextValue) => {
    // console.log(prevValue, nextValue);
    const prevValueClass = setSatisfactionClass(
        prevValue.level
    )
    const nextValueClass = setSatisfactionClass(
        nextValue.level
    )
    return prevValueClass === nextValueClass
}

export const FaceComponent = memo((props) => {
    const { level } = props
    return (
        <div className={setSatisfactionClass(level)}></div>
    )
}, isSameRange)