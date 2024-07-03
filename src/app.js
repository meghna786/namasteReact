import React from "react";
import ReactDOM from 'react-dom/client';
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Body } from "./components/Body";


let App= ()=>{
      return (
            <div className='app'>
            <Header />
            <Body />
            <Footer />
            </div>
      )
}
let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
