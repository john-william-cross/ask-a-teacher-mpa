import React from "react";
import questions from "../../mock-data/questions";
import toDisplayDate from "date-fns/format";
const question = questions[0];
const answers = question.answers;

export default function Answer() {
   return (
      <>
         <div className="clearfix mb-4"></div>
         <div className="answers" style={{ textAlign: "justify" }}>
            {answers.map((answer) => {
               console.log(answer);
               return (
                  <div className="answers">
                     <p className="mb-4">
                        {answer.text}
                        <span className="text-muted">
                           This question was answered by a teacher in{" "}
                           {answer.userHomeState} on{" "}
                           {toDisplayDate(answer.answeredAt, "MMM. d, y")}.
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
