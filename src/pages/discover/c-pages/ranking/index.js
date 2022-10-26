import React, { memo, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getTopListAction } from './store/actionCreator'
import { RankingWrapper } from './style'

const Ranking = memo(() => {
  // redux hook
  const dispatch = useDispatch()
  // other hook
  useEffect(()=>{
    dispatch(getTopListAction())
  },[dispatch])

  return (
    <RankingWrapper>
      Ranking
    </RankingWrapper>
  )
})

export default Ranking