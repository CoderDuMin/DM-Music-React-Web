import React, { memo } from 'react'
import PlayHeader from './c-cpn/play-header'
import PlayList from './c-cpn/play-list'
import PlayLyric from './c-cpn/play-lyric'
import { PlayerMenuWrapper } from './style'

export default memo(function index(props) {
  const { isShow } = props
  return (
    <PlayerMenuWrapper isShow={isShow} className="wrap-v2">
      <PlayHeader></PlayHeader>
      <div className="main">
        <img className="image" src="https://p4.music.126.net/qeN7o2R3_OTPhghmkctFBQ==/764160591569856.jpg" alt=""/>
        <PlayList></PlayList>
        <PlayLyric></PlayLyric>
      </div>
    </PlayerMenuWrapper>
  )
})
