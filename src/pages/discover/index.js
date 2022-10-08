import React, { memo, } from 'react'

import { DiscoverWrapper} from './style'
import { discoverMenus } from '@/common/local-data'
import { NavLink } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'

const Discover = memo((props) => {

  const {route} = props
  
  return (
    <DiscoverWrapper>
      <div className='top '>
        <div className='item-list wrap-v1'>
          {
            discoverMenus.map((item,index)=>{
              return (
                <div className='item' key={item.title}>
                  <NavLink to={item.link}>{item.title}</NavLink>
                </div>
              )
            })
          }
        </div>
      </div>
      {
        renderRoutes(route.routes)
      }
    </DiscoverWrapper>
  )
})

export default Discover