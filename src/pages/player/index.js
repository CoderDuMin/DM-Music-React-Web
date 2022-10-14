import React, { memo } from 'react'
import { DetailLeft, DetailRight, SongDetailWrapper } from './style'

export default memo(function SongDetail() {
  return (
    <SongDetailWrapper>
      <div className="content wrap-v2">
        <DetailLeft></DetailLeft>
        <DetailRight></DetailRight>
      </div>
    </SongDetailWrapper>
  )
})
