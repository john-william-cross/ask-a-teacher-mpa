import React from "react";
import Header from "../ui/Header";
import { Link } from "react-router-dom";

export default function Questions() {
   return (
      <>
         <Header />
         <div className="container">
            <div className="row no-gutters">
               <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2 col-xl-8 offset-xl-2 mt-9">
                  <div className="col-12">
                     <h1 className="float-left top-questions">Top Questions</h1>
                     <select className="float-right dropdown col-5 form-control pl-0  form-control-lg">
                        <option value="newest">Newest</option>
                        <option value="unanswered">Unanswered</option>
                        <option value="trending">Trending</option>
                        <option value="answered">Answered</option>
                     </select>

                     <div className="clearfix"></div>

                     <div className="lead mt-4">
                        <Link to="question">
                           What is the difference between an inference and a
                           prediction?
                        </Link>
                     </div>
                     <p className="text-muted asked-on-answers-num float-left">
                        Asked on June 1, 2020
                     </p>
                     <p className="text-muted asked-on-answers-num float-right">
                        5 answers
                     </p>
                     <div className="clearfix mb-4"></div>

                     <hr className="my-6" />
                     <div className="lead">
                        <Link to="/question">
                           What is the area model of multiplication?
                        </Link>
                     </div>

                     <p className="text-muted asked-on-answers-num d-inline">
                        Asked on May 23, 2020
                     </p>
                     <p className="text-muted asked-on-answers-num d-inline float-right">
                        2 answers
                     </p>

                     <div className="clearfix mb-4"></div>

                     <hr className="my-6" />
                     <div className="lead">
                        <Link to="/question">
                           I don’t know anything about common core my child is
                           having trouble with math and I don’t know how he’s
                           supposed to do it he says I’m not showing him the
                           right way please help
                        </Link>
                     </div>

                     <p className="text-muted asked-on-answers-num d-inline">
                        Asked on May 20, 2020
                     </p>
                     <p className="text-muted asked-on-answers-num d-inline float-right">
                        1 answer
                     </p>

                     <div className="clearfix mb-4"></div>

                     <hr className="my-6" />
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}
