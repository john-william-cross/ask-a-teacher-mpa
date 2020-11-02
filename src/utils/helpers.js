function checkAnswerIsOver(str, num) {
   if (str.length > num) return true;
   else return false;
}

const ANSWER_MAX_CARD_CHARS = 2000;

export { checkAnswerIsOver, ANSWER_MAX_CARD_CHARS };

function checkQuestionIsOver(str, num) {
   if (str.length > num) return true;
   else return false;
}

function storeAnswerableQuestion() {
   console.log("STORING ANSWERABLE QUESTION");
}

const QUESTION_MAX_CARD_CHARS = 500;

export {
   checkQuestionIsOver,
   QUESTION_MAX_CARD_CHARS,
   storeAnswerableQuestion,
};

//technically you could put something like setEmailState here
