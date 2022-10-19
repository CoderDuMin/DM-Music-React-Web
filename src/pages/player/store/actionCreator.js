import { getSongDetail,getSongLyric } from "../../../service/player"

import * as actionTypes from './constants'
import { getRandom } from '@/utils/math-utils'
import { parseLyric } from '@/utils/parse-lyric'

const changeCurrentSongAction = (song) => ({
  type:actionTypes.CHANGE_CURRENT_SONG,
  currentSong:song
})

const changeCurrentSongIndexAction = (index) => ({
  type:actionTypes.CHANGE_CURRENT_SONG_INDEX,
  currentSongIndex:index
})

const changePlayListAction = (playList) => {
  
  let action = {
    type:actionTypes.CHANGE_PLAYLIST,
    playList:playList
  }
  console.log('触发changePlayListAction',playList,action)
  return action
}
const changeSequenceAction = (index) => ({
  type:actionTypes.CHANGE_SEQUENCE,
  sequence:index
})

const changeLyricListAction = (lyric) => ({
  type:actionTypes.CHANGE_LYRIC_LIST,
  lyricList:lyric
})

export const changeCurrentLyricIndexAction = (index) => ({
  type:actionTypes.CHANGE_CURRENT_LYRIC_INDEX,
  currentLyricIndex:index
})

// 对外暴露的action
export const getSongLyricAction = (id) => {
  return (dispatch) => {
    getSongLyric(id).then(res => {
      if(res.lrc){
        const lyricList = parseLyric(res.lrc.lyric)
        console.log('解析完的歌词',lyricList)
        dispatch(changeLyricListAction(lyricList))
      }
    })
  }
}

export const changePlayModeAction = () => {
  return (dispatch,getState) => {
    const sequence = getState().getIn(['player','sequence'])
    let modeIndex = sequence + 1
    if(modeIndex > 2){
      modeIndex = 0
    } 
    dispatch(changeSequenceAction(modeIndex))
  }
}

export const changeCurrentSongAndIndexAction = (tag) => {
  return (dispatch,getState) => {
    const sequence = getState().getIn(['player','sequence'])
    const playList = getState().getIn(['player','playList'])
    const currentSongIndex = getState().getIn(['player','currentSongIndex'])

    let currentIndex = -999
    switch(sequence){
      case 1:
       currentIndex = getRandom(playList.length)
       while(currentIndex === currentSongIndex && playList.length > 1){
        currentIndex = getRandom(playList.length)
       }
       break
      default:
       currentIndex = currentSongIndex + tag
       if(currentIndex < 0) currentIndex = playList.length - 1
       if(currentIndex >= playList.length ) currentIndex = 0
    }

    dispatch(changeCurrentSongIndexAction(currentIndex))
    dispatch(changeCurrentSongAction(playList[currentIndex]))
    dispatch(getSongLyricAction(playList[currentIndex].id))

  }
}

export const getCurrentSongAction = (ids) =>{
  return (dispatch,getState) => {
    const playList = getState().getIn(['player','playList'])
    let index = playList.findIndex(item => item.id === ids)
    if(index !== -1){
      // 歌单中已有该歌曲
      dispatch(changeCurrentSongIndexAction(index))
      dispatch(changeCurrentSongAction(playList[index]))
      dispatch(getSongLyricAction(playList[index].id))
    }
    else{
      getSongDetail(ids).then(res=>{
        if(!res.songs) {
          // 没有找到歌曲
          console.log('没有找到歌曲');
          return ;
        }
        let song = res.songs[0]
        let newPlayList = [...playList,song]
        dispatch(changeCurrentSongAction(song))
        dispatch(changeCurrentSongIndexAction(newPlayList.length - 1))
        dispatch(changePlayListAction(newPlayList))
        dispatch(getSongLyricAction(song.id))
      })
    }
    
  }
}

export const playSongInPlayListByIndexAction = (index) => {
  return (dispatch,getState) => {
    const playList = getState().getIn(['player','playList'])
    const currentSongIndex = getState().getIn(['player','currentSongIndex'])
    if(currentSongIndex === index){
      return;
    }
    dispatch(changeCurrentSongIndexAction(index))
    dispatch(changeCurrentSongAction(playList[index]))
    dispatch(getSongLyricAction(playList[index].id))

  }
}

// 移除歌单歌曲
export const removeSongInPlayList = (index) => {
  return (dispatch,getState) => {
    const playList = getState().getIn(['player','playList'])
    const currentSongIndex = getState().getIn(['player','currentSongIndex'])
    if(index === currentSongIndex){
      // 切歌
      dispatch(changeCurrentSongAndIndexAction(1))
      if(playList.length > index){
        dispatch(changeCurrentSongIndexAction(index))
      }
      
    }
    if(index < currentSongIndex){
      dispatch(changeCurrentSongIndexAction(currentSongIndex - 1))
    }
    let newPlayList = [...playList]
    newPlayList.splice(index,1)
    dispatch(changePlayListAction(newPlayList))
  }
}

// 添加歌曲进歌单
export const addSongInPlayListAction = (ids) =>{
  return (dispatch,getState) => {
    const playList = getState().getIn(['player','playList'])
    let index = playList.findIndex(item => item.id === ids)
    if(index !== -1){
      return;
    }
    else{
      getSongDetail(ids).then(res=>{
        if(!res.songs) {
          // 没有找到歌曲
          console.log('没有找到歌曲');
          return ;
        }
        let song = res.songs[0]
        let newPlayList = [...playList,song]
        dispatch(changePlayListAction(newPlayList))
      })
    }
    
  }
}
