import React from "react";
import ReactDOM from 'react-dom/client';
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Body } from "./components/Body";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";


let App= ()=>{
      return (
            <div className='app'>
            <Header />
            <Body />
            <Footer />
            </div>
      )
}

let appRouter= createBrowserRouter([
      {
            path:'/',
            element:<App />,
            errorElement:<Error />
      },
      {
            path:'/about',
            element:<About />
      }
])


let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}><App /></RouterProvider>);
