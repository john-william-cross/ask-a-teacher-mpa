import React from "react";
import Header from "../ui/Header";
import { Link } from "react-router-dom";

export default function Landing() {
   return (
      <>
         <Header />
         <div className="container">
            <div className="row">
               <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2 col-xl-8 offset-xl-2 mt-xs-5 mt-9">
                  <p
                     className="lead logo-text-font"
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

                  <div className="submit-new-question text-center d-none">
                     <p className="mt-3">Don't see what you're looking for?</p>

                     <Link
                        to="submit-question"
                        className="submit-new-question d-none mt-1"
                     >
                        Submit a new question
                     </Link>
                  </div>
               </div>
            </div>
            <div className="row d-none home-page-question">
               <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2 col-xl-8 offset-xl-2 mt-6">
                  <p className="lead">
                     <Link to="question">
                        What is the difference between an inference and a
                        prediction?
                     </Link>
                  </p>

                  <p className="text-muted float-left">Asked on June 1, 2020</p>
                  <p className="text-muted float-right">5 answers</p>
                  <div className="clearfix"></div>

                  <hr className="my-6" />

                  <p className="lead">
                     <Link to="question">
                        What is the area model of multiplication?
                     </Link>
                  </p>

                  <p className="text-muted float-left">Asked on May 23, 2020</p>
                  <p className="text-muted float-right">2 answers</p>
                  <div className="clearfix"></div>
                  <hr className="my-6" />

                  <p className="lead">
                     <Link to="question">
                        I don’t know anything about common core my child is
                        having trouble with math and I don’t know how he’s
                        supposed to do it he says I’m not showing him the right
                        way please help
                     </Link>
                  </p>

                  <p className="text-muted float-left">Asked on May 20, 2020</p>
                  <p className="text-muted float-right">1 answer</p>
                  <div className="clearfix"></div>
                  <hr className="my-6" />
               </div>
            </div>
         </div>
      </>
   );
}
