import * as actionTypes from './constants' 

function reducer(state={
    topBanners:[]
},action){
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