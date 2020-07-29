import React from 'react';
const Search = (props) => {
    return (
        <div>Search</div>
    )
    }
  // 将ui组件包装成容器组件
  export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Search));