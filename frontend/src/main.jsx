import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Pagina from './pages/CozinhaLogin.jsx'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "login",
    element: <Pagina/>
  },
  
  
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router = {router}/>
)
