import classNames from 'classnames'
import React, { memo ,useEffect, useRef} from 'react'
import { shallowEqual,useSelector } from 'react-redux'
import { PlayLyricWrapper } from './style'
import { scrollTo } from "@/utils/ui-helper";

export default memo(function PlayLyric() {
  

  // redux-hook
  const {lyricList=[],currentLyricIndex=0} = useSelector(state => ({
    lyricList:state.getIn(['player','lyricList']),
    currentLyricIndex:state.getIn(['player','currentLyricIndex'])
  }),shallowEqual)
  
  // other hook
  const panelRef = useRef()
  useEffect(() => {
    if (currentLyricIndex > 0 && currentLyricIndex < 3) return;
    scrollTo(panelRef.current, (currentLyricIndex - 3) * 32, 300)
  }, [currentLyricIndex]);

  return (
    <PlayLyricWrapper ref={panelRef}>
      <div className='lrc-content'>
        {
          lyricList.map((item,index) => {
            return (
              <div className={classNames('lrc-item',{'active':index === currentLyricIndex})} key={item.time}>
                {item.content}
              </div>
            )
          })
        }
      </div>
    </PlayLyricWrapper>
  )
})
