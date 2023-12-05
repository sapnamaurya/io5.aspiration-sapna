import React from "react";
import "./style.css";
function Header() {
  console.log("Header javascrip here");
  return (
    <React.Fragment>
      <div className="head">
        <ul>
          <li>Bluesky</li>
          <li className="product1">Product</li>
          <li className="product2">Pricing</li>
          <img href="" src="" />
          <li className="product3">Light Mode</li>
        </ul>
      </div>
    </React.Fragment>
  );
}
export default Header;
