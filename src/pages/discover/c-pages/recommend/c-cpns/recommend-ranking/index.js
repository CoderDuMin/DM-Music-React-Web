import React, { memo ,useEffect} from 'react'
import { shallowEqual, useDispatch,useSelector } from 'react-redux'

import ThemeHeaderRcm from '@/components/theme-header-rcm'
import { RecommendRankingWrapper } from './style'
import { getRankingsAction } from '../../store/actioncreator'
import TopRanking from '../../../../../../components/top-ranking'

export default memo(function RecommendRanking(props) {
  // state
  const {hotRanking,newRanking,originRanking} = useSelector(state => ({
    hotRanking:state.getIn(['recommend','hotRanking']),
    newRanking:state.getIn(['recommend','newRanking']),
    originRanking:state.getIn(['recommend','originRanking'])
  }),shallowEqual)
  // redux hook
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getRankingsAction(19723756))
    dispatch(getRankingsAction(3779629))
    dispatch(getRankingsAction(2884035))
  },[dispatch])
  return (
    <RecommendRankingWrapper>
      <ThemeHeaderRcm title="榜单"  ></ThemeHeaderRcm>
      <div className='tops'>
        <TopRanking info={hotRanking} />
        <TopRanking info={newRanking} />
        <TopRanking info={originRanking} />
      </div>
    </RecommendRankingWrapper>
  )
})
