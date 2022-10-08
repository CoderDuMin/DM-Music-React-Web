import * as actionTypes from './constants' 
import { Map } from 'immutable'

const defaultState = Map({
    topBanners:[]
})

function reducer(state=defaultState,action){
    switch(action.type){
        case actionTypes.CHANGE_TOP_BANNER:
            return state.set('topBanners',action.banners)
        default:
            return state;
    }
}

export {
     reducer
}