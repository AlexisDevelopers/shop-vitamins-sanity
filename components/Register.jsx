import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Register = () => {
  return (
    <>
        <Navbar />
        <div className="container-register">
            <div className="wrapper-register">
                <h1 className="title-register">CREATE AN ACCOUNT</h1>
                <form className="form-register-register">
                <input className="input-register" placeholder="name" />
                <input className="input-register" placeholder="last name" />
                <input className="input-register" placeholder="username" />
                <input className="input-register" placeholder="email" />
                <input className="input-register" placeholder="password" />
                <input className="input-register" placeholder="confirm password" />
                <p className="agreement-register">
                    By creating an account, I consent to the processing of my personal
                    data in accordance with the <b>PRIVACY POLICY</b>
                </p>
                <button className="btn-register">CREATE</button>
                </form>
            </div>
        </div>
        <Footer />
    </>
  );
};

export default Register;
