import React, { memo } from 'react'

import ThemeHeaderRcm from '@/components/theme-header-rcm'
import { NewAlbumWrapper } from './style'

export default memo(function NewAlbum(props) {
  return (
    <NewAlbumWrapper>
      <ThemeHeaderRcm title="新碟上架"  ></ThemeHeaderRcm>
    </NewAlbumWrapper>
  )
})
