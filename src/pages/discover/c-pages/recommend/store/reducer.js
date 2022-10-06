import * as actionTypes from './constants' 

const defaultState = {
    topBanners:[]
}

function reducer(state=defaultState,action){
    switch(action.type){
        case actionTypes.CHANGE_TOP_BANNER:
            return {...state,topBanners:action.banners}
        default:
            return state;
    }
}

export {
     reducer
}