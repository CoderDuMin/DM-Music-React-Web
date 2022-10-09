import React, { memo } from 'react'

import { SongsCoverWrapper } from './style'

import { getCount,getSizeImage } from '@/utils/format-utils'

export default memo(function SongsCover(props) {
  const { info } = props
  return (
    <SongsCoverWrapper>
      <div className='cover-top' >
        <img src={getSizeImage(info.picUrl,140)} alt="" />
        <div className='cover sprite_covor' >
          <div className='info sprite_covor'>
            <span>
              <i className='erji sprite_icon'></i>
              {getCount(info.playCount)}
            </span>
            
            <div className='play sprite_icon'></div>
          </div>
        </div>
      </div>
      <div className={'cover-bottom '} >{info.name}</div>
      <div className='cover-source' >{info.copywriter && 'by '+info.copywriter}</div>
    </SongsCoverWrapper>
  )
})
