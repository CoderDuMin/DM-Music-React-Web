import request from './request'

export function getTopBanners(){
    return request({
        url:'/banner'
    })
}

export function getHotRecommend(limit){
    return request({
        url:'/personalized',
        method:'get',
        params:{
            limit
        }
    })
}

export function getNewAlbum(limit){
    return request({
        url:'/top/album',
        method:'get',
        params:{
            limit
        }
    })
}