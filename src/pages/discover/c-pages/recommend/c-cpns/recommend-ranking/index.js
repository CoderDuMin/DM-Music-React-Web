import React, { memo } from 'react'

import ThemeHeaderRcm from '@/components/theme-header-rcm'
import { RecommendRankingWrapper } from './style'

export default memo(function RecommendRanking(props) {
  return (
    <RecommendRankingWrapper>
      <ThemeHeaderRcm title="榜单"  ></ThemeHeaderRcm>
    </RecommendRankingWrapper>
  )
})
