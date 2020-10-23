import React from "react";
import Header from "../ui/Header";
import classnames from "classnames";

export default class SubmitQuestion extends React.Component {
   //we can set the state in constructor
   constructor(props) {
      super(props);
      this.state = {
         emailError: "",
         passwordError: "",
         hasEmailError: false,
      };
   }

   setEmailState() {
      console.log(`validate me`);
      const emailInput = document.getElementById("questioner-email-input")
         .value;
      console.log(emailInput);
      const lowerCasedEmailInput = emailInput.toLowerCase();
      console.log(lowerCasedEmailInput);

      // eslint-disable-next-line
      const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

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

   render() {
      return (
         <>
            <Header />
            <div className="container">
               <div className="row mt-8 no-gutters">
                  <div className="pressed-submit mt-6 col-12 col-xl-6 offset-xl-3 col-lg-8 offset-lg-2 col-md-10 offset-md-1">
                     <h1 className="lead mb-3 mt-6">What's your question?</h1>
                     <textarea
                        className="form-control form-control-lg mt-5"
                        id="question-input"
                        rows="10"
                        autoFocus
                        style={{ width: "100%" }}
                     ></textarea>
                     <p className="text-muted float-right">
                        <span
                           className="text-danger"
                           id="question-input-char-count"
                        >
                           0
                        </span>
                        /500
                     </p>

                     <p className="lead mt-5">Enter your email</p>

                     <input
                        id="questioner-email-input"
                        className={classnames({
                           "form-control": true,
                           "form-control-lg": true,
                           "is-invalid": this.state.emailError,
                        })}
                        type="email"
                     />
                     {this.state.hasEmailError && (
                        <p className="text-danger">{this.state.emailError}</p>
                     )}

                     <p
                        className="text-danger mb-4"
                        id="questioner-email-error"
                     ></p>

                     <div className="mt-6 text-center col-12 col-xl-6 offset-xl-3 col-lg-8 offset-lg-2 col-md-10 offset-md-1">
                        <input
                           className="logo-text-font submit-question-button btn btn-lg btn-outline-secondary mb-8"
                           id="ask-a-teacher-submit-button"
                           type="submit"
                           // disabled
                           value="Ask a teacher"
                           onClick={() => {
                              this.setEmailState();
                           }}
                        />
                     </div>
                  </div>
               </div>
            </div>
         </>
      );
   }
}
