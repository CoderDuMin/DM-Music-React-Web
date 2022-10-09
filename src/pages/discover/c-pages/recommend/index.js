import React, { memo } from 'react'

import { 
  RecommendWrapper,
  Content,
  RecommendLeft,
  RecommendRight
 } from './style'
import Banner from './c-cpns/top-banner'
import HotRecommend from './c-cpns/hot-recommend'
import NewAlbum from './c-cpns/new-album'
import RecommendRanking from './c-cpns/recommend-ranking'

const Recommend = (props) => {
  
  return (
    <RecommendWrapper>
      <Banner/>
      <Content className='wrap-v2'>
        <RecommendLeft>
          <HotRecommend></HotRecommend>
          <NewAlbum></NewAlbum>
          <RecommendRanking></RecommendRanking>
        </RecommendLeft>
        <RecommendRight>

        </RecommendRight>
      </Content>
    </RecommendWrapper>
  )
}


export default memo(Recommend)

// const Recommend = (props) => {
//   const {getBanners} = props
//   useEffect(()=>{
//     getBanners()
//   },[getBanners])
//   return (
//     <div>Recommend</div>
//   )
// }
// const mapStateToProps = (state) => ({
//   topBanners:state.recommend.topBanners
// })
// const mapDispatchToProps = (dispatch) => ({
//   getBanners:()=>{
//     dispatch(getTopBannersAction())
//   }
// })



// export default connect(mapStateToProps,mapDispatchToProps)(memo(Recommend))