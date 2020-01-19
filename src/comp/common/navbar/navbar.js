import React, { useState } from "react";
import './navbar.css'
const Navbar = props => {
  const [mNav, setMNav] = useState(false);
  return (
    <React.Fragment>
      <nav>
        <div className="wrapper">
          <div className="nav-content">
            <li className="left logo"><img src="./logo-white.png"/></li>
            <span className="desktop-menu">
              <li className="left active">Market</li>
              <li className="left">Buy/Sell</li>
              <li className="left">Exchange</li>
              <li className="left">Pro</li>
              <li className="right"><span className="profile-img">profile</span></li>
            </span>
            <li
              className={mNav ? "right menu-icon close" : "right menu-icon"}
              onClick={() => setMNav(!mNav)}
            ></li>
          </div>
        </div>
      </nav>
      <span className={mNav ? "mobile-menu active" : "mobile-menu"}>
        <li className="left">Exchange</li>
        <li className="left">Orders</li>
        <li className="left active">Wallet</li>
        <li className="right">Profile</li>
        <li className="right">Support</li>
        <li className="right">Settings</li>
      </span>
    </React.Fragment>
  );
};
export default Navbar;
