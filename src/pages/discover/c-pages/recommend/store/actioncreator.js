import { getTopBanners,getHotRecommend } from '@/service/recommend'
import * as actionType from './constants'

export const changeTopBannersAction = (res) => ({
    type: actionType.CHANGE_TOP_BANNER,
    banners:res.banners
})
export const changeHotRecommendAction = (res) => ({
    type: actionType.CHANGE_HOT_RECOMMEND,
    hotRecommend:res.result
})

export const getTopBannersAction = () => {
    return dispatch => {
        getTopBanners().then(res=>{
            console.log(res)
            dispatch(changeTopBannersAction(res))
        })
    }
}


export const getHotRecommendAction = (limit) => {
    return dispatch => {
        getHotRecommend(limit).then(res=>{
            console.log(res)
            dispatch(changeHotRecommendAction(res))
        })
    }
}