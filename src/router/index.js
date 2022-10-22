import React from 'react'
import { Redirect } from 'react-router-dom'
import Discover from '@/pages/discover'
import Friend from '@/pages/friend'
import Mine from '@/pages/mine'
import DMRecommend from '@/pages/discover/c-pages/recommend'
import DMRanking from '@/pages/discover/c-pages/ranking'
import DMSongs from '@/pages/discover/c-pages/songs'
import DMDjRadio from '../pages/discover/c-pages/djradio'
import DMArtist from '../pages/discover/c-pages/artist'
import DMAlbum from '../pages/discover/c-pages/album'
import SongDetail from '@/pages/player'
import SearchPage from '@/pages/search'

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
        component: Discover,
        routes: [
            {
              path: "/discover",
              exact: true,
              render: () => (
                <Redirect to="/discover/recommend"/>
              )
            },
            {
              path: "/discover/recommend",
              component: DMRecommend
            },
            {
              path: "/discover/ranking",
              component: DMRanking
            },
            {
              path: "/discover/songs",
              component: DMSongs
            },
            {
              path: "/discover/djradio",
              exact: true,
              component: DMDjRadio
            },
            {
              path: "/discover/artist",
              component: DMArtist
            },
            {
              path: "/discover/album",
              component: DMAlbum
            },
            {
              path: "/discover/songDetail/:id",
              component: SongDetail
            },
          ]
    },
    {
        path:'/friend',
        component: Friend
    },
    {
        path:'/mine',
        component: Mine
    },
    {
      path:'/search',
      component: SearchPage
    }
]

export {
    routes
}