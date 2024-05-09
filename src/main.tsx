import ReactDOM from 'react-dom/client'
import {RouterProvider,createBrowserRouter,Navigate} from 'react-router-dom'
import RootLayout from './pages/RootLayout'
import RecPage from './pages/RecPage'
import './index.css'


const router =createBrowserRouter([
  {
    path:'/',
    element:<RootLayout/>,
    children:[
      {
        index:true,
        element:<Navigate to='/recommendation' replace/>
      },
      {
        path:'recommendation',
        element:<RecPage/>
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')!).render(
    <RouterProvider router={router}/>


)
