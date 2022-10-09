import * as actionTypes from './constants' 
import { Map } from 'immutable'

const defaultState = Map({
    topBanners:[],
    hotRecommend:[]
})

function reducer(state=defaultState,action){
    switch(action.type){
        case actionTypes.CHANGE_TOP_BANNER:
            return state.set('topBanners',action.banners);
        case actionTypes.CHANGE_HOT_RECOMMEND:
            return state.set('hotRecommend',action.hotRecommend);
        default:
            return state;
    }
}

export {
     reducer
}