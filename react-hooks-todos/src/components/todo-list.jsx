import React, { useState } from 'react';
import { List, Icon } from 'antd';
import classNames from 'classnames';
const { Item } = List;

const TodoList = ( todos, onToggleFinished) => {
    // 删除
    const onDelete = e =>{

    }
    return (
        <div className="list-wrap">
            { todos.length === 0 ? (
                <p>暂无待办事项</p>
                ):(
                    // 竖直样式显示
                    <List 
                        itemLayout="horizontal"
                        dataSource={todos}
                        renderItem={({ id, text, finished }, idx)=>{
                            const itemClasses = classNames({
                                "list-item":true,
                                // -- 
                                // __ 表示状态
                                "list-item__finished":finished
                            })
                            return(
                                // BEM CSS 命名
                                // Block
                                // Element
                                // Modifier
                                <Item className="list-item list-item__finished">
                                    {/* img.list-item--avatar */}
                                </Item>
                            )
                        }}                
                    ></List>
                )
            }
        </div>
    )

}