import { LOGO } from "../../utils/constants"
import { useState } from "react";
import { Link } from "react-router-dom";

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
                              <li><Link to={'/'}>Home</Link></li>
                              <li><Link to={'/about'}>About</Link></li>
                              <li><Link to={'/contact'}>Contact Us</Link></li>
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