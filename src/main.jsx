import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import LandingPage from './routes/LandingPage'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { Provider } from "react-redux";
import siteStore from './store'
import CreatePage from './routes/CreatePage'
import FaceMatching from './routes/FaceMatching'
import Community from './routes/Community'
import Login from './routes/Login'
import GetNotification from './routes/GetNotification'

const router = createBrowserRouter([{
  path: '/',
  element: <App />,
  children: [
    {
      path: '/',
      element: <LandingPage />
    },
    {
      path: '/create',
      element: <CreatePage />
    },
    {
      path: "/match",
      element: <FaceMatching />
    },
    {
      path: '/community',
      element: <Community />
    },
    {
      path: '/notify',
      element: <GetNotification />
    },
    {
      path: '/login',
      element: <Login />
    }

  ]
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={siteStore}>
      <DndProvider backend={HTML5Backend}>
        <RouterProvider router={router} />
      </DndProvider>
    </Provider>
  </React.StrictMode>,
)
