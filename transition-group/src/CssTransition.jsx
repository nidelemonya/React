import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

export default function Demo() {
    const [isIn, setisIn] = useState(true);
    // 移走     :*-exit 间隔几毫秒 *-exit-active *-exit-done
    // 移进来   :*-enter 间隔几毫秒 *-enter-active *-enter-done
    return (
        <>
            {/* 类名为  classNames */}
            <CSSTransition timeout={2000} classNames="msg" in={isIn}>
                <div className="box"></div>
            </CSSTransition>
            <button onClick={() => setisIn(!isIn)}>toggle</button>
        </>
    )
}