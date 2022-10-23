import React, { memo, useEffect,useState } from 'react'
import ThemeHeaderPlayer from '@/components/theme-header-player'
import { SimiPlayListWrapper } from './style'
import { getSizeImage } from '@/utils/format-utils'
import { getSimiPlaylist } from '../../../../service/player'

export default memo(function SimiPlayList(props) {
  // state and props
  const id = props.id || undefined
  const [simiPlaylist, setSimiPlaylist] = useState([])
  // other hooks
  useEffect(()=>{
    if(!id)return;
    getSimiPlaylist(id).then(res=>{
      setSimiPlaylist(res.playlists)
    }).catch()
  },[id])
  return (
    <SimiPlayListWrapper>
      <ThemeHeaderPlayer title="包含这首歌的歌单"></ThemeHeaderPlayer>
      <div className="play-list">
        {
          simiPlaylist && simiPlaylist.slice(0,3).map((item,index) => {
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
