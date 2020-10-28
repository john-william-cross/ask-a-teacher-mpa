import React from "react";
import Header from "../ui/Header";
import orderBy from "lodash/orderBy";
import questions from "../../mock-data/questions";
import DisplayQuestions from "../ui/DisplayQuestions";

export default class Questions extends React.Component {
   constructor(props) {
      super(props);
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
                              <DisplayQuestions
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
