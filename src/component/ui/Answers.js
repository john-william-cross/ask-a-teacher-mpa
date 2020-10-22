import React from "react";
import Header from "../ui/Header";
import questions from "../../mock-data/questions";
import toDisplayDate from "date-fns/format";

const answers = questions[0].answers; // map through all answers
// create answers component
// map over all answers on this page
// render an answer component for each answer
const answeredAtDate = answers[0].answeredAt;

export default function Answer() {
   return (
      <>
         <div className="clearfix mb-4"></div>
         <div className="answers" style={{ textAlign: "justify" }}>
            {questions[0].answers.map((answer) => {
               return (
                  <div className="answers">
                     <p className="mb-4">
                        {" "}
                        {answer.text}
                        <span className="text-muted">
                           This question was answered by a teacher in{" "}
                           {answers[0].userHomeState} on{" "}
                           {toDisplayDate(answeredAtDate, "MMM. d, y")}.
                        </span>
                     </p>
                  </div>
               );
            })}
         </div>

         <div className=" mb-4"></div>
      </>
   );
}
