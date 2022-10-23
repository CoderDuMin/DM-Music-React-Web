import React, { memo } from 'react'
import { DetailLeft, DetailRight, SongDetailWrapper } from './style'
import PlayerInfo from './c-cpns/player-info'
import PlaySimiPlayList from './c-cpns/player-simi-playlist'
import PlayerSimiSongs from './c-cpns/player-simi-songs'
import PlayerComment from './c-cpns/player-comment'

export default memo(function SongDetail(props) {
  const history = props.history
  const id = props?.match?.params?.id || undefined
  if(!id){
    history.replace('/')
   }
  
  return (
    <SongDetailWrapper>
      <div className="content wrap-v2">
        <DetailLeft>
          <PlayerInfo id={id}></PlayerInfo>
          <PlayerComment id={id}></PlayerComment>
        </DetailLeft>
        <DetailRight>
          <PlaySimiPlayList id={id}></PlaySimiPlayList>
          <PlayerSimiSongs id={id}></PlayerSimiSongs>
        </DetailRight>
      </div>
    </SongDetailWrapper>
  )
})
