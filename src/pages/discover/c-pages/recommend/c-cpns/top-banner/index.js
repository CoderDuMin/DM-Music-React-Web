import React, { memo,useState ,useRef,useEffect,useCallback } from 'react'
import { shallowEqual,useSelector,useDispatch } from 'react-redux';

import { getTopBannersAction } from '../../store/actioncreator'

import { Carousel } from 'antd';
import { BannerWrapper,BannerControl,BannerLeft,BannerRight } from './style'

export default memo(function Banner(props) {

  // state
  const [currentIndex,setCurrentIndex] = useState(0)
  // 组件和redux关联: 获取数据和进行操作
  const {topBanners} = useSelector(state => ({
    topBanners:state.getIn(['recommend','topBanners'])
  }),shallowEqual)
  const dispatch = useDispatch()

  // 其他hooks
  useEffect(()=>{
    dispatch(getTopBannersAction())
  },[dispatch])

  const carouselRef = useRef()

  const indexChange = useCallback((from,to)=>{
    setCurrentIndex(to)
  },[])
  
  // 其他业务逻辑
  const bgImage = topBanners[currentIndex] && (topBanners[currentIndex].imageUrl+"?imageView&blur=40x20")

  // jsx代码
  return (
    <BannerWrapper bgImage={bgImage}>
      <div className='banner wrap-v2'>
        <BannerLeft>
          <Carousel effect="fade" ref={carouselRef} autoplay beforeChange={indexChange}>
            {
              topBanners.map(item=>{
                return(
                  <div className='banner-item' key={item.imageUrl}>
                    <img className='image' src={item.imageUrl} alt={item.typeTitle} ></img>
                  </div>
                )
              })
            }
          </Carousel>
        </BannerLeft>
        <BannerRight></BannerRight>
        <BannerControl>
          <button className="btn left" onClick={e => carouselRef.current.prev()}></button>
          <button className="btn right" onClick={e => carouselRef.current.next()}></button>
        </BannerControl>
      </div>
    </BannerWrapper>
  )
})
