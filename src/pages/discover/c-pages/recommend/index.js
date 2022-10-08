import React, { memo } from 'react'
import { RecommendWrapper } from './style'
import Banner from './c-cpns/top-banner'

const Recommend = (props) => {
  
  return (
    <RecommendWrapper>
      <Banner/>
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