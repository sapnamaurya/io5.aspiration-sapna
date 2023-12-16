import React from "react";
import "./style.css";
function Login() {
  return (
    <React.Fragment>
      <div className="border">
        <div className="logo-cont">
          <img className="img-cont" src="../20230712 styling/logo.png" />
          <h2>Your Company</h2>
        </div>
        <div className="title">
          <div>
            <p className="content">Sign UP Of Your Newsletter</p>
            <p className="content1">
              Fill out your information below to be signed up for our
              informative newsletter.
            </p>
          </div>
        </div>
        <form>
          <div className="name-cont">
            <label for="first_name">First Name</label>
            <br />
            <input
              className="inp1"
              id="first_name"
              type="text"
              placeholder="First Name"
            />

            <label for="last_name">Last Name</label>
            <br />
            <input
              className="inp2"
              id="last_name"
              type="text"
              placeholder="Last Name"
            />
          </div>
          <div className="email-cont">
            <label for="email">Email</label>
            <br />
            <input
              className="inp3"
              id="email"
              type="text"
              placeholder="Email Address"
            />
          </div>
          <div className="company-cont">
            <label for="company">Company</label>
            <br />
            <input
              className="inp4"
              id="Company"
              type="text"
              placeholder="Company"
            />
          </div>
          <p className="line">Add me to your mailing list</p>

          <input className="box" id="btn" type="checkbox" />
          <label for="btn">
            I agree to receive e-mail from your company and your terms and
            conditions
          </label>
          <button className="btn">Sign Me Up</button>
        </form>
      </div>
    </React.Fragment>
  );
}

export default Login;
