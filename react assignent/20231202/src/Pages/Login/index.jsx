import React, { useState } from "react";
import "./style.css";
import axios from "axios";
import Header from "../../Component/Header";
import Footer from "../../Component/Footer";
import { Navigate, useNavigate } from "react-router-dom";
import Spinner from "../../Component/Spinner";
function Login() {
  const navigate = useNavigate();

  const [formData, setformData] = useState({
    email: "",
    password: "",
  });
  const [userData, setUserData] = useState({});
  const [isLoad, setLoad] = useState(false);

  const handleUsername = (e) => {
    setformData({ ...formData, email: e.target.value });
  };

  const handlePassword = (e) => {
    setformData({ ...formData, password: e.target.value });
  };
  const handleLoginlick = async () => {
    try {
      setLoad(true);
      const api = "https://dummyjson.com/auth/login";

      const response = await axios.post(api, {
        username: "kminchelle",
        password: "0lelplR",
      });
      const { data = {} } = response || {};
      console.log("-data", data);
      console.log("res", response);
      if (response?.status == 200) {
        setUserData(data);
        localStorage.setItem("userdata", JSON.stringify(data));
        setLoad(false);
        navigate("/Home-Page");
      }
    } catch (err) {
      console.log("caught error", err);
      setLoad(false);
    }
  };
  console.log("---fdg", userData);

  return (
    <React.Fragment>
      {isLoad && <Spinner />}
      <Header />

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
              type="text"
              name="userName"
              id="userName"
              value={formData?.email}
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
              value={formData?.password}
              onChange={(event) => handlePassword(event)}
              placeholder="Password"
            />
          </div>
          {console.log("----->", formData?.email, formData?.password)}
          <button
            type="button"
            disabled={
              formData?.email.length < 6 || formData?.password.length < 6
            }
            onClick={handleLoginlick}
            className="btn mt-3"
          >
            Login
          </button>
        </form>
        <div className="text-center fs-6">
          {(formData?.email.length < 6 || formData?.password.length < 6) && (
            <p className="text-center fs-6">
              Please enter a valid{" "}
              {formData?.email.length < 6 ? `email` : `password`}
            </p>
          )}
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}
export default Login;
