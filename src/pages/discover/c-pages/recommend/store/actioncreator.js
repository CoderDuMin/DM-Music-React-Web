import * as actionType from './constants'
import { getTopBanners,
         getHotRecommend,
         getNewAlbum 
        } from '@/service/recommend'

export const changeTopBannersAction = (res) => ({
    type: actionType.CHANGE_TOP_BANNER,
    banners:res.banners
})
export const changeHotRecommendAction = (res) => ({
    type: actionType.CHANGE_HOT_RECOMMEND,
    hotRecommend:res.result
})
export const changeNewAlbumsAction = (res) => ({
    type:actionType.CHANGE_NEW_ALBUM,
    newAlbums:res.weekData.slice(0,15)
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

export const getNewAlbumsAction = (limit) => {
    return dispatch => {
        getNewAlbum(limit).then(res=>{
            console.log(res)
            dispatch(changeNewAlbumsAction(res))
        })
    }
}