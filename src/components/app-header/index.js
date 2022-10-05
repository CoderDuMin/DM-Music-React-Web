import React, { memo } from 'react'
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons'

import { headerLinks } from '@/common/local-data'

import { HeaderWrapper,HeaderLeft,HeaderRight } from './style'
import { NavLink } from 'react-router-dom'

const AppHeader = memo(() => {
  
  const showSelectItem = (item) => {
    if(item.isOutLink){
        return <a href={item.path} target="_blank" rel="noopener noreferrer">{item.title}</a>
    }
    else{
        return (
            <NavLink to={item.path} >
                {item.title}
                <i className='sprite_01 icon'></i>
            </NavLink>
        )
    }
  }  

  // jsx代码
  return (
    <HeaderWrapper>
        <div className='content wrap-v1'>
            <HeaderLeft >
                <a href="/#" className='logo sprite_01'>网易云音乐
                </a>
                <div className='select-list'>
                    {
                        headerLinks.map(item =>{
                           return (
                            <div key={item.title} className="select-item">
                                {showSelectItem(item)}
                            </div>
                           )
                        })
                    }
                </div>
            </HeaderLeft>
            <HeaderRight>
                <Input className='search' placeholder="音乐/视频/电台/用户" prefix={<SearchOutlined />} />
                <div className='center'>创作者中心</div>
                <div className='login'>登录</div>
            </HeaderRight>
        </div>
        <div className='divider'></div>
    </HeaderWrapper>
  )
})

export default AppHeader