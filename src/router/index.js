import Discover from '@/pages/discover'
import Friend from '../pages/friend'
import Mine from '../pages/mine'

const routes =[
    {
        path:'/',
        exact:true,
        component: Discover
    },
    {
        path:'/friends',
        component: Friend
    },
    {
        path:'/mine',
        component: Mine
    }
]

export {
    routes
}