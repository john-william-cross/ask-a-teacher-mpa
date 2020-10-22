import React from "react";
import Header from "../ui/Header";
import { Link } from "react-router-dom";
import questions from "../../mock-data/questions";
import toDisplayDate from "date-fns/format";

import Answers from "../ui/Answers";
const answers = questions[0].answers;
const createdAtDate = questions[0].createdAt;

export default function Question() {
   return (
      <>
         {" "}
         <Header />
         <div className="container">
            <div className="row no-gutters">
               <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2 col-xl-8 offset-xl-2 mt-9">
                  <div className="col-12">
                     <div className="lead mb-4">
                        <Link to="question">
                           What is the difference between an inference and a
                           prediction?
                        </Link>
                     </div>
                     <p className="text-muted asked-on-answers-num float-left">
                        Asked on {toDisplayDate(createdAtDate, "MMM. d, y")}.
                     </p>
                     <p className="text-muted asked-on-answers-num float-right">
                        {answers.length} answers
                     </p>

                     <Answers />

                     <div className="clearfix mb-7"></div>
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
