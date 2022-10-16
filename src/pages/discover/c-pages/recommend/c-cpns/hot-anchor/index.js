import React, { memo } from 'react'
import { HotAnchorWrapper } from './style'
import { hotRadios } from '@/common/local-data'
import ThemeHeaderSmall from '../../../../../../components/theme-header-small'

export default memo(function HotAnchor() {
  return (
    <HotAnchorWrapper>
      <ThemeHeaderSmall title={'热门主播'} more={'查看全部'}></ThemeHeaderSmall>
      <div className="radio-list">
        {
          hotRadios.map(item => {
            return (
              <div className="item" key={item.picUrl}>
                <a href="/#" className="image">
                  <img src={item.picUrl} alt="" />
                </a>
                <div className="info">
                  <div className="name">{item.name}</div>
                  <div className="position text-nowrap">{item.position}</div>
                </div>
              </div>
            )
          })
        }
      </div>
    </HotAnchorWrapper>
  )
})
