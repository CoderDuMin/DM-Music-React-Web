import React, { memo, useEffect, useRef } from 'react'
import { useDispatch,useSelector } from 'react-redux'

import { getNewAlbumsAction } from '../../store/actioncreator'

import { Carousel } from 'antd'
import AlbumCover from '@/components/album-cover'
import ThemeHeaderRcm from '@/components/theme-header-rcm'
import { NewAlbumWrapper } from './style'

export default memo(function NewAlbum(props) {
  // state
  const { newAlbums } = useSelector(state => ({
    newAlbums:state.getIn(['recommend','newAlbums'])
  }))

  // redux hooks
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getNewAlbumsAction(10))
  },[dispatch])

  // other hooks
  const carsouelRef = useRef()

  return (
    <NewAlbumWrapper>
      <ThemeHeaderRcm title="新碟上架"  ></ThemeHeaderRcm>
      <div className='content'>
        <button className='arrow arrow-left sprite_02' onClick={e => carsouelRef.current.prev()}></button>
        <div className='album'>
          <Carousel ref={carsouelRef}>
            {
              [0,1,2].map(item=>{
                return (
                  <div className='page' key={item}>
                    {
                      newAlbums.slice(item*5,(item+1)*5).map(iten => {
                        return (
                          <AlbumCover key={iten.id} info={iten} width={118} size={100} bgp={'-570px'} ></AlbumCover>
                        )
                      })
                    }
                  </div>
                )
              })
            }
          </Carousel>
        </div>
        <button className='arrow arrow-right sprite_02' onClick={e => carsouelRef.current.next()}></button>
      </div>
    </NewAlbumWrapper>
  )
})
