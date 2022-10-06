import React, { memo, useEffect } from 'react'
import { connect, shallowEqual, useDispatch, useSelector} from 'react-redux'
import { getTopBannersAction } from './store/actioncreator'

const Recommend = (props) => {
  const dispatch = useDispatch()
  const {topBanners} = useSelector(state => ({
    topBanners:state.recommend.topBanners
  }),shallowEqual)

  useEffect(()=>{
    dispatch(getTopBannersAction())
  },[dispatch])

  return (
    <div>Recommend:{topBanners.length}</div>
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