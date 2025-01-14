import React from "react";
import qrLogo from "../assets/images.png";
function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand mx-auto">
          <img
            src={qrLogo}
            alt="navbar-logo"
            className="img-fluid"
            height="24"
            width="30"
          />
          <span className="h4 text-light"> Qr Code Generator</span>
        </a>
      </div>
    </nav>
  );
}

export default NavBar;
