import React, { memo,useEffect } from 'react'
import { shallowEqual,useDispatch,useSelector } from 'react-redux'
import ThemeHeaderRmc from '../../../../components/theme-header-rcm'
import { getSongCommentsAction } from '../../store/actionCreator'
import { SongCommentsWrapper } from './style'
import { getSizeImage } from '@/utils/format-utils'
import { LikeOutlined } from '@ant-design/icons'

export default memo(function SongComments(props) {
    const id = props?.match?.params?.id || undefined
   // redux hook
   const dispatch = useDispatch()
   const {songComments} = useSelector(state => ({
    songComments:state.getIn(['player','songComments'])
   }),shallowEqual)
   // other hook
   useEffect(()=>{
     dispatch(getSongCommentsAction(id))
   },[dispatch,id])
   console.log('songComments',songComments)
  return (
    <SongCommentsWrapper>
      <ThemeHeaderRmc title="热门评论"></ThemeHeaderRmc>
      <div className="comment-list">
        {
          songComments.map((item,index) => {
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
