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
import { changeCurrentLyricIndexAction, changeCurrentSongAndIndexAction,changePlayModeAction } from '../store/actionCreator';
import { useSelector } from 'react-redux';
import { formatDate,getPlaySong,getSizeImage } from '@/utils/format-utils'
import DefaultAlbumImg from '@/assets/img/default_album.jpg'
import AppPlayerMenu from '../app-player-menu';

export default memo(function AppPlayerBar() {
  // props and state
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [progress, setProgress] = useState(0)
  const [isSliding, setIsSliding] = useState(false)
  const [showLyric, setShowLyric] = useState(false)
  const [currentLyric, setCurrentLyric] = useState('')
  const [showMenu, setShowMenu] = useState(false)
  const [showVolumeBar,setShowVolumeBar] = useState(false)
  const [volume,setVolume] = useState(100)

  // redux hooks
  const {currentSong={},sequence=0,playList=[],lyricList=[]} = useSelector(state => ({
    currentSong:state.getIn(['player','currentSong']),
    playList:state.getIn(['player','playList']),
    sequence:state.getIn(['player','sequence']),
    lyricList:state.getIn(['player','lyricList'])
  }))
  const dispatch = useDispatch()
  // other hooks
  
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
    if(Object.keys(currentSong).length>0){
      isPlaying ? audioCtx.current.pause() : audioCtx.current.play()
      setIsPlaying(!isPlaying)
    }else{
      if(playList.length > 0){
        dispatch(changeCurrentSongAndIndexAction(1))
      }else{
        console.log('当前歌单没有歌曲,无法播放')
      }
    }
      
  },[isPlaying,currentSong,playList,dispatch])
  
  // 切歌:上一首 下一首
  const changeSong = useCallback((tag)=>{
    dispatch(changeCurrentSongAndIndexAction(tag))
  },[dispatch])
  // 是否展示画中画歌词
  const showDrawLyric = useCallback(() => {
    setShowLyric(!showLyric)
  },[showLyric])
  // 改变播放模式
  const changePlayMode = useCallback(()=>{
    dispatch(changePlayModeAction())
  },[dispatch])
  // 监听歌曲播放时间变化监听
  const currentTimeChangeListener = useCallback((e) => {
    if(!isSliding){
      // console.log('当前播放:',e.target.currentTime)
      setCurrentTime(e.target.currentTime * 1000)
      let curPro = ((e.target.currentTime * 1000) / duration)  * 100
      // console.log('进度',curPro)
      setProgress(curPro)
    }
    if(true){
      let lyricIndex = lyricList.findIndex(item => item.time >= (e.target.currentTime * 1000))
      if(lyricIndex === -1)return; 
      if( lyricIndex === 0 ){
        lyricIndex = 0
      }else{
        lyricIndex = lyricIndex -1 
      } 
      let lyric = lyricList[lyricIndex]
      if(lyric.content !== currentLyric && lyric.content){
        setCurrentLyric(lyric.content)
        dispatch(changeCurrentLyricIndexAction(lyricIndex))
      }
    }
  },[isSliding,lyricList,currentLyric,duration,dispatch])
  // 歌曲进度条变更中监听
  const onSliderChange = useCallback((val)=>{
    setIsSliding(true)
    const cur = val/100 * duration
    setCurrentTime(cur)
    setProgress(val)
  },[duration])
  // 歌曲进度条变更完成监听
  const onAfterSliderChange = useCallback((val)=>{
    const cur = val/100 * duration
    audioCtx.current.currentTime = cur / 1000
    setCurrentTime(cur)
    setIsSliding(false)
    !isPlaying && handlePlay()
  },[duration,isPlaying,audioCtx,handlePlay])
  // 歌曲播放结束监听事件
  const handleSongEnded = useCallback(()=>{
    if(sequence === 2){
      audioCtx.current.currentTime = 0
      audioCtx.current.play()
    }else{
      dispatch(changeCurrentSongAndIndexAction(1))
    }
  },[sequence,dispatch])

    // 歌曲进度条变更中监听
    const onVolumeSliderChange = useCallback((val)=>{
      audioCtx.current.volume = val/100
      setVolume(val)
    },[audioCtx])

  return (
    <PlaybarWrapper className='sprite_player '  showLyric={showLyric} >
      <div className='content wrap-v2'>
        <Control isPlaying={isPlaying}>
          <button className='prev sprite_player ' title="上一首" onClick={e => changeSong(-1)}></button>
          <button className='play sprite_player ' title={isPlaying?'暂停':'播放'} onClick={e => handlePlay()}></button>
          <button className='next sprite_player ' title="下一首" onClick={e => changeSong(1)}></button>
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
        <Operator sequence={sequence} showVolume={showVolumeBar}>
          <div className='left'>
            <button className='btn sprite_player_lrc lrc' title="画中画歌词" onClick={e => showDrawLyric()}></button>
            <button className='btn sprite_player favor' title="收藏"></button>
            <button className='btn sprite_player share' title="分享"></button>
          </div>
          <div className="right sprite_player">
            <button className='volume btn sprite_player' title="音量" onClick={e => setShowVolumeBar(!showVolumeBar)}>
            </button>
            <button className='loop btn sprite_player' title={['顺序播放','随机播放','单曲循环'][sequence]} onClick={e => changePlayMode()}></button>
            <button className='playlist btn sprite_player' title="播放列表" onClick={e => setShowMenu(!showMenu)}>{playList.length}</button>
            <div className='volume-bar'>
              <div className='bgbar sprite_player'></div>
              <Slider vertical  value={volume} 
                      onChange={onVolumeSliderChange}
                        />
            </div>
          </div>
          
        </Operator>
        <div className='draw-lyric text-nowrap' >{currentLyric}</div>  
      </div>
      <audio ref={audioCtx} 
             onTimeUpdate={e=>currentTimeChangeListener(e)}
             onEnded={e=> handleSongEnded()}
             ></audio>
      <AppPlayerMenu isShow={showMenu} hide={e => setShowMenu(false)} ></AppPlayerMenu>
      
      
    </PlaybarWrapper>
  )
})
