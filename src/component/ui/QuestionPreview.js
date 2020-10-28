import React from "react";
import toDisplayDate from "date-fns/format";
import { Link } from "react-router-dom";

export default function QuestionPreviews(props) {
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
            <div className="clearfix"></div>

            <hr className="mt-5" />

            <div className="clearfix mb-4"></div>
         </div>
      </>
   );
}
