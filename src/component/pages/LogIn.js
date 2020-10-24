import React from "react";
import Header from "../ui/Header";
import classnames from "classnames";
import hash from "object-hash";
import { v4 as getUuid } from "uuid";
import { Link } from "react-router-dom";
//coinsdf
export default class Login extends React.Component {
   //we can set the state in constructor
   constructor(props) {
      super(props);
      console.log("In a new class component!");
      this.state = {
         emailError: "",
         passwordError: "",
         hasEmailError: false,
         hasPasswordError: false,
      };
   }

   async setEmailState(emailInput) {
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

   checkHasLocalPart(passwordInput, emailInput) {
      const localPart = emailInput.split("@")[0];
      if (localPart === "") return false;
      else if (localPart.length < 4) return false;
      else return passwordInput.includes(localPart);
   }

   async setPasswordState(passwordInput, emailInput) {
      console.log(passwordInput);

      const uniqChars = [...new Set(passwordInput)];
      console.log(uniqChars);

      if (passwordInput === "") {
         this.setState({
            passwordError: "Please create a password.",
            hasPasswordError: true,
         });
      } else if (passwordInput.length < 9) {
         this.setState({
            passwordError: "Your password must be at least 9 characters.",
            hasPasswordError: true,
         });
      } else if (this.checkHasLocalPart(passwordInput, emailInput)) {
         this.setState({
            passwordError:
               "For your safety, your password cannot contain your email address.",
            hasPasswordError: true,
         });
      } else if (uniqChars.length < 3) {
         this.setState({
            passwordError:
               "For your safety, your password must contain at least 3 unique characters.",
            hasPasswordError: true,
         });
      } else {
         this.setState({ passwordError: "", hasPasswordError: false });
      }
   }

   async validateUser() {
      const emailInput = document.getElementById("login-email-input").value;
      const passwordInput = document.getElementById("login-password-input")
         .value;
      await this.setEmailState(emailInput);
      await this.setPasswordState(passwordInput, emailInput);
      if (
         this.state.hasEmailError === false &&
         this.state.hasPasswordError === false
      ) {
         const user = {
            id: getUuid(),
            email: emailInput,
            password: hash(passwordInput),
            createdAt: Date.now(),
         };
         console.log(user);
      }
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
                           className={classnames({
                              "form-control": true,
                              "form-control-lg": true,
                              "is-invalid": this.state.hasPasswordError,
                           })}
                           type="password"
                        />
                        {this.state.hasPasswordError && (
                           <p className="text-danger">
                              {this.state.passwordError}
                           </p>
                        )}
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
