import React, { memo, useCallback } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import { RankListWrapper } from './style'
import {getSizeImage,formatMinuteSecond} from '@/utils/format-utils'
import { useDispatch } from 'react-redux'
import { getCurrentSongAction } from '../../../../../player/store/actionCreator'

export default memo(function RankList() {
  const {playList={}} = useSelector(state => ({
    playList:state.getIn(['ranking','playList'])
  }),shallowEqual)
  const tracks = playList.tracks || [];

  // redux hook
  const dispatch = useDispatch()

  const playTheSong = useCallback((id)=>{
    dispatch(getCurrentSongAction(id))
  },[dispatch])

  return (
    <RankListWrapper>
      <div className="play-list">
        <table>
          <thead>
            <tr className='header'>
              <th className='ranking'></th>
              <th className="title">标题</th>
              <th className="duration">时长</th>
              <th className="singer">歌手</th>
            </tr>
          </thead>
          <tbody>
            {
              tracks.map((item,index) => {
                return (
                  <tr key={item.id} className="item">
                    <td>
                      <div className="rank-num">
                        <span className='num'>{index+1}</span>
                        <span className='new sprite_icon2'></span>
                      </div>
                    </td>
                    <td>
                      <div className="song-name">
                        {
                          index < 3 ? (<img src={getSizeImage(item.al.picUrl,50)} alt="" />):null
                        }
                        <i className="play sprite_table" onClick={e => playTheSong(item.id)}></i>
                        <div className="name">{item.name}</div>
                      </div>
                    </td>
                    <td>{formatMinuteSecond(item.dt)}</td>
                    <td>{item.ar[0].name}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
      
    </RankListWrapper>
  )
})
