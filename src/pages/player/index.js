import React, { memo, useEffect } from 'react'
import { DetailLeft, DetailRight, SongDetailWrapper } from './style'
import PlayerInfo from './c-cpns/player-info'
import PlaySimiPlayList from './c-cpns/player-simi-playlist'
import PlayerSimiSongs from './c-cpns/player-simi-songs'
import PlayerComment from './c-cpns/player-comment'
import { getSongDetail } from '../../service/player'

export default memo(function SongDetail(props) {
  const history = props.history
  const params = props.match.params
  if(!params.id){
    history.replace('/')
   }
  
  // 
  useEffect(()=>{
   console.log(history)
   getSongDetail(params.id).then(res=>{
    console.log('查询歌曲详情',res)
   }).catch(err=>{
    console.log('查询歌曲详情失败',err)
   })
   
  },[history,params])
  console.log('当前detail',props)
  return (
    <SongDetailWrapper>
      <div className="content wrap-v2">
        <DetailLeft>
          <PlayerInfo></PlayerInfo>
          <PlayerComment></PlayerComment>
        </DetailLeft>
        <DetailRight>
          <PlaySimiPlayList></PlaySimiPlayList>
          <PlayerSimiSongs></PlayerSimiSongs>
        </DetailRight>
      </div>
    </SongDetailWrapper>
  )
})
