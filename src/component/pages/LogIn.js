import React from "react";
import Header from "../ui/Header";
import classnames from "classnames";
import hash from "object-hash";
import { v4 as getUuid } from "uuid";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import actions from "../../store/actions";
import axios from "axios";

class LogIn extends React.Component {
   //we can set the state in constructor
   constructor(props) {
      super(props);
      axios
         .get(
            "https://raw.githubusercontent.com/john-william-cross/ask-a-teacher-mpa/master/src/mock-data/users.json"
         )
         .then(function (res) {
            // handle success
            console.log(res);
            props.dispatch({
               type: actions.STORE_CURRENT_USER,
               payload: res.data,
            });
            //props.dispatch() dispatches an action
         })
         .catch(function (error) {
            // handle error
            console.log(error);
         });
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

   async setPasswordState(passwordInput) {
      console.log(passwordInput);

      if (passwordInput === "") {
         this.setState({
            passwordError: "Please enter your password.",
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
         this.props.history.push("/questions");
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

// export default withRouter(LogIn);

function mapStateToProps() {
   //return whatever we wanted to pass from the global state
   //into the properties
   // return {currentUser: };
   // wouldn't I need index of currentUser? That's not one of your reducers. If not, why not?
}

export default connect(mapStateToProps)(LogIn);
