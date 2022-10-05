import React, { memo } from 'react'

import { FooterWrapper,FooterLeft,FooterRight } from './style'

import { footerImages } from '@/common/local-data'

const AppFooter = memo(() => {
  return (
    <FooterWrapper>
        <div className='content wrap-v2'>
            <FooterLeft>
                <div className='guide'>
                    <a href='https://st.music.163.com/official-terms/service' rel="noopener noreferrer" target="_blank">服务条款</a>
                    <span>|</span>
                    <a href='https://st.music.163.com/official-terms/service' rel="noopener noreferrer" target="_blank">隐私政策</a>
                    <span>|</span>
                    <a href='https://st.music.163.com/official-terms/service' rel="noopener noreferrer" target="_blank">版权投诉指引</a>
                    <span>|</span>
                    <a href='https://st.music.163.com/official-terms/service' rel="noopener noreferrer" target="_blank">联系我们</a>
                </div>
                <div className='company-info'>
                    <div>网易公司版权所有©1997-2022 </div>
                    <div>仅供个人学习使用，不做任何其他用途</div>
                </div>
                <div className='record'>粤B2-20090191-18  工业和信息化部备案管理系统网站</div>
            </FooterLeft>
            <FooterRight>
            {
                footerImages.map((item, index) => {
                    return (
                    <li className="item" key={item.link}>
                        <a className="link" href={item.link} rel="noopener noreferrer" target="_blank"> </a>
                        <span className="title">{item.title}</span>
                    </li>
                    )
                })
            }
            </FooterRight>
        </div>
    </FooterWrapper>
  )
})

export default AppFooter