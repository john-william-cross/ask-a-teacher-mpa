import React from "react";
import Header from "../ui/Header";
import DisplayQuestions from "../ui/DisplayQuestions";

export default function Questions() {
   return (
      <>
         <Header />
         <div className="container">
            <div className="row no-gutters">
               <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2 col-xl-8 offset-xl-2 mt-9">
                  <div className="col-12 mt-6">
                     <h1 className="float-left top-questions">Top Questions</h1>
                     <select className="float-right dropdown col-5 form-control pl-0 form-control-lg">
                        <option value="newest">Newest</option>
                        <option value="unanswered">Unanswered</option>
                        <option value="trending">Trending</option>
                        <option value="answered">Answered</option>
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
