import React, { memo, useCallback } from 'react'
import { TopRankingWrapper } from './style'
import { getSizeImage } from '@/utils/format-utils'
import { getCurrentSongAction,addSongInPlayListAction } from '@/pages/player/store/actionCreator'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
 
export default memo(function TopRanking(props) {
  const {info={}} = props
  const { tracks = [] } = info

  // redux-hook
  const dispatch = useDispatch()
  const playTheSong = (id) => {
    console.log(id)
    dispatch(getCurrentSongAction(id))
  }
  const addPlayList = useCallback((id) => {
    dispatch(addSongInPlayListAction(id))
  },[dispatch])
  return (
    <TopRankingWrapper>
      <div className='header'>
        <div className='image'>
          <img src={getSizeImage(info.coverImgUrl,80)} alt="" />
          <a href='todo' className='image_cover'>ranking</a>
        </div>
        <div className='info'>
          <a href="todo">{info.name}</a>
          <div>
            <button className='btn play sprite_02'>play</button>
            <button className='btn favor sprite_02'>play</button>
          </div>
        </div>
      </div> 
      <div className='list'>
        {
          tracks.slice(0,10).map((item,index)=>{
            return (
              <div className='list-item' key={item.id}>
                <div className='rank'>{index + 1 }</div>
                <div className='info'>
                  <NavLink to={`/discover/songDetail/${item.id}`}>
                    <div className='name text-nowrap'>{item.name}</div>
                  </NavLink>
                  <div className='operate'>
                    <button className='btn play sprite_02' onClick={e => playTheSong(item.id)}></button>
                    <button className='btn addto sprite_icon2' onClick={e => addPlayList(item.id)}></button>
                    <button className='btn favor sprite_02'></button>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
      <div className='footer'>
        <a href="/todo">查看全部 &gt;</a>
      </div>
    </TopRankingWrapper>
  )
})
