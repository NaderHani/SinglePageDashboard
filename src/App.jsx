import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { RouterProvider , createBrowserRouter } from 'react-router-dom'
import UserLayout from './layout/UserLayout'
import { Home } from 'lucide-react'
import Dashboard from './page/Dashborad/Dashboard'
export default function App() {
   let routes = createBrowserRouter([
    {path:  "" , element :<UserLayout/>, children:[
      {index: true , element:<Dashboard/>}
    ]}
   ])
  
  return (
    <>
      <RouterProvider router={routes}/>
    </>
  )
}
