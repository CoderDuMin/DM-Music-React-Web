import request from './request'

export function querySongsByKeywords(keywords='',type=1,limit=30,offset=0){
    return request({
        url:'/search',
        params:{
          keywords,
          type,
          limit,
          offset
        }
    })
}
export function querySearchMultimatch(keywords=''){
    return request({
        url:'/search/multimatch',
        params:{
          keywords
        }
    })
}
