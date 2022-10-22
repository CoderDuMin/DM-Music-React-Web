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

export function getSimiPlaylist(id) {
  return request({
    url: "/simi/playlist",
    params: {
      id
    }
  })
}

export function getSimiSong(id) {
  return request({
    url: "/simi/song",
    params: {
      id
    }
  })
}
export function getSongComments(id){
  return request({
    url: "/comment/music",
    params: {
      id,
      limit:20
    }
  })
}
