import React from "react";
import Header from "../ui/Header";
import orderBy from "lodash/orderBy";
import questions from "../../mock-data/questions";
import QuestionPreview from "../ui/QuestionPreview";
import axios from "axios";
import { connect } from "react-redux";
import actions from "../../store/actions";

class Questions extends React.Component {
   constructor(props) {
      super(props);
      axios
         .get(
            "https://raw.githubusercontent.com/john-william-cross/ask-a-teacher-mpa/master/src/mock-data/currentUser.json"
         )
         .then(function (res) {
            // handle success
            console.log(`currentUser: `, res);
            props.dispatch({
               type: actions.STORE_CURRENT_USER,
               payload: res.data,
            }); // remember we dispatch actions. dispatch takes a type and a payload
         })
         .catch(function (error) {
            // handle error
            console.log(error);
         });
      axios
         .get(
            "https://raw.githubusercontent.com/john-william-cross/ask-a-teacher-mpa/master/src/mock-data/questions.json"
         )
         .then(function (res) {
            // handle success
            console.log(`all questions:`, res);
            props.dispatch({
               type: actions.STORE_ALL_QUESTIONS,
               payload: res.data,
            }); // remember we dispatch actions. dispatch takes a type and a payload
         })
         .catch(function (error) {
            // handle error
            console.log(error);
         });

      /*
allQuestions: [],
indexOfCurrentQuestion: 0,   ?
user: {}   is this user logged in, does user have access to this page? etc
*/

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

   componentDidMount() {}

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

//mapStateToProps says take this global state and map these certain things to properties within this local state
function mapStateToProps() {
   //return whatever we want to pass from the global state into the properties
   return {};
}

export default connect(mapStateToProps)(Questions);
