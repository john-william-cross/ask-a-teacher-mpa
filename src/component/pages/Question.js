import React from "react";
import Header from "../ui/Header";
import { Link } from "react-router-dom";

export default function Question() {
   return (
      <>
         {" "}
         <Header />
         <div className="container">
            <div className="row no-gutters">
               <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2 col-xl-8 offset-xl-2 mt-9">
                  <div className="row no-gutters">
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
                           5 answers
                        </p>
                        <div className="clearfix mb-4"></div>
                        <div class="answer">
                           <p className=" mb-4">
                              A prediction is an educated guess, based on
                              information you already have, about what you think
                              will happen in the future. An inference is a
                              conclusion you draw, based on information you
                              already have, about what is happening NOW.
                           </p>

                           <p className="mb-4">
                              Here’s some examples: The sky is quickly
                              darkening, with swirling clouds and strong winds.
                              You see lightning and hear thunder in the
                              distance. Based on that information, you can
                              predict that it is going to rain. Meanwhile, a
                              family member is asleep inside your house. It
                              rains, and they sleep through the entire storm.
                              They wake up and look outside. There are puddles
                              everywhere and everything is wet. From that
                              information, they can infer that it rained.
                           </p>

                           <p className="mb-4">
                              Here are some more inferences and predictions: A
                              little kid’s bedroom has pink walls, pink carpet,
                              a pink bedspread, and pink picture frames on the
                              walls. From this information, you can infer that
                              the kid likes the color pink.
                           </p>

                           <p className="mb-4">
                              You wake up with a stuffed nose and a sore throat.
                              You sneeze all day. You might infer that you have
                              a cold. Your birthday party is tomorrow. You’ve
                              been asking for a bike. As you open up presents,
                              the first gift you open up is a bike helmet. You
                              can predict that one of your gifts will also be a
                              bike.
                           </p>

                           <p className="text-muted mb-4">
                              This question was answered by a teacher in
                              Minnesota on September 4, 2020.
                           </p>

                           <hr className="my-6" />
                           <p className="mb-4">
                              Predictions are guesses about the future based on
                              current evidence. Inferences are conclusions drawn
                              about the current time. Think of a detective. A
                              detective looks at clues and makes an inference
                              about what might have happened at a crime scene.
                              The detective infers what happened at the crime
                              scene, meaning she used clues to guess what
                              already happened.
                           </p>

                           <p className="text-muted mb-4">
                              This question was answered by a teacher in New
                              York on May 2, 1984.
                           </p>

                           <hr className="my-6" />
                           <p className="mb-4">
                              Predictions and inferences are basically the same
                              thing
                           </p>

                           <p className="text-muted mb-4">
                              This question was answered by a teacher in
                              Minnesota on January 1, 2000.
                           </p>

                           <hr className="my-6" />
                           <p className="mb-4">
                              A prediction is a guess about what will happen in
                              the future. An inference is a conclusion made
                              based on evidence.
                           </p>

                           <p className="text-muted mb-4">
                              This question was answered by a teacher in Nevada
                              on December 25, 1901.
                           </p>

                           <hr className="my-6" />

                           <div className="mb-3">
                              <Link to="http://wpsu.org/games/wpsuGames_DetectivesNotebook/index.html">
                                 Here
                              </Link>{" "}
                              is a great game that teaches the difference!
                           </div>

                           <p className="text-muted mb-4">
                              This question was answered by a teacher in Nevada
                              on October 13, 2019.
                           </p>
                        </div>

                        <hr className="my-6" />

                        <p className="lead mt-1">Your answer</p>
                        <textarea
                           className="form-control form-control-lg"
                           id="answer-input"
                           rows="10"
                           style={{ width: "100%" }}
                        ></textarea>

                        <p class="float-right lead mt-0 text-muted">
                           <span
                              class="text-danger"
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

                     {/* 
                     <p className="text-muted float-right">
                        <span
                           className="text-danger"
                           id="question-input-char-count"
                        >
                           0
                        </span>
                        /500
                     </p> */}
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}
