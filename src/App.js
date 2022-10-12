import React, { memo } from 'react'
import {renderRoutes} from 'react-router-config'
import { Provider } from 'react-redux'

import { routes } from './router'
import store  from '@/store'

import AppHeader from './components/app-header'
import AppFooter from './components/app-footer'
import { HashRouter } from 'react-router-dom'
import AppPlayerBar from './pages/player/app-player-bar'

const App = memo(() => {
  return (
    <div>
      <Provider store={store}>
        <HashRouter>
        <AppHeader />
          {
            renderRoutes(routes)
          }
        <AppFooter />
        <AppPlayerBar></AppPlayerBar>
        </HashRouter>
      </Provider>
    </div>
  )
})

export default App