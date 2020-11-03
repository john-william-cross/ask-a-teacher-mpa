import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
   return (
      <>
         <div className="footer-solid fixed-bottom">
            <div className="container mb-4 mt-4 mt-sm-4 mt-md-3 mt-lg-2">
               <div className="row">
                  <div className="col-6 my-3">
                     <Link to="/LogIn" className="contact no-underline">
                        Contact
                     </Link>
                  </div>
                  <div className="col-6">
                     <Link
                        to="/LogIn"
                        className="sign-out float-right my-3 no-underline text-right"
                     >
                        Sign out
                     </Link>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}

// all components must render jsx
