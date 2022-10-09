import React, { memo } from 'react'
import PropTypes from 'prop-types';

import { HeaderWrapper } from './style'

const ThemeHeaderRmc =  memo(function(props) {
  const {title,keywords=[]} = props
  return (
    <HeaderWrapper className='sprite_02'>
      <div className='left'>
        <h2 className='title' >{title}</h2>
        <div className='keyword' >
          {
            keywords.map((item,index) => {
              return (
                <div className='item' key={item} >
                  {item}
                  <span className='divider'>|</span>
                </div>
              )
            })
          }
        </div>
      </div>
      <div className='right'>
          更多
          <i className='icon sprite_02'></i>
      </div>
    </HeaderWrapper>
  )
})

ThemeHeaderRmc.propTypes = {
  title:PropTypes.string.isRequired,
  keywords:PropTypes.array
}
ThemeHeaderRmc.defaultProps = {
  keywords:[]
}

export default ThemeHeaderRmc;