import React from "react";
import toDisplayDate from "date-fns/format";
import { Link } from "react-router-dom";
import { storeAnswerableQuestion } from "../../utils/helpers";

export default function QuestionPreviews(props) {
   return (
      <>
         <div key={props.question.id}>
            <div className="lead mt-6 mb-1">
               <Link
                  to="question"
                  onClick={() => {
                     storeAnswerableQuestion(props.question.text);
                  }}
               >
                  {props.question.text}
               </Link>
               {/* once clicked we want to grab the details of whatever question we clicked on and get the URL of the previous route ("/questions") and store it inside of redux global state (use action STORE_ANSWERABLE_QUESTION*/}
            </div>
            <p className="text-muted asked-on-answers-num float-left mb-4">
               Asked on {toDisplayDate(props.question.createdAt, "MMMM d, y")}.
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
