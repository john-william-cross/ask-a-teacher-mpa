import React from "react";
import appLogo from "../../icons/white-logo.svg";

export default function Header() {
   return (
      <>
         <div class="header-solid fixed-top">
            <div class="container mb-4 mt-4 mt-sm-4 mt-md-3 mt-lg-2">
               <div class="row">
                  <div class="col-8 col-md-8 col-sm-9">
                     <a class="no-underline" href="index.html">
                        <img class="ml-xs-n8 ml-sm-3 logo" src={appLogo} />
                        <h1 class="logo-text-font d-inline logo-text-size ml-2 mr-5">
                           Ask a Teacher
                        </h1>
                     </a>
                  </div>
                  <div class="col-4 col-sm-3 col-md-4 d-flex">
                     <a
                        href="sign-in-sign-up.html"
                        class="align-self-end offset-4 no-underline text-right answer-question-link"
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
