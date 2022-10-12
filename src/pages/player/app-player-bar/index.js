import React, { memo, useEffect } from 'react'
import { useDispatch } from 'react-redux';


import { Slider } from 'antd';
import { 
  PlaybarWrapper,
  Control,
  PlayInfo,
  Operator
 } from './styled'
import { getCurrentSongAction } from '../store/actionCreator';
import { useSelector } from 'react-redux';
import { formatDate } from '@/utils/format-utils'

export default memo(function AppPlayerBar() {


  // redux hooks
  const {currentSong={}} = useSelector(state => ({
    currentSong:state.getIn(['player','currentSong'])
  }))
  const dispatch = useDispatch()

  // other hooks
  useEffect(()=>{
    dispatch(getCurrentSongAction(1327191622))
  },[dispatch])

  // handler
  const songName = currentSong ? currentSong.name :''
  const artistName = currentSong.ar ? currentSong.ar.name :''
  const showDuration = currentSong.dt ? currentSong.dt : 0

  return (
    <PlaybarWrapper className='sprite_player '>
      <div className='content wrap-v2'>
        <Control>
          <button className='prev sprite_player '></button>
          <button className='play sprite_player '></button>
          <button className='next sprite_player '></button>
        </Control>
        <PlayInfo>
          <div className='image'>
            <a href="/#" >
              <img src="http://p3.music.126.net/wczcMvZpbUEfCpBPcikwJg==/109951163922329458.jpg?param=34y34" alt="" />
            </a>
          </div>
          <div className='info'>
            <div className="song">
              <span>{songName}</span>
              <span className="singer-name">{artistName}</span>
            </div>
            <div className="progress">
              <Slider defaultValue={30}  tooltip={{open:false}} ></Slider>
              <div className='time'>
                <span className='now-time'>02:12</span>
                <span className="divider">/</span>
                <span>{formatDate(showDuration,'mm:ss')}</span>
              </div>
            </div>
          </div>
        </PlayInfo>
        <Operator>
          <div className='left'>
            <button className='btn sprite_player_lrc lrc'></button>
            <button className='btn sprite_player favor'></button>
            <button className='btn sprite_player share'></button>
          </div>
          <div className="right sprite_player">
            <button className='volume btn sprite_player'></button>
            <button className='loop btn sprite_player'></button>
            <button className='playlist btn sprite_player'></button>
          </div>
        </Operator>
      </div>
    </PlaybarWrapper>
  )
})
