import React from 'react'
import { Redirect } from 'react-router-dom'
import Discover from '@/pages/discover'
import Friend from '@/pages/friend'
import Mine from '@/pages/mine'

const routes =[
    {
        path:'/',
        exact:true,
        render:()=>{
            return <Redirect to="/discover"></Redirect>
        }
    },
    {
        path:'/discover',
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