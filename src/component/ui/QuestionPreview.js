import React from "react";
import toDisplayDate from "date-fns/format";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import actions from "../../store/actions";

function QuestionPreview(props) {
   function storeAnswerableQuestion(e) {
      const id = e.target.id;
      console.log(`here's the id: `, id);

      const match = props.allQuestions.find((question) => {
         return question.id === id;
      });

      props.dispatch({
         type: actions.STORE_ANSWERABLE_QUESTION,
         payload: { text: match, prevRoute: "/questions" },
      });



   return (
      <>
         <div className="lead mt-6 mb-1">
            <Link
               to="/question"
               id={props.question.id}
               onClick={(e) => {
                  storeAnswerableQuestion(e);
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
      </>
   );
}

function mapStateToProps(state) {
   //return whatever we want to pass from the global state into the properties
   return {
      answerableQuestion: state.answerableQuestion,
      allQuestions: state.allQuestions,
   };
}
export default connect(mapStateToProps)(QuestionPreview);
