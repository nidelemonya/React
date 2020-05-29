import * as React from 'react';

// : React.StatelessComponent<{}> 声明无状态组件
export const Header: React.StatelessComponent<{}> = () => {
    return (
        <div className="row">
            <h2>Header</h2>
        </div>
    );
}