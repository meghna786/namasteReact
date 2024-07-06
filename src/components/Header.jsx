import { LOGO } from "../../utils/constants"
import { useState, useEffect } from "react";

export const Header= ()=>{
      const [btnName, setBtnName]=useState('Login');
      return (
            <div className="header">
                        <img 
                        src={LOGO}
                        alt='food-logo'
                        className="logo"
                        />
                  <div className="nav-items">
                        <ul>
                              <li>Home</li>
                              <li>About</li>
                              <li>Contact us</li>
                              <li>Cart</li>
                              <button  onClick={()=>{
                                    if(btnName.toLowerCase()==='login') setBtnName('Logout')
                                    else setBtnName('LogIn')
                              }}>{btnName}</button>
                        </ul>
                  </div>

            </div>
      )
}