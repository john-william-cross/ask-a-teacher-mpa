import React from "react";
import Header from "../ui/Header";
import orderBy from "lodash/orderBy";
import questions from "../../mock-data/questions";
import QuestionPreview from "../ui/QuestionPreview";
import axios from "axios";

export default class Questions extends React.Component {
   constructor(props) {
      super(props);
      axios
         .get(
            "https://raw.githubusercontent.com/john-william-cross/ask-a-teacher-mpa/c1de098beb5dcedce1a628be5ade409908c0be22/src/mock-data/questions.json"
         )
         .then(function (response) {
            // handle success
            console.log(response);
            //TODO: replace mock data with api call after 324A
            //do this on landing page too.
         })
         .catch(function (error) {
            // handle error
            console.log(error);
         });

      this.state = {
         order: `[["createdAt"], ["desc"]]`,
         displayedQuestions: orderBy(questions, '[["totalAnswers"], ["asc"]]'),
         allQuestions: questions.map((question) => {
            return {
               totalAnswers: question.answers.length,
               ...question,
            };
         }),
      };
   }

   //REMEMBER THAT STATE IS ALWAYS AN OBJECT

   setOrder(e) {
      const newOrder = e.target.value; // '[(question) => {return question.answers.length}, ["asc"]]'
      console.log(newOrder);
      const parsedNewOrder = JSON.parse(newOrder);
      console.log(parsedNewOrder);
      this.setState({ order: newOrder }, () => {
         this.setState({
            displayedQuestions: orderBy(
               this.state.allQuestions,
               ...parsedNewOrder // [(question) => {return question.answers.length}, ["asc"]]
            ),
         });
      });
   }

   render() {
      return (
         <>
            <Header />
            <div className="container">
               <div className="row no-gutters">
                  <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2 col-xl-8 offset-xl-2 mt-9">
                     <div className="col-12 mt-6">
                        <h1 className="float-left top-questions">
                           Top Questions
                        </h1>

                        <select
                           value={this.state.order}
                           className="float-right dropdown col-5 form-control pl-0 form-control-lg"
                           onChange={(e) => this.setOrder(e)}
                        >
                           <option value='[["createdAt"], ["asc"]]'>
                              Newest
                           </option>
                           <option value='[["totalAnswers"], ["asc"]]'>
                              Unanswered
                           </option>
                        </select>

                        <div className="clearfix"></div>

                        {this.state.displayedQuestions.map((question) => {
                           return (
                              <QuestionPreview
                                 question={question}
                                 key={question.id}
                              />
                           );
                        })}

                        <div className="clearfix mb-4"></div>
                     </div>
                  </div>
               </div>
            </div>
         </>
      );
   }
}
