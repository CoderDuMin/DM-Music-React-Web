import React, { memo } from 'react'
import {renderRoutes} from 'react-router-config'

import { routes } from './router'

import AppHeader from './components/app-header'
import AppFooter from './components/app-footer'
import { HashRouter } from 'react-router-dom'

const App = memo(() => {
  return (
    <div>
      <HashRouter>
      <AppHeader />
        {
          renderRoutes(routes)
        }
      <AppFooter />
      </HashRouter>
      
    </div>
  )
})

export default App