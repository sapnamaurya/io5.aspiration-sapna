import React from "react";
import "./style.css";
import image from "../Assests/Images/sapna1.jpeg";
function AboutPage() {
  return (
    <React.Fragment>
      <div className=" background">
        <h1 className="h1-0">Sapna Maurya</h1>
        <h1 className="h1-01">Web Developer</h1>
        <div className="inner-portion-1">
          <img className="image" src={image} alt="image" />
          <h1 className="h12">Contact</h1>
          <ul>
            <li> +91 9056860790</li>
            <li>sapnamaurya336@gmail.com</li>
            <li>https://github.com/sapnamaurya</li>S
            <li>https://www.linkedin.com/in</li>
          </ul>
          <h1 className="h11">Language</h1>
          <ul className="ul">
            <li>C language</li>
            <li>C++ language</li>
            <li>Javascript</li>
            <li>React</li>
          </ul>
          <h1 className="h1-1">Framework</h1>
          <ul className="ul-1">
            <li>Bootstrap</li>
          </ul>
        </div>
        <div className="inner-portion-2">
          <h1 className="h1-2">About</h1>
          <p className="para">
            Let me introduce myself,I am a Frontend Developer in Html
            ,CSS,Bootstrap ,Having 6 month of Experience Freelancing (Training)
            and also known about C and C++language.
          </p>
          <h1 className="h1-3">Project - Frontened</h1>
          <ul className="ul-2">
            <li>Solar System </li>
            <li>car animation </li>
            <li> guidely webpage </li>
            <li> passport form </li>
            <li> Cartoons </li>
            <li> Youtube Page </li>
          </ul>
          <h1 className="h1-4">Certificates</h1>
          <ul className="ul-3">
            <li>Basic of Python Certificate</li>
            <li> Python foundation certificate</li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
}
export default AboutPage;
