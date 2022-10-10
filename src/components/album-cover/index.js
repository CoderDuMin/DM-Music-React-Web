import React, { memo } from 'react'

import { AlbumWrapper } from './style'
import { getSizeImage } from '@/utils/format-utils'

export default memo(function AlbumCover(props) {
  const { info, width=153, size=130, bgp="-845px" } = props
  return (
    <AlbumWrapper width={width} size={size} bgp={bgp}>
      <div className='album-image'>
        <img src={getSizeImage(info.picUrl,size)} alt=""  />
        <a href="todo" className='cover image_cover'>{info.name}</a>
      </div>
      <div className='album-info'>
        <div className='name'>{info.name}</div>
        <div className='artist'>{info.artist.name}</div>
      </div>
    </AlbumWrapper>
  )
})
