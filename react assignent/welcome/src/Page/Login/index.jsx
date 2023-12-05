import React from "react";
import "./style.css";

function Login() {
  console.log("Login javascrip here");
  return (
    <div className="login-form">
      <div className="img-email-cont">
        <p className="title4">davidjohnson@gmail.com</p>
        <input className="inp1" placeholder="Password" type="Password" />
        <button>Log In</button>
        <p className="passque">I Forget the Password</p>
      </div>
    </div>
  );
}
export default Login;
