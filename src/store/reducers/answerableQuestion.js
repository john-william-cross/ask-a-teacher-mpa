import actions from "../actions";

export default function answerableQuestion(answerableQuestion = {}, action) {
   // action.payload, action.type
   console.log(
      `answerableQuestion has fired, but if you don't see a console log below this that says "YEP IT SURE HAS", then everything isn't quite yet working... `,
      action.type
   );
   let newAnswerableQuestion = { ...answerableQuestion };
   switch (action.type) {
      case actions.STORE_ANSWERABLE_QUESTION:
         console.log("YEP IT SURE HAS");
         newAnswerableQuestion.answers = action.payload.answers;
         newAnswerableQuestion.prevRoute = action.payload.prevRoute;
         newAnswerableQuestion.id = action.payload.id;
         newAnswerableQuestion.text = action.payload.text;
         newAnswerableQuestion.email = action.payload.email;
         newAnswerableQuestion.createdAt = action.payload.createdAt;

         return newAnswerableQuestion; //this will be an array of objects that will be stored inside our Redux store
      default:
         return answerableQuestion;
   }
}
