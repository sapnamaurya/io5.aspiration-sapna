import React, { useState } from "react";
import "./style.css";

function Login() {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  //   const [isSignClick, setLoginClick] = useState(false);

  const handleUsername = (e) => {
    setUserData({ ...userData, email: e.target.value });
  };

  const handlePassword = (e) => {
    setUserData({ ...userData, password: e.target.value });
  };
  //   const handleLoginlick = () => {
  //     setLoginClick(true);
  //   };
  console.log("email", userData?.email);
  console.log("password", userData?.password);
  return (
    <div className="wrapper">
      <div className="logo">
        <img
          src="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-bird-symbols-png-logo-0.png"
          alt=""
        />
      </div>
      <div className="text-center mt-4 name">Twitter</div>
      <form className="p-3 mt-3">
        <div className="form-field d-flex align-items-center">
          <span className="far fa-user"></span>
          <input
            type="email"
            name="userName"
            id="userName"
            value={userData?.email}
            onChange={(event) => handleUsername(event)}
            placeholder="Username"
          />
        </div>
        <div className="form-field d-flex align-items-center">
          <span className="fas fa-key"></span>
          <input
            type="password"
            name="password"
            id="pwd"
            value={userData?.password}
            onChange={(event) => handlePassword(event)}
            placeholder="Password"
          />
        </div>
        {console.log("----->", userData?.email, userData?.password)}
        {/* <button
          type="button"
          disabled={userData?.email || userData?.password}
          //   onClick={handleLoginlick}
          className="btn mt-3"
        >
          Login
        </button> */}
        <button
          type="button"
          className="button"
          disabled={userData?.email || userData?.password}
        >
          Login
        </button>
      </form>
      <div className="text-center fs-6">
        <a href="#">Forget password?</a> or <a href="#">Sign up</a>
      </div>
    </div>
  );
}
export default Login;
