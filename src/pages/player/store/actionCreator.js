import { getSongDetail } from "../../../service/player"

import * as actionTypes from './constants'

const changeCurrentSongAction = (song) => ({
  type:actionTypes.CHANGE_CURRENT_SONG,
  currentSong:song
})


export const getCurrentSongAction = (ids) =>{
  return dispatch => {
    getSongDetail(ids).then(res=>{
      let song = {}
      if(res && res.songs ){
        song = res.songs[0]
      }
      dispatch(changeCurrentSongAction(song))
    })
  }
}