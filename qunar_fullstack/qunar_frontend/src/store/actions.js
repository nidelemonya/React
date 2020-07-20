export const ACTION_SET_IS_CITY_SELECTOR_VISIBILE = 'ACTION_SET_IS_CITY_SELECTOR_VISIBILE';
export const ACTION_SET_CITY_DATA = 'ACTION_SET_CITY_DATA';
export const ACTION_SET_IS_LOADING_CITY_DATA = 'ACTION_SET_IS_LOADING_CITY_DATA';

export function showCitySelector (showSelector) {
    return {
        type: ACTION_SET_IS_CITY_SELECTOR_VISIBILE,
        payload: !showSelector
    }
}

// 对 ACTION_SET_CITY_DATA 设置一个 action
export function fetchCityData() {
    // 涉及到异步操作 返回函数
    return (dispatch, getState) => {
        const {
            showCityData
        } = getState()
        fetch('/res/cities')
        .then(res => res.json())
        .then(cityData => {
            dispatch(setCityData(cityData))
            dispatch(isLoadingCityData(showCityData))
        })
    }
}

export function setCityData(cityData) {
    return {
        type: ACTION_SET_CITY_DATA,
        payload: cityData
    }
}

export function isLoadingCityData(showCityData) {
    return {
        type:ACTION_SET_IS_LOADING_CITY_DATA,
        payload:!showCityData
    }
}