import React, { lazy, Suspense } from "react";
import ReactDOM from 'react-dom/client';
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Body } from "./components/Body";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Error from "./components/Error";
import ContactUs from "./components/ContactUs";
import RestaurantDetail from "./components/RestaurantDetail";

const About= lazy(()=>import("./components/About"))


let App= ()=>{
      return (
            <div className='app'>
            <Header />
            <Outlet />
            <Footer />
            </div>
      )
}

let appRouter= createBrowserRouter([
      {
            path:'/',
            element:<App />,
            children:[
            {
                  path:'/',
                  element:<Body />
                  
            },
            {
                  path:'/about',
                  element:<Suspense fallback={<h1>Loading...</h1>}><About /></Suspense>
                  
            },
            {
                  path:'/contact',
                  element:<ContactUs />
            },
            {
                  path:'/restaurants/:id',
                  element:<RestaurantDetail />
            },
      ],
            errorElement:<Error />
      }
])


let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}><App /></RouterProvider>);

