import React from "react";
import appLogo from "../../icons/white-logo.svg";

export default function Questions() {
   return (
      <>
         <div className="header-solid fixed-top">
            <div className="container mb-4 mt-4 mt-sm-4 mt-md-3 mt-lg-2">
               <div className="row">
                  <div className="col-8 col-md-8 col-sm-9">
                     <a className="no-underline" href="index.html">
                        <img
                           className="ml-xs-n8 ml-sm-3 logo"
                           src={appLogo}
                           alt="Ask a Teacher Logo"
                        />
                        <h1 className="logo-text-font d-inline logo-text-size ml-2 mr-5">
                           Ask a Teacher
                        </h1>
                     </a>
                  </div>
                  <div className="col-4 col-sm-3 col-md-4 d-flex">
                     <a
                        href="sign-in-sign-up.html"
                        className="align-self-end offset-4 no-underline text-right answer-question-link"
                     >
                        Answer a question
                     </a>
                  </div>
               </div>
            </div>
         </div>
         <div className="container">
            <div className="row no-gutters">
               <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2 col-xl-8 offset-xl-2 mt-9">
                  <div className="col-12">
                     <h1 className="float-left top-questions">Top Questions</h1>
                     <select className="float-right dropdown col-5 form-control form-control-lg">
                        <option value="newest">Newest</option>
                        <option value="unanswered">Unanswered</option>
                        <option value="trending">Trending</option>
                        <option value="answered">Answered</option>
                     </select>

                     <div className="clearfix"></div>

                     <div className="lead mt-4">
                        <a href="question.html">
                           What is the difference between an inference and a
                           prediction?
                        </a>
                     </div>
                     <p className="text-muted float-left">
                        Asked on June 1, 2020
                     </p>
                     <p className="text-muted float-right">5 answers</p>
                     <div className="clearfix mb-4"></div>

                     <hr className="my-6" />
                     <div className="lead">
                        <a href="/question.html">
                           What is the area model of multiplication?
                        </a>
                     </div>

                     <p className="text-muted d-inline">
                        Asked on May 23, 2020
                     </p>
                     <p className="text-muted d-inline float-right">
                        2 answers
                     </p>

                     <div className="clearfix mb-4"></div>

                     <hr className="my-6" />
                     <div className="lead">
                        <a href="/question.html">
                           I don’t know anything about common core my child is
                           having trouble with math and I don’t know how he’s
                           supposed to do it he says I’m not showing him the
                           right way please help
                        </a>
                     </div>

                     <p className="text-muted d-inline">
                        Asked on May 20, 2020
                     </p>
                     <p className="text-muted d-inline float-right">1 answer</p>

                     <div className="clearfix mb-4"></div>

                     <hr className="my-6" />
                  </div>
               </div>
            </div>
         </div>
         );
      </>
   );
}
