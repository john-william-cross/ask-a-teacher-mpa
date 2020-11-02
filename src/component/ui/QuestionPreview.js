import React from "react";
import toDisplayDate from "date-fns/format";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import actions from "../../store/actions";
import allQuestions from "../../store/reducers/allQuestions";

function QuestionPreview(props) {
   function storeAnswerableQuestion(e) {
      const question = e.target.text;
      console.log(question);
      console.log("here's the specific question you clicked on: ", {
         question,
      });
      props.dispatch({
         type: actions.STORE_ANSWERABLE_QUESTION,
         payload: e.target.id,
      });
      // get the question object with this id
      // from the array of allQuestions, console log this object
      // store the object inside the redux store /////use props.dispatch; won't need this.props.dispatch
      console.log("Inside storeAnswerableQuestion: ", e.target.id);
      console.log(
         "Question Preview props.allQuestions: ",
         props.answerableQuestion
      );
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
      // answerableQuestion: state.answerableQuestion,
   };
}
export default connect(mapStateToProps)(QuestionPreview);
