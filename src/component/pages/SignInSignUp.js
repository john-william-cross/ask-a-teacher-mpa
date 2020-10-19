import React from "react";
import Header from "../ui/Header";

export default function SignInSignUp() {
   return (
      <>
         <Header />
         <div className="container">
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
                        <a
                           id="return-user-sign-in-button"
                           className="btn btn-outline-secondary logo-text-font lead sign-in mt-5"
                        >
                           Sign in
                        </a>
                     </p>
                  </div>

                  <div className="text-center show-sign-up-info mt-6">
                     <p>First time here?</p>
                     <a className="sign-in sign-up-prompt"> Sign up </a>
                  </div>
                  <div className="email-and-create-password d-none">
                     <h1 className="text-center logo-text-font mb-6">
                        Thanks for joining us!
                     </h1>
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

                     <a
                        id="lets-go-button"
                        className="btn btn-outline-secondary logo-text-font lead sign-in mt-5 mb-9"
                     >
                        Let's go!
                     </a>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}
