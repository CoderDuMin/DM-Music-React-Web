import React, { memo } from 'react'
import { shallowEqual, useSelector,useDispatch } from 'react-redux'
import { RankHeaderWrapper } from './style'
import {getSizeImage,formatMonthDay} from '@/utils/format-utils'
import SongOperationBar from '@/components/song-operation-bar'

export default memo(function RankHeader() {
  // redux-hook
  // const dispatch = useDispatch()
  const {playList={}} = useSelector(state => ({
    playList:state.getIn(['ranking','playList'])
  }),shallowEqual)
  return playList && (
    <RankHeaderWrapper>
      <div className="image">
        <img src={getSizeImage(playList.coverImgUrl,150)} alt="" />
        <div className="image-cover"></div>
      </div>
      <div className="info">
        <div className="title">{playList.name}</div>
        <div className="time">
          <i className="clock sprite_icon2"></i>
          <div>最近更新：{formatMonthDay(playList.updateTime)}</div>
          <div className="update-f">（{"每日更新"}）</div>
        </div>
        <SongOperationBar favorTitle={`(${playList.subscribedCount})`}
                          shareTitle={`(${playList.shareCount})`}
                          downloadTitle={`下载`}
                          commentTitle={`(${playList.commentCount})`}
                          />
      </div>
    </RankHeaderWrapper>
  )
})
