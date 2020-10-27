import React from "react";
import Header from "../ui/Header";
import { Link } from "react-router-dom";
import toDisplayDate from "date-fns/format";
import questions from "../../mock-data/questions";
import classnames from "classnames";

export default class Landing extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         //this sets the state of displayedQuestions, searchInput, and allQuestions when page is loaded
         displayedQuestions: questions,
         searchInput: "",
         allQuestions: questions,
      };
   }

   setIsDisplayingQuestions(e) {
      const searchInput = e.target.value;
      if (searchInput.length > 0) {
         this.setState({
            isDisplayingQuestions: true,
         });
      } else
         this.setState({
            isDisplayingQuestions: false,
         });
   }

   setSearchInput(e) {
      const searchInput = e.target.value; // get that value, store in searchInput
      console.log(searchInput);

      this.setState((prevState) => {
         return {
            searchInput: searchInput, //we update search input to what was entered

            displayedQuestions: prevState.allQuestions.filter((question) => {
               //allQuestions is filtered
               const lowerCasedInput = searchInput.toLowerCase();
               const questionText = question.text.toLowerCase();

               return questionText.includes(lowerCasedInput); //only questions with text that includes the searchInput.toLowerCase() is returned
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
                        value={this.state.searchInput} //set value of text area to empty string as declared above
                        onChange={(e) => {
                           this.setSearchInput(e); //when something is entered into input, setSearchInput is run based on the text entered
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

                     <div
                        id="displayed-results"
                        className={classnames({
                           "d-none": this.state.searchInput.length === 0,
                        })}
                     >
                        {this.state.displayedQuestions.map((question) => {
                           //map over each question in displayedQuestions
                           return (
                              <div key={question.id}>
                                 <div className="lead mt-6 mb-1" id="questions">
                                    <Link to="question">{question.text}</Link>
                                    {/* //display question text as a link */}
                                 </div>
                                 <p className="text-muted asked-on-answers-num float-left mb-4">
                                    Asked on{" "}
                                    {toDisplayDate(
                                       //display when question was asked
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
                        })}{" "}
                     </div>
                  </div>
               </div>
            </div>
         </>
      );
   }
}
