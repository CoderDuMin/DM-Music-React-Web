import React, { memo, useEffect } from 'react'
import { useDispatch ,useSelector} from 'react-redux'

import { getSettleSingerAction } from '../../store/actioncreator'
import { SetterSongerWrapper } from './style'
import { getSizeImage } from '@/utils/format-utils'
import ThemeHeaderSmall from '../../../../../../components/theme-header-small'

export default memo(function SettleSinger() {

  // redux hook
  const {settleSinger=[]} = useSelector(state => ({
    settleSinger:state.getIn(['recommend','settleSinger'])
  }))
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getSettleSingerAction(5001))
  },[dispatch])
  return (
    <SetterSongerWrapper>
      <ThemeHeaderSmall title={'入驻歌手'} more={'查看全部'}></ThemeHeaderSmall>
      <div className="singer-list">
        {
          settleSinger.slice(0,5).map(item => {
            return (
              <div className="item" key={item.id}>
                <img src={getSizeImage(item.picUrl,62)} alt="" />
                <div className="info">
                  <div className="title text-nowrap">{item.alias.join('') || item.name}</div>
                  <div className="name text-nowrap">{item.name}</div>
                </div>
              </div>
            )
          })
        }
      </div>
      <div className="apply-for">
        <a href="/abc">申请成为网易音乐人</a>
      </div>
    </SetterSongerWrapper>
  )
})
