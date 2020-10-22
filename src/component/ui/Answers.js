import React from "react";
import Header from "../ui/Header";
import questions from "../../mock-data/questions";
import toDisplayDate from "date-fns/format";

const answers = questions[0].answers; // map through all answers
// create answers component
// map over all answers on this page
// render an answer component for each answer
const date = answers[0].answeredAt;

export default function Answer() {
   return (
      <>
         {/* <p className="text-muted asked-on-answers-num float-right">
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
         </div> */}
         <div className="clearfix mb-4"></div>
         <div className="answers" style={{ textAlign: "justify" }}>
            {questions[0].answers.map((answer) => {
               return answer.text;
            })}
         </div>
         <div className=" mb-4"></div>
         <div className="answers">
            <p className="mb-4 text-muted">
               This question was answered by a teacher in{" "}
               {answers[0].userHomeState} on {toDisplayDate(date, "MMM. d, y")}.
            </p>
         </div>
      </>
   );
}
