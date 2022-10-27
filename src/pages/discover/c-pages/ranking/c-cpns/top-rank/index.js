import classNames from 'classnames'
import React, { memo, useCallback } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { changeIndexAndPlayListAction } from '../../store/actionCreator'
import { TopRankWrapper } from './style'
import {getSizeImage} from '@/utils/format-utils'

export default memo(function TopRank() {

  // redux hook 
  const dispatch = useDispatch()
  const {currentIndex=0,topList=[]} = useSelector(state => ({
    currentIndex:state.getIn(['ranking','currentIndex']),
    topList:state.getIn(['ranking','topList'])
  }),shallowEqual)
  // other hook

  // other handler
  const changeIndex = useCallback((index) => {
    dispatch(changeIndexAndPlayListAction(index))
  },[dispatch])

  return (
    <TopRankWrapper>
      { 
        topList?.map((item,index)=>{
          let header = undefined
          if(index === 0 || index === 4){
            header =<div className='header'>{index === 0 ? '云音乐特色榜' : '全球媒体榜'}</div>
          }
          return(
            <div key={item.id}>
              {header}
              <div className={classNames('item',{'active': index === currentIndex})} onClick={e => changeIndex(index)}>
                <img src={getSizeImage(item.coverImgUrl,40)} alt="" />
                <div className="info">
                  <div className="name">{item.name}</div>
                  <div className="update">{item.updateFrequency}</div>
                </div>
              </div>
            </div>
          )
        })
      }
    </TopRankWrapper>
  )
})
