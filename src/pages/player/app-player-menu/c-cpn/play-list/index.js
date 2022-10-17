import React, { memo } from 'react'
import { useSelector } from 'react-redux'
import calssnames from 'classnames'
import { PlayListWrapper } from './style'

import { formatDate } from '@/utils/format-utils'

export default memo(function PlayList() {
  // reduxhooks
  const {playList=[]} = useSelector(state => ({
    playList:state.getIn(['player','playList'])
  }))
  return (
    <PlayListWrapper>
      {
        playList.map((item,index) => {
          return (
            <div className={calssnames("play-item",{'active': index === 1})} key={item.id}>
              <div className="left">{item.name}</div>
              <div className="right">
                <span className="singer text-nowrap">{item.ar[0].name}</span>
                <span className="duration">{formatDate(item.dt,'mm:ss')}</span>
                <span className="sprite_playlist link"></span>
              </div>
            </div>
          )
        })
      }
    </PlayListWrapper>
  )
})
