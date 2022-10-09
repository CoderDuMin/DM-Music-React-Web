import React, { memo,useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'

import ThemeHeaderRcm from '@/components/theme-header-rcm'
import SongsCover from '@/components/songs-cover'
import { HotRecommendWrapper } from './style'
import { getHotRecommendAction } from '../../store/actioncreator'

import { HOT_RECOMMEND_LIMIT } from '@/common/constants'

export default memo(function HotRecommend(props) {
  // state
  const { hotRecommend } = useSelector(state=>({
    hotRecommend:state.getIn(['recommend','hotRecommend'])
  }))

  // hooks
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getHotRecommendAction(HOT_RECOMMEND_LIMIT))
  },[dispatch] )
  

  // 其他hooks

  return (
    <HotRecommendWrapper>
      <ThemeHeaderRcm title="热门推荐" keywords={['华语','流行','摇滚','民谣','电子']} ></ThemeHeaderRcm>
      <div className="recommend-list">
        {
          hotRecommend.map((item,index) => {
            return (
              <SongsCover key={item.name} info={item}></SongsCover>
            )
          })
        }
      </div>
    </HotRecommendWrapper>
  )
})
