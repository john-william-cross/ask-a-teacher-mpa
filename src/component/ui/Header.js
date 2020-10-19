import React from "react";
import appLogo from "../../icons/white-logo.svg";

export default function Header() {
   return (
      <>
         <div className="header-solid fixed-top">
            <div className="container col-11 mb-3 mb-lg-3 mt-4 mt-sm-4 mt-md-3 mt-lg-1">
               <div className="row">
                  <div className="col-8 col-md-8 col-sm-9">
                     <a className="no-underline" href="index.html">
                        <img
                           className="ml-xs-n8 ml-sm-3 logo"
                           src={appLogo}
                           alt="Ask a Teacher Logo"
                        />
                        <h1 className="logo-text-font d-inline logo-text-size ml-2">
                           Ask a Teacher
                        </h1>
                     </a>
                  </div>
                  <div className="col-4 col-sm-3 mb-lg-n1 col-md-4 d-flex">
                     <a
                        href="sign-in-sign-up.html"
                        className="align-self-end offset-3 no-underline text-right answer-question-link"
                     >
                        Answer a question
                     </a>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}
