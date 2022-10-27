import React, { memo, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import RankHeader from './c-cpns/rank-header'
import RankList from './c-cpns/rank-list'
import TopRank from './c-cpns/top-rank'
import { getTopListAction } from './store/actionCreator'
import { RankingLeft, RankingRight, RankingWrapper } from './style'

const Ranking = memo(() => {
  // redux hook
  const dispatch = useDispatch()
  // other hook
  useEffect(()=>{
    dispatch(getTopListAction())
  },[dispatch])

  return (
    <RankingWrapper className="wrap-v2">
      <RankingLeft>
        <TopRank></TopRank>
      </RankingLeft>
      <RankingRight>
        <RankHeader></RankHeader>
        <RankList></RankList>
      </RankingRight>
    </RankingWrapper>
  )
})

export default Ranking