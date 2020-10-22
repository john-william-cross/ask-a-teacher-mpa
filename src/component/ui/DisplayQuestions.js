import React from "react";
import questions from "../../mock-data/questions";
import toDisplayDate from "date-fns/format";
import { Link } from "react-router-dom";

const question = questions[0];
const answers = question.answers;

export default function DisplayQuestions() {
   return (
      <>
         {questions.map((question) => {
            console.log(`here: `, question.createdAt);
            return (
               <div key={question.id}>
                  <div className="lead mt-6 mb-1">
                     <Link to="question">{question.text}</Link>
                  </div>
                  <p className="text-muted asked-on-answers-num float-left mb-4">
                     Asked on {toDisplayDate(question.createdAt, "MMM. d, y")}.
                  </p>
                  <p className="text-muted asked-on-answers-num float-right">
                     {question.answers.length} answers
                  </p>
                  <hr className="mt-8 mb-n3" />

                  <div className="clearfix mb-4"></div>
               </div>
            );
         })}
      </>
   );
}
