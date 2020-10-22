import toDisplayDate from "date-fns/format";
import React from "react";
import Header from "../ui/Header";
import { Link } from "react-router-dom";
import questions from "../../mock-data/questions";

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

                     {/* map over each question in questions, display it */}

                     {questions.map((question) => {
                        console.log(`here: `, question.createdAt);
                        return (
                           <div key={question.id}>
                              <div className="lead mt-4">
                                 <Link to="question">{question.text}</Link>
                              </div>
                              <p className="text-muted asked-on-answers-num float-left">
                                 Asked on{" "}
                                 {toDisplayDate(
                                    question.createdAt,
                                    "MMM. d, y"
                                 )}
                                 .
                              </p>
                              <p className="text-muted asked-on-answers-num float-right">
                                 {question.answers.length} answers
                              </p>
                              <div className="clearfix mb-4"></div>
                           </div>
                        );
                     })}

                     <div className="clearfix mb-4"></div>

                     <hr className="my-6" />
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}
