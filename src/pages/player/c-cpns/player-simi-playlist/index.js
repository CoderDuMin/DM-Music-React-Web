import React, { memo, useEffect } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import ThemeHeaderPlayer from '../../../../components/theme-header-player'
import { getSimiPlayListAction } from '../../store/actionCreator'
import { SimiPlayListWrapper } from './style'
import { getSizeImage } from '@/utils/format-utils'

export default memo(function SimiPlayList() {
  // redux hook
  const dispatch = useDispatch()
  const {simiPlaylist} = useSelector(state => ({
    simiPlaylist:state.getIn(['player','simiPlaylist'])
  }),shallowEqual)
  // other hook
  useEffect(()=>{
    dispatch(getSimiPlayListAction())
  },[dispatch])
  console.log('simiPlaylist',simiPlaylist)
  return (
    <SimiPlayListWrapper>
      <ThemeHeaderPlayer title="包含这首歌的歌单"></ThemeHeaderPlayer>
      <div className="play-list">
        {
          simiPlaylist.slice(0,3).map((item,index) => {
            return (
              <div className="play-list-item" key={item.id}>
                <img src={getSizeImage(item.coverImgUrl,50)} alt="" className='image' />
                <div className="info text-nowrap">
                  <a className="name" href='/abc'>{item.name}</a>
                  <div className="auchor">
                    <span>by</span>
                    <span className='nickname'>{item.creator.nickname}</span>
                  </div>
                </div>
              </div>
             
            )
          })
        }
      </div>
    </SimiPlayListWrapper>
  )
})
