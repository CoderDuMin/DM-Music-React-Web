import request from './request'

export function getSongDetail(ids){
  return request({
    url:'/song/detail',
    method:'get',
    params:{ids},
  })
}

export function getSongLyric(id){
  return request({
    url:'/lyric',
    method:'get',
    params:{id},
  })
}