import React from "react";
import Header from "../ui/Header";
import { Link } from "react-router-dom";

export default class Login extends React.Component {
   //we can set the state in constructor
   constructor(props) {
      super(props);
      console.log("In a new class component!");
      this.state = {
         isDisplayingInputs: false,
         emailError: "",
         passwordError: "",
         hasEmailError: false,
      };
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
                           id="return-user-email-input"
                           className="form-control form-control-lg"
                           type="text"
                           placeholder=""
                        />
                        <p
                           id="return-user-email-error"
                           className="text-danger"
                        ></p>
                        <p className="mt-2">Password</p>
                        <input
                           id="return-user-password-input"
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
                           <Link
                              to="/questions"
                              id="return-user-sign-in-button"
                              className="btn btn-outline-secondary logo-text-font lead sign-in mt-5"
                           >
                              Sign in
                           </Link>
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
