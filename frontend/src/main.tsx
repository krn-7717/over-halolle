import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider} from 'react-router-dom'
import Router from './Router/Router'
import './index.css'
import { UserProvider } from './providers/UserProvider'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<UserProvider>
			<RouterProvider router={Router} />
    	</UserProvider>
  	</React.StrictMode>,
)
