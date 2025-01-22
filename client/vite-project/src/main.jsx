import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Router } from 'react-router'
import route from './Routes/Index.jsx'
import { RouterProvider } from 'react-router'
createRoot(document.getElementById('root')).render(

  <RouterProvider router={route}/>

)
