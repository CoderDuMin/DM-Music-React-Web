import { getTopBanners } from '@/service/recommend'
import * as actionType from './constants'

export const changeTopBannersAction = (res) => ({
    type: actionType.CHANGE_TOP_BANNER,
    banners:res.banners
})

export const getTopBannersAction = () => {
    return dispatch => {
        getTopBanners().then(res=>{
            console.log(res)
            dispatch(changeTopBannersAction(res))
        })
    }
}