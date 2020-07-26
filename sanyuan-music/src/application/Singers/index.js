import React, { useEffect, useRef, memo } from 'react';
import { connect } from 'react-redux';
import { NavContainer, Horizen } from './style';
import { categoryTypes, alphaTypes } from '../../api/config';

// useRef: 使用 betterScroll 需要 传一个 dom 元素
function Singers (props) {
    const handleUpdateCategory = () => {

    }
    const handleUpdateAlpha = () => {
        
    }
    return (
        <React.Fragment>
            <NavContainer>
                <Horizen title="分类 (默认热门):" list={categoryTypes} handleClick={(v) => handleUpdateCategory(v)}/>
                <Horizen title="首字母:" list={alphaTypes} handleClick={(v) => handleUpdateAlpha(v)}/>
            </NavContainer>
        </React.Fragment>
    )
}

const mapStateToProps = (state) => ({

})
const mapDisPatchToProps = (dispatch) => {
    return {

    }
}
export default connect(mapStateToProps,mapDisPatchToProps)(memo(Singers));


// 快捷方式 rfcredux 


// import React, { Component } from 'react'
// import { connect } from 'react-redux'
// export const index = () => {
//     return (
//         <div>
            
//         </div>
//     )
// }

// const mapStateToProps = (state) => ({
    
// })

// const mapDispatchToProps = {
    
// }

// export default connect(mapStateToProps, mapDispatchToProps)(index)