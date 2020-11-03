import React from "react";
import toDisplayDate from "date-fns/format";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import actions from "../../store/actions";
import allQuestions from "../../store/reducers/allQuestions";
import Questions from "../pages/Questions";

function QuestionPreview(props) {
   function storeAnswerableQuestion(e) {
      const id = e.target.id;
      console.log(`here's the id: `, id);

      const match = props.allQuestions.find((question) => {
         return question.id === id;
      });

      props.dispatch({
         type: actions.STORE_ANSWERABLE_QUESTION,
         payload: { text: match },
      });

      // get the question object with this id
      // from the array of allQuestions, console log this object
      // get the index of the question from allQuestions where
      // the id is equal to the id of the question I clicked on.

      // store the object inside the redux store /////use props.dispatch; won't need this.props.dispatch
   }

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
