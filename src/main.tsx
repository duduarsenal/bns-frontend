import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './pages/Login/index.tsx'
import Moradores from './pages/Moradores/index.tsx'
import Encomendas from './pages/Encomendas/index.tsx'
import Funcionarios from './pages/Funcionarios/index.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Login />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/moradores",
        element: <Moradores />
      },
      {
        path: "/encomendas",
        element: <Encomendas />
      },
      {
        path: "/funcionarios",
        element: <Funcionarios />
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
