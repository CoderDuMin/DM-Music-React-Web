import React, { memo,useCallback } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import calssnames from 'classnames'
import { PlayListWrapper } from './style'

import { formatDate } from '@/utils/format-utils'
import { playSongInPlayListByIndexAction, removeSongInPlayList } from '../../../store/actionCreator'

export default memo(function PlayList() {
  // reduxhooks
  const {playList=[],currentSongIndex=0} = useSelector(state => ({
    playList:state.getIn(['player','playList']),
    currentSongIndex: state.getIn(['player','currentSongIndex'])
  }))
  const dispatch = useDispatch()
  // other handle
  const removeSong = useCallback((index) => {
    dispatch(removeSongInPlayList(index))
  },[dispatch])
  // 播放选择歌曲
  const handlePlayTheSong = useCallback((index) => {
    dispatch(playSongInPlayListByIndexAction(index))
  },[dispatch])

  return (
    <PlayListWrapper>
      {
        playList.map((item,index) => {
          return (
            <div className={calssnames("play-item",{'active': index === currentSongIndex})} key={item.id} 
                 onDoubleClick={e => handlePlayTheSong(index)}>
              <div className="left">{item.name}</div>
              <div className="operator">
                <i className='favor btn sprite_playlist_bar' title='收藏'></i>
                <i className="share btn sprite_playlist_bar" title='分享'></i>
                <i className="down btn sprite_playlist_bar" title='下载'></i>
                <i className="delete btn sprite_playlist_bar" title='删除' onClick={e => removeSong(index)}></i>
              </div>
              <div className="right">
                <span className="singer text-nowrap">{item.ar[0].name}</span>
                <span className="duration">{formatDate(item.dt,'mm:ss')}</span>
                <span className="sprite_playlist link"></span>
              </div>
            </div>
          )
        })
      }
    </PlayListWrapper>
  )
})
