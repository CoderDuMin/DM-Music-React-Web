import React, { memo,useEffect,useState } from 'react'
import ThemeHeaderPlayer from '@/components/theme-header-player'
import { getSimiSong } from '../../../../service/player'
import { SimiSongsWrapper } from './styled'

export default memo(function SimiSongs(props) {
  // state and props
  const id = props.id || undefined
  const [simiSongs, setSimiSongs] = useState([])
   // redux hook

   // other hook
   useEffect(()=>{
    if(!id) return;
    getSimiSong(id).then(res=>{
      setSimiSongs(res.songs)
    })
   },[id])
  return (
    <SimiSongsWrapper>
      <ThemeHeaderPlayer title="相似歌曲" />
      <div className="songs">
        {
          simiSongs.slice(0,5).map(item=>{
            return (
              <div className="song-item" key={item.id}>
                <div className="info">
                  <div className="title">
                    <a href="/abc">{item.name}</a>
                  </div>
                  <div className="artist">
                    <a href="/abc">{item.artists[0].name}</a>
                  </div>
                </div>
                <div className="operate">
                  <button className="item sprite_icon3 play"></button>
                  <button className="item sprite_icon3 add"></button>
                </div>
              </div>
            )
          })
        }
      </div>
    </SimiSongsWrapper>
  )
})
