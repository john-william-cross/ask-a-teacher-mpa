import React from "react";
import Header from "../ui/Header";
import { Link } from "react-router-dom";
import toDisplayDate from "date-fns/format";
import questions from "../../mock-data/questions";

export default class Landing extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         displayedQuestions: questions,
         searchInput: "",
         allQuestions: questions,
      };
   }

   setSearchInput(e) {
      const searchInput = e.target.value; // get that value, store in searchInput
      console.log(searchInput);
      console.log(`you pushed a key!`);
      this.setState((prevState) => {
         return {
            searchInput: searchInput, //we update search input
            displayedQuestions: this.state.allQuestions.filter((question) => {
               const lowerCasedInput = searchInput.toLowerCase();
               const questionText = question.text.toLowerCase();

               return questionText.includes(lowerCasedInput);
            }),
         };
      });
   }

   render() {
      return (
         <>
            <Header />
            <div className="container">
               <div className="row">
                  <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2 col-xl-8 offset-xl-2 mt-xs-5 mt-9">
                     <p
                        className="logo-text-font landing-page-title"
                        style={{ textAlign: "center" }}
                     >
                        Ask a teacher
                     </p>

                     <textarea
                        className="form-control mt-7"
                        id="question-input-home-page"
                        rows="2"
                        autoFocus
                        value={this.state.searchInput}
                        onChange={(e) => {
                           this.setSearchInput(e);
                           // document.getElementById("questions")
                        }}
                        style={{ width: "100%" }}
                     ></textarea>

                     <div className=" text-center ">
                        <p className="mt-6">
                           Don't see what you're looking for?
                        </p>

                        <Link
                           to="submit-question"
                           className="submit-new-question  mt-1"
                        >
                           Submit a new question
                        </Link>
                     </div>

                     {this.state.displayedQuestions.map((question) => {
                        return (
                           <div key={question.id}>
                              <div className="lead mt-6 mb-1" id="questions">
                                 <Link to="question">{question.text}</Link>
                              </div>
                              <p className="text-muted asked-on-answers-num float-left mb-4">
                                 Asked on{" "}
                                 {toDisplayDate(
                                    question.createdAt,
                                    "MMM. d, y"
                                 )}
                                 .
                              </p>
                              <p className="text-muted asked-on-answers-num float-right">
                                 {question.answers.length} answers
                              </p>
                              <hr className="mt-8 mb-n3" />

                              <div className="clearfix mb-4"></div>
                           </div>
                        );
                     })}
                  </div>
               </div>
            </div>
         </>
      );
   }
}
