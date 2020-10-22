import React from "react";
import Header from "../ui/Header";
import { Link } from "react-router-dom";
import DisplayQuestions from "../ui/DisplayQuestions";

export default function Landing() {
   return (
      <>
         <Header />
         <div className="container">
            <div className="row">
               <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2 col-xl-8 offset-xl-2 mt-xs-5 mt-9">
                  <p
                     className="logo-text-font landing-page-title"
                     style={{ textAlign: "center" }}
                  >
                     Ask a teacher
                  </p>

                  <textarea
                     className="form-control mt-7"
                     id="question-input-home-page"
                     rows="2"
                     autoFocus
                     style={{ width: "100%" }}
                  ></textarea>

                  <div className=" text-center ">
                     <p className="mt-6">Don't see what you're looking for?</p>

                     <Link
                        to="submit-question"
                        className="submit-new-question  mt-1"
                     >
                        Submit a new question
                     </Link>
                  </div>
                  <DisplayQuestions />
               </div>
            </div>
         </div>
      </>
   );
}
