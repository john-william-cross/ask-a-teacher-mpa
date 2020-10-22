import React from "react";
import Header from "../ui/Header";
import questions from "../../mock-data/questions";

const answers = questions[0].answers; // map through all answers
// create answers component
// map over all answers on this page
// render an answer component for each answer
const date = answers[0].answeredAt;

export default function Answer() {
   return (
      <>
         <Header />
         <p className="text-muted asked-on-answers-num float-right">
            {answers.length} answers
         </p>
         <div className="clearfix mb-4"></div>
         <div className="answers">
            {
               <>
                  <p className="mb-4">{answers[0].text}</p>
                  <p className="mb-4 text-muted">
                     This question was answered by a teacher in{" "}
                     {answers[0].userHomeState} on {date}.
                  </p>
               </>
            }
         </div>
      </>
   );
}
