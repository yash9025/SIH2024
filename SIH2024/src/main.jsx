import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {Route, RouterProvider,createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import Contact  from './components/Contact/Contact.jsx'
import About from './components/About/About.jsx'
import User from './components/User/User.jsx'
import Benefits from './components/Benefits/Benefits.jsx'



 
//First method
// //const router = createBrowserRouter([{ //Router pura web route control ho raha hai
//   path: '/',
//   element: <Layout/>,
//   children: [
//     {
//       path : "",
//       element: <Home />
//     },
//     {
//       path : "About",
//       element: <About />
//     },
//     {
//       path : "Contact",
//       element: <Contact />
//     }
//   ]
// //}])

//Second method
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='user/:userid' element={<User />} />

      <Route path='benefits' element={<Benefits />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} /> 
  </StrictMode>,
)
