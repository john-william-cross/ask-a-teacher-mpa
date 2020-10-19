import React from "react";
import Header from "../ui/Header";

export default function SubmitQuestion() {
   return (
      <>
         <Header />
         <div class="container">
            <div class="row mt-8 no-gutters">
               <div class="pressed-submit mt-6 col-12 col-xl-6 offset-xl-3 col-lg-8 offset-lg-2 col-md-10 offset-md-1">
                  <h1 class="lead mb-3 mt-6">What's your question?</h1>
                  <textarea
                     class="form-control form-control-lg mt-5"
                     id="question-input"
                     rows="10"
                     autofocus
                     style={{ width: "100%" }}
                  ></textarea>
                  <p class="text-muted float-right">
                     <span class="text-danger" id="question-input-char-count">
                        0
                     </span>
                     /500
                  </p>

                  <p class="lead mt-5">Enter your email</p>
                  <input
                     type="text"
                     id="questioner-email-input"
                     class="form-control form-control-lg mt-4"
                     aria-label="enter your email"
                     aria-describedby="enter email"
                  />
                  <p class="text-danger mb-4" id="questioner-email-error"></p>

                  <div class="mt-6 text-center col-12 col-xl-6 offset-xl-3 col-lg-8 offset-lg-2 col-md-10 offset-md-1">
                     <input
                        class="logo-text-font submit-question-button btn btn-lg btn-outline-secondary mb-8"
                        id="ask-a-teacher-submit-button"
                        disabled
                        type="submit"
                        value="Ask a teacher"
                     />
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}
