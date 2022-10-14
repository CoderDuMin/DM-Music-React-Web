import React, { memo } from 'react'
import { TopRankingWrapper } from './style'
import { getSizeImage } from '@/utils/format-utils'
import { getCurrentSongAction } from '@/pages/player/store/actionCreator'
import { useDispatch } from 'react-redux'
 
export default memo(function TopRanking(props) {
  const {info} = props
  const { tracks = [] } = info

  // redux-hook
  const dispatch = useDispatch()
  const playTheSong = (id) => {
    console.log(id)
    dispatch(getCurrentSongAction(id))
  }
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
              <div className='list-item' key={item.name}>
                <div className='rank'>{index + 1 }</div>
                <div className='info'>
                  <div className='name text-nowrap'>{item.name}</div>
                  <div className='operate'>
                    <button className='btn play sprite_02' onClick={e => playTheSong(item.id)}></button>
                    <button className='btn addto sprite_icon2'></button>
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
