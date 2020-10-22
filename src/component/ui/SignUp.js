import React from "react";
import { Link } from "react-router-dom";

export default function SignUp() {
   return (
      <>
         <div className="container">
            <div className="row">
               <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2 col-xl-8 offset-xl-2 mt-9">
                  <div className="text-center show-sign-up-info mt-6">
                     <p>First time here?</p>
                     <Link to="#" className="sign-in sign-up-prompt">
                        {" "}
                        Sign up{" "}
                     </Link>
                  </div>
                  <div className="email-and-create-password ">
                     <h1 className="text-center logo-text-font mb-6">
                        Thanks for joining us!
                     </h1>
                     <p class="mt-2">Where do you teach?</p>

                     <select class="col-5 form-control form-control-lg mb-5 mt-3">
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
                     <input
                        id="sign-up-email-input"
                        className="form-control form-control-lg"
                        type="text"
                     />
                     <p
                        className="text-danger mb-4"
                        id="sign-up-email-error"
                     ></p>
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
                     <p className="text-danger" id="sign-up-password-error"></p>

                     <Link
                        to="/questions"
                        id="lets-go-button"
                        className="btn btn-outline-secondary logo-text-font lead sign-in mt-5 mb-9"
                     >
                        Let's go!
                     </Link>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}
