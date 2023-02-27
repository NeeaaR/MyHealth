import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, BrowserRouter } from 'react-router-dom'
import App from './App'
import Login from './components/Auth/Login'
import ErrorPage from './components/Errors/Error-page'
import Register from './components/Auth/Register'
import MiniDrawer from './components/HomePage/Drawer'
import FindDoctors from './components/FindDoctors/FindDoctors'
import FindPharmacy from './components/FindPharmacy/FindPharmacy'
import Profil from './components/Profil/index'
import Doctors from './components/Doctors'
import Users from './components/Users'

// const Router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     errorElement: <ErrorPage />,
//   },
//   {
//     path: "/login",
//     element: <Login />
//   },
//   {
//     path: "/register",
//     element: <Register />
//   },
//   {
//     path: "/drawer",
//     element: <MiniDrawer />
//   },
//   {
//     path: "/find/doctors",
//     element: <FindDoctors/>
//   },
//   {
//     path: "/find/pharmacy",
//     element: <FindPharmacy/>
//   },
//   {
//     path: "/profil/user",
//     element: <Profil/>
//   },
//   {
//     path: "/profil/doctor",
//     element: <Doctors/>
//   },
//   {
//     path: "/users",
//     element: <Users/>
//   }
// ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
