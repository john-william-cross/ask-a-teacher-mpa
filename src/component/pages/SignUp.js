import React from "react";
import Header from "../ui/Header";
import classnames from "classnames";
import { Link } from "react-router-dom";

//functions go in react classes
export default class SignUp extends React.Component {
   //we can set the state in constructor
   constructor(props) {
      super(props);
      this.state = {
         emailError: "",
         passwordError: "",
         hasEmailError: false,
      };
   }

   validateAndCreateUser() {
      console.log(`validate me`);
      const emailInput = document.getElementById("email-input").value;
      console.log(emailInput);
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

   render() {
      return (
         <>
            <Header />
            <div className="container">
               <div className="row">
                  <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2 col-xl-8 offset-xl-2 mt-9">
                     <div className="email-and-create-password ">
                        <h1 className="text-center logo-text-font mb-6">
                           Thanks for joining us!
                        </h1>
                        <p className="mt-2">Where do you teach?</p>

                        <select className="col-5 form-control form-control-lg mb-5 mt-3">
                           <option value="AL">Alabama</option>
                           <option value="AK">Alaska</option>
                           <option value="AZ">Arizona</option>
                           <option value="AR">Arkansas</option>
                           <option value="CA">California</option>
                           <option value="CO">Colorado</option>
                           <option value="CT">Connecticut</option>
                           <option value="DE">Delaware</option>
                           <option value="DC">District Of Columbia</option>
                           <option value="FL">Florida</option>
                           <option value="GA">Georgia</option>
                           <option value="HI">Hawaii</option>
                           <option value="ID">Idaho</option>
                           <option value="IL">Illinois</option>
                           <option value="IN">Indiana</option>
                           <option value="IA">Iowa</option>
                           <option value="KS">Kansas</option>
                           <option value="KY">Kentucky</option>
                           <option value="LA">Louisiana</option>
                           <option value="ME">Maine</option>
                           <option value="MD">Maryland</option>
                           <option value="MA">Massachusetts</option>
                           <option value="MI">Michigan</option>
                           <option value="MN">Minnesota</option>
                           <option value="MS">Mississippi</option>
                           <option value="MO">Missouri</option>
                           <option value="MT">Montana</option>
                           <option value="NE">Nebraska</option>
                           <option value="NV">Nevada</option>
                           <option value="NH">New Hampshire</option>
                           <option value="NJ">New Jersey</option>
                           <option value="NM">New Mexico</option>
                           <option value="NY">New York</option>
                           <option value="NC">North Carolina</option>
                           <option value="ND">North Dakota</option>
                           <option value="OH">Ohio</option>
                           <option value="OK">Oklahoma</option>
                           <option value="OR">Oregon</option>
                           <option value="PA">Pennsylvania</option>
                           <option value="RI">Rhode Island</option>
                           <option value="SC">South Carolina</option>
                           <option value="SD">South Dakota</option>
                           <option value="TN">Tennessee</option>
                           <option value="TX">Texas</option>
                           <option value="UT">Utah</option>
                           <option value="VT">Vermont</option>
                           <option value="VA">Virginia</option>
                           <option value="WA">Washington</option>
                           <option value="WV">West Virginia</option>
                           <option value="WI">Wisconsin</option>
                           <option value="WY">Wyoming</option>
                        </select>

                        <p className="mt-2">Enter your CCSD email</p>
                        {this.state && (
                           <>
                              <input
                                 id="email-input"
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
                              <p className="mt-5">Create a password</p>
                              <p className="text-muted line-height-0">
                                 Password must be at least 9 characters
                              </p>

                              <input
                                 className="form-control form-control-lg"
                                 id="sign-up-password-input"
                                 type="password"
                                 placeholder=""
                              />
                              <p
                                 className="text-danger"
                                 id="sign-up-password-error"
                              ></p>

                              <button
                                 to="questions"
                                 id="lets-go-button"
                                 className="btn btn-outline-secondary logo-text-font lead sign-in mt-5 mb-9"
                                 onClick={() => {
                                    this.validateAndCreateUser();
                                 }}
                              >
                                 Let's go!
                              </button>
                           </>
                        )}
                     </div>
                  </div>
               </div>
            </div>
         </>
      );
   }
}
