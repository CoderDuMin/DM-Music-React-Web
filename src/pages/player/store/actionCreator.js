import { getSongDetail } from "../../../service/player"

import * as actionTypes from './constants'

const changeCurrentSongAction = (song) => ({
  type:actionTypes.CHANGE_CURRENT_SONG,
  currentSong:song
})

const changeCurrentIndexAction = (index) => ({
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


export const getCurrentSongAction = (ids) =>{
  return (dispatch,getState) => {
    const playList = getState().getIn(['player','playList'])
    let index = playList.findIndex(item => item.id === ids)
    if(index !== -1){
      // 歌单中已有该歌曲
      dispatch(changeCurrentIndexAction(index))
      dispatch(changeCurrentSongAction(playList[index]))
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
        dispatch(changeCurrentIndexAction(newPlayList.length - 1))
        dispatch(changePlayListAction(newPlayList))
      })
    }
    
  }
}