import React from "react";
import Header from "../ui/Header";
import classnames from "classnames";

import { Link } from "react-router-dom";

export default class Login extends React.Component {
   //we can set the state in constructor
   constructor(props) {
      super(props);
      console.log("In a new class component!");
      this.state = {
         emailError: "",
         passwordError: "",
         hasEmailError: false,
      };
   }

   setEmailState(emailInput) {
      const lowerCasedEmailInput = emailInput.toLowerCase();
      console.log(lowerCasedEmailInput);

      // eslint-disable-next-line
      const emailRegex = /@nv.ccsd.net$/;

      if (emailInput === "")
         this.setState({
            emailError: "Please enter your email address.",
            hasEmailError: true,
         });
      else if (emailRegex.test(lowerCasedEmailInput) === false) {
         console.log("not a valid email");
         this.setState({
            emailError: "Please enter a valid email address.",
            hasEmailError: true,
         });
      } else {
         this.setState({ emailError: "", hasEmailError: false });
      }
   }
   setPasswordState(passwordInput) {
      console.log(passwordInput);
   }

   validateUser() {
      const emailInput = document.getElementById("login-email-input").value;
      const passwordInput = document.getElementById("login-password-input")
         .value;
      this.setEmailState(emailInput);
      this.setPasswordState(passwordInput);
   }

   render() {
      return (
         <>
            <div className="container">
               <Header />
               <div className="row">
                  <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2 col-xl-8 offset-xl-2 mt-9">
                     <div className="return-user-sign-in">
                        <h1 className="logo-text-font text-center mb-6">
                           Welcome back!
                        </h1>
                        <p className="mt-2">Email</p>
                        <input
                           id="login-email-input"
                           className={classnames({
                              "form-control": true,
                              "form-control-lg": true,
                              "is-invalid": this.state.emailError,
                           })}
                           type="email"
                        />
                        {this.state.hasEmailError && (
                           <p className="text-danger">
                              {this.state.emailError}
                           </p>
                        )}
                        <p className="mt-2">Password</p>
                        <input
                           id="login-password-input"
                           className="form-control form-control-lg"
                           type="password"
                           placeholder=""
                        />
                        <p
                           className="text-danger"
                           id="return-user-password-error"
                        ></p>
                        {/* <!-- <p id="password-error-message" className="d-none text-danger"></p> --> */}
                        <p className="text-muted">
                           <button
                              to="questions"
                              id="return-user-sign-in-button"
                              className="btn btn-outline-secondary logo-text-font lead sign-in mt-5"
                              onClick={() => {
                                 this.validateUser();
                              }}
                           >
                              Sign in
                           </button>
                        </p>
                        <div className="text-center show-sign-up-info">
                           <p>First time here?</p>
                           <Link to="SignUp">Sign up </Link>
                        </div>{" "}
                     </div>
                  </div>
               </div>
            </div>
         </>
      );
   }
}
