import React, { memo,useEffect,useState } from 'react'
import ThemeHeaderRmc from '@/components/theme-header-rcm'
import { SongCommentsWrapper } from './style'
import { getSizeImage } from '@/utils/format-utils'
import { LikeOutlined } from '@ant-design/icons'
import { getSongComments } from '../../../../service/player'

export default memo(function SongComments(props) {
  // state and props
  const id = props.id || undefined
  const [songComments, setSongComments] = useState([])

  // redux hook

  // other hook
  useEffect(()=>{
    if(!id) return;
    getSongComments(id).then(res=>{
      console.log('歌曲评论',res.hotComments)
      setSongComments(res.hotComments)
    }).catch(err=>{
      console.log('获取歌曲评论失败')
    })
  },[id])
  return (
    <SongCommentsWrapper>
      <ThemeHeaderRmc title="热门评论"></ThemeHeaderRmc>
      <div className="comment-list">
        {
         songComments && songComments.map((item,index) => {
            return (
              <div className="comment-item" key={item.commentId}>
                <a href="/abc" className='image'>
                  <img src={getSizeImage(item.user.avatarUrl,50)} alt="" />
                </a>
                <div className='info'>
                  <div className="info-content">
                    <span className='author'>{item.user.nickname}</span>
                    <span>:{item.content}</span>
                  </div>
                  <div className="foot">
                    <div className="time">2021年8月12日</div>
                    <div className='handler'>
                      <span><LikeOutlined style={{fontSize:'15px',color:'#1890FF'}} /> ({item.likedCount})</span>
                      <span className='divider'>|</span>
                      <span>回复</span>
                    </div>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </SongCommentsWrapper>
  )
})
