import React, { useState } from "react";
import "./style.css";

function SignUp() {
  const [fName, setName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [Company, setCopmany] = useState("");
  const [isSignClick, setSignClick] = useState(false);
  const handleChangeFirstName = (e) => {
    setName(e.target.value);
  };
  const handleLastName = (e) => {
    setLName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleCompanyName = (e) => {
    setCopmany(e.target.value);
  };
  const handleSignUpClick = () => {
    setSignClick(true);
  };
  return (
    <React.Fragment>
      <div className="main">
        <div className="border">
          <div className="logo-cont">
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
                name="fName"
                value={fName}
                placeholder="First Name"
                onChange={(event) => handleChangeFirstName(event)}
              />

              <label for="last_name">Last Name</label>
              <br />
              <input
                className="inp2"
                id="last_name"
                type="text"
                placeholder="Last Name"
                name="lname"
                value={lName}
                onChange={(event) => handleLastName(event)}
              />
            </div>
            <div className="email-cont">
              <label for="email">Email</label>
              <br />
              <input
                className="inp3"
                id="email"
                type="text"
                value={email}
                name="email"
                placeholder="Email Address"
                onChange={(event) => handleEmail(event)}
              />
            </div>
            <div className="company-cont">
              <label for="company">Company</label>
              <br />
              <input
                className="inp4"
                id="Company"
                type="text"
                name="Company"
                value={Company}
                placeholder="Company"
                onChange={(event) => handleCompanyName(event)}
              />
            </div>
            <p className="line">Add me to your mailing list</p>

            <input className="box" id="btn" type="checkbox" />
            <label for="btn">
              I agree to receive e-mail from your company and your terms and
              conditions
            </label>
            <div className="b">
              <button onClick={handleSignUpClick} className="btn" type="button">
                Sign Me Up
              </button>
            </div>
          </form>
        </div>
        <div className="final-detail">
          <h3>
            First name:
            <strong>{isSignClick ? fName : ""}</strong>
          </h3>
          <h3>
            Last name:<strong>{isSignClick ? lName : ""}</strong>
          </h3>
          <h3>
            Email:<strong>{isSignClick ? email : ""}</strong>
          </h3>
          <h3>
            Company:<strong>{isSignClick ? email : ""}</strong>
          </h3>
        </div>
      </div>
    </React.Fragment>
  );
}

export default SignUp;
