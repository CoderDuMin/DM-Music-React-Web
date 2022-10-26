import { getTopList,getRankingList } from '@/service/ranking'
import * as actionTypes from './constants'

const changeTopListAction = (res) => ({
  type:actionTypes.CHANGE_TOP_LIST,
  topList:res
})

const changePlayListAction = (res) => ({
  type:actionTypes.CHANGE_PLAY_LIST,
  playList:res
})

export const changeCurrentIndexAction = (index) => ({
  type:actionTypes.CHANGE_CURRENT_INDEX,
  currentIndex:index
})

export const getTopListAction = ()=>{
  return (dispatch,getState) => {
    getTopList().then(res => {
      console.log('所有歌单',res.list)
      dispatch(changeTopListAction(res.list))
      dispatch(changeCurrentIndexAction(0))
      dispatch(getPlayListAction(res.list[0].id))
    })
  }
}

export const getPlayListAction = (id)=>{
  return (dispatch,getState) => {
    getRankingList(id).then(res => {
      console.log('歌单明细',res.playlist)
      dispatch(changePlayListAction(res.playlist))
    })
  }
}
