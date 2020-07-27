import React, { useEffect, useRef, memo } from 'react';
import { connect } from 'react-redux';
import { NavContainer } from './style';
import Horizen from '../../baseUI/horizen-item/index';
import { categoryTypes, alphaTypes } from '../../api/config';

// useRef: 使用 betterScroll 需要 传一个 dom 元素
function Singers (props) {
    const { category, alpha } = props;
    const handleUpdateCategory = () => {

    }
    const handleUpdateAlpha = () => {
        
    }
    return (
        <React.Fragment>
            <NavContainer>
                <Horizen title="分类 (默认热门):" list={categoryTypes} handleClick={(v) => handleUpdateCategory(v)} oldVal={category}/>
                <Horizen title="首字母:" list={alphaTypes} handleClick={(v) => handleUpdateAlpha(v)} oldVal={alpha}/>
            </NavContainer>
        </React.Fragment>
    )
}

const mapStateToProps = (state) => ({
    category: state.singers.category,
    alpha: state.singers.alpha
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