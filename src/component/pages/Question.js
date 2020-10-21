import React from "react";
import Header from "../ui/Header";
import { Link } from "react-router-dom";
import questions from "../../mock-data/questions";
const answers = questions[0].answers; // map through all answers
// create answers component
// map over all answers on this page
// render an answer component for each answer
const date = answers[0].answeredAt;

export default function Question() {
   return (
      <>
         {" "}
         <Header />
         <div className="container">
            <div className="row no-gutters">
               <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2 col-xl-8 offset-xl-2 mt-9">
                  {/* <div className="row no-gutters"> */}
                  <div className="col-12">
                     <div className="lead">
                        <Link to="question">
                           What is the difference between an inference and a
                           prediction?
                        </Link>
                     </div>
                     <p className="text-muted asked-on-answers-num float-left">
                        Asked on June 1, 2020
                     </p>
                     <p className="text-muted asked-on-answers-num float-right">
                        {answers.length} answers
                     </p>
                     <div className="clearfix mb-4"></div>
                     <div className="answers">
                        {
                           <>
                              <p className="mb-4">
                                 {answers[0].text}

                                 {/* <span className="text-muted">
                                       This question was answered by a teacher
                                       in {answers[0].userHomeState} on {date}.
                                    </span> */}
                              </p>

                              <p className="mb-4 text-muted">
                                 This question was answered by a teacher in{" "}
                                 {answers[0].userHomeState} on {date}.
                              </p>
                           </>
                        }
                     </div>

                     <hr className="my-6" />

                     <p className="lead mt-1">Your answer</p>
                     <textarea
                        className="form-control form-control-lg"
                        id="answer-input"
                        rows="10"
                        style={{ width: "100%" }}
                     ></textarea>

                     <p className="float-right lead mt-0 text-muted">
                        <span
                           className="text-danger"
                           id="answer-input-char-count"
                        >
                           0
                        </span>
                        /2000
                     </p>

                     <button
                        className="mt-5 mb-8 submit-answer-button logo-text-font btn btn-lg btn-outline-primary"
                        id="submit-answer"
                        // disabled
                        type="submit"
                        value="Submit answer"
                     >
                        Submit answer
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}
