import { createBrowserRouter } from "react-router";
import Roots from "../Components/Roots/Roots";
import Home from "../Components/Paging/Home/Home";
import Books from "../Components/Paging/Books/Books";
import ErrorPage from "../ErrorDetecting/ErrorPage";
import PageToRead from "../Components/Paging/PageToRead/PageToRead";


export const router = createBrowserRouter([
  {
    path : "/",
    Component : Roots,
    children : [
         { index: true, Component: Home },
         {
          path : "/home" , Component : Home
         },
        {
          path : "/books" , Component : Books
         },
         {
          path : "/PageToRead", Component : PageToRead
         }
    ],
    
    errorElement : <ErrorPage/>,


    
  }
  
])
