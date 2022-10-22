import React, { memo,useEffect } from 'react'
import { shallowEqual,useSelector,useDispatch } from 'react-redux'
import ThemeHeaderPlayer from '../../../../components/theme-header-player'
import { getSimiSongsAction } from '../../store/actionCreator'
import { SimiSongsWrapper } from './styled'

export default memo(function SimiSongs() {
   // redux hook
   const dispatch = useDispatch()
   const {simiSongs} = useSelector(state => ({
     simiSongs:state.getIn(['player','simiSongs'])
   }),shallowEqual)
   // other hook
   useEffect(()=>{
     dispatch(getSimiSongsAction())
   },[dispatch])
   console.log(simiSongs);
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
