import React, { Component } from "react";
import Header from "../ui/Header";
import DisplayQuestions from "../ui/DisplayQuestions";
import orderBy from "lodash/orderBy";
import questions from "../../mock-data/questions";

export default class Questions extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         order: [["createdAt"], ["desc"]],
         displayedQuestions: orderBy(questions, ["createdAt"], ["desc"]),
      };
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
                        >
                           onChange={(e) => this.setOrder(e)}
                           <option value='[["createdAt], ["asc]]'>
                              Newest
                           </option>
                           <option value="unanswered">Unanswered</option>
                           <option value='[["answers, "'>Trending</option>
                           <option value='[["answers"], [["desc"]]]'>
                              Answered
                           </option>
                        </select>

                        <div className="clearfix"></div>

                        <DisplayQuestions />

                        <div className="clearfix mb-4"></div>
                     </div>
                  </div>
               </div>
            </div>
         </>
      );
   }
}
