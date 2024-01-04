import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/App'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import LandingPage from './routes/LandingPage'
import Mainpage from './routes/Mainpage'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { Provider } from "react-redux";
import siteStore from './store'

const router=createBrowserRouter([{
  path:'/',
  element:<App />,
  children:[
    {
      path:'/',
      element:<LandingPage />
    },
    {
      path: '/main',
      element: <Mainpage/>
    },
    {
      path: '/community',
      element: <Mainpage />
    },

  ]
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={siteStore}>
      <DndProvider backend={HTML5Backend}>
        <RouterProvider router={router}/>
      </DndProvider>
    </Provider>
  </React.StrictMode>,
)
