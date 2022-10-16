import * as actionType from './constants'
import { getTopBanners,
         getHotRecommend,
         getNewAlbum,
         getArtistByCat 
        } from '@/service/recommend'
import { getTopRanking } from '../../../../../service/recommend'

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
    newAlbums:res.weekData ? res.monthData.slice(0,15) : []
})
export const changeHotRankingAction = (res) => ({
    type:actionType.CHANGE_HOT_RANKING,
    hotRanking:res.playlist
})
export const changeNewRankingAction = (res) => ({
    type:actionType.CHANGE_NEW_RANKING,
    newRanking:res.playlist
})
export const changeOriginRankingAction = (res) => ({
    type:actionType.CHANGE_ORIGIN_RANKING,
    originRanking:res.playlist
})
export const changeSettleSinger = (atrists) => ({
    type:actionType.CHANGE_SETTLE_SINGER,
    settleSinger:atrists
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

export const getRankingsAction = (id) => {
    return dispatch => {
        getTopRanking(id).then(res => {
            switch(id){
                case 19723756:
                    dispatch(changeHotRankingAction(res));
                    break;
                case 3779629:
                    dispatch(changeNewRankingAction(res));
                    break;
                case 2884035:
                    dispatch(changeOriginRankingAction(res));
                    break;
                default:
            }
        })
    }
}

export const getSettleSingerAction = (cat) => {
    return dispatch => {
        getArtistByCat(cat).then(res => {
            console.log(res.artists)
            dispatch(changeSettleSinger(res.artists.slice(0,5)))
        })
    }
}