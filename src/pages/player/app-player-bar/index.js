import React, { memo, useEffect,useState,useRef, useCallback } from 'react'
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom'


import { Slider } from 'antd';
import { 
  PlaybarWrapper,
  Control,
  PlayInfo,
  Operator
 } from './styled'
import { getCurrentSongAction } from '../store/actionCreator';
import { useSelector } from 'react-redux';
import { formatDate,getPlaySong,getSizeImage } from '@/utils/format-utils'
import DefaultAlbumImg from '@/assets/img/default_album.jpg'

export default memo(function AppPlayerBar() {
  // props and state
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [progress, setProgress] = useState(0)
  const [isSliding, setIsSliding] = useState(false)

  // redux hooks
  const {currentSong={},playList=[]} = useSelector(state => ({
    currentSong:state.getIn(['player','currentSong']),
    playList:state.getIn(['player','playList'])
  }))
  const dispatch = useDispatch()
  // other hooks
  // useEffect(()=>{
  //   dispatch(getCurrentSongAction(441102548))
  // },[dispatch])
  useEffect(()=>{
    currentSong.id && (audioCtx.current.src = getPlaySong(currentSong.id))
    audioCtx.current.play().then(res => {
      console.log('开始播放')
      setIsPlaying(true)
    }).catch(err => {
      setIsPlaying(false)
    })
  },[currentSong])
  const audioCtx = useRef()

  // other handler
  const songName = currentSong ? currentSong.name :''
  const artistName = currentSong.ar ? currentSong.ar[0].name :''
  const duration = currentSong.dt ? currentSong.dt : 0
  const showDuration = formatDate(duration,'mm:ss')
  const showCurrentTime = formatDate(currentTime,'mm:ss')
  const showSongPicUrl = currentSong.al ? getSizeImage(currentSong.al.picUrl,34) : ''
  // handle function
  const handlePlay = useCallback(()=>{
      isPlaying ? audioCtx.current.pause() : audioCtx.current.play()
      setIsPlaying(!isPlaying)
  },[isPlaying])
  const currentTimeChangeListener = (e) => {
    if(!isSliding){
      console.log('当前播放:',e.target.currentTime)
      setCurrentTime(e.target.currentTime * 1000)
      let curPro = ((e.target.currentTime * 1000) / currentSong.dt)  * 100
      console.log('进度',curPro)
      setProgress(curPro)
    }
  }
  const onSliderChange = useCallback((val)=>{
    setIsSliding(true)
    const cur = val/100 * duration
    setCurrentTime(cur)
    setProgress(val)
  },[duration])
  const onAfterSliderChange = useCallback((val)=>{
    const cur = val/100 * duration
    audioCtx.current.currentTime = cur / 1000
    setCurrentTime(cur)
    setIsSliding(false)
    !isPlaying && handlePlay()
  },[duration,isPlaying,audioCtx,handlePlay])


  return (
    <PlaybarWrapper className='sprite_player ' >
      <div className='content wrap-v2'>
        <Control isPlaying={isPlaying}>
          <button className='prev sprite_player '></button>
          <button className='play sprite_player ' onClick={e => handlePlay()}></button>
          <button className='next sprite_player '></button>
        </Control>
        <PlayInfo>
          <div className='image'>
          <NavLink to={'/discover/songDetail'}>
            <img src={showSongPicUrl || DefaultAlbumImg} alt="" />
          </NavLink>
            <a href="/#" >
             
            </a>
          </div>
          <div className='info'>
            <div className="song">
              <span>{songName}</span>
              <span className="singer-name">{artistName}</span>
            </div>
            <div className="progress">
              <Slider 
                      value={progress}  
                      step={0.3}
                      tooltip={{open:false}}
                      onChange={onSliderChange}
                      onAfterChange={onAfterSliderChange} ></Slider>
              <div className='time'>
                <span className='now-time'>{showCurrentTime}</span>
                <span className="divider">/</span>
                <span>{showDuration}</span>
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
      <audio ref={audioCtx} 
             onTimeUpdate={currentTimeChangeListener}
             ></audio>
    </PlaybarWrapper>
  )
})
