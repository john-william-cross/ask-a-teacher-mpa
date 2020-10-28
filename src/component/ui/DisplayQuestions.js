import React from "react";
import toDisplayDate from "date-fns/format";
import { Link } from "react-router-dom";

export default function DisplayQuestions(props) {
   return (
      <>
         <div key={props.question.id}>
            <div className="lead mt-6 mb-1">
               <Link to="question">{props.question.text}</Link>
            </div>
            <p className="text-muted asked-on-answers-num float-left mb-4">
               Asked on {toDisplayDate(props.question.createdAt, "MMM. d, y")}.
            </p>
            <p className="text-muted asked-on-answers-num float-right">
               {props.question.answers.length} answers
            </p>
            <hr className="mt-8 mb-n3" />

            <div className="clearfix mb-4"></div>
         </div>
      </>
   );
}
