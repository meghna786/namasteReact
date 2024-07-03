import { LOGO } from "../../utils/constants"

export const Header= ()=>{
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
                        </ul>
                  </div>

            </div>
      )
}