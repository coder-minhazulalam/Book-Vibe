import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router/dom'
import { router } from './Routes/Routes'
import BookContextprovider from './BookContextApi/BookContextprovider'
import { ToastContainer } from 'react-toastify'




createRoot(document.getElementById('root')).render(
  <StrictMode>
  <BookContextprovider>
        <RouterProvider router={router}/>
        <ToastContainer />
  </BookContextprovider>
  </StrictMode>,
)
