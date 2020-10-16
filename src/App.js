import React from "react";
import "./style/master.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "./component/pages/Landing";
import Question from "./component/pages/Question";
import Questions from "./component/pages/Questions";
import SignInSignUp from "./component/pages/SignInSignUp";
import SubmitQuestion from "./component/pages/SubmitQuestion";
import NotFound from "./component/pages/NotFound";

function App() {
   return (
      <Router>
         <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/question" component={Question} />
            <Route exact path="/questions" component={Questions} />
            <Route exact path="/sign-in-sign-up" component={SignInSignUp} />
            <Route exact path="/submit-question" component={SubmitQuestion} />
            <Route component={NotFound} />
         </Switch>
      </Router>
   );
}

export default App;
