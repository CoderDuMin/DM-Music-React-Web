import React, { memo } from 'react'
import { PlayerMenuWrapper } from './style'

export default memo(function index(props) {
  const { isShow } = props
  return (
    <PlayerMenuWrapper isShow={isShow} className="wrap-v2">
      <h3>播放列表</h3>
    </PlayerMenuWrapper>
  )
})
