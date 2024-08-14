import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/LandingPage";
import main from "../assets/images/main.svg";
import { Logo } from "../components";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Streamline your job search with Jobify, the ultimate platform for
            modern professionals. From personalized job matches to seamless
            application tracking, Jobify empowers you to take control of your
            career journey. Discover opportunities, stay organized, and land
            your next role with ease
          </p>
          <Link to="/register" className="btn register-link">
            Register
          </Link>
          <Link to="/login" className="btn">
            Login / Demo
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
