import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Q1 from './pages/Q1';
import Q2 from './pages/Q2';
import Q3 from './pages/Q3.js';
import Q4 from './pages/Q4.js';
import Q5 from './pages/Q5';
import Q6 from './pages/Q6';
import Start from "./pages/Start";
import Result from "./pages/Result";

function App() {
  const [Period, getPeriod] = useState('');
  const [Purpose, getPurpose] = useState(0);
  const [Tolerance, getTolerance] = useState(0);
  const [Literacy, getLiteracy] = useState(0);
  const [Experience, getExperience] = useState(0);

  return (
    <div className="App">
      <div className="header-nav">
        <div>투자 성향 테스트</div>
      </div>
      <div className='score-board'>
        <p></p>
      </div>
      <Router>
        <Switch>
          <Route exact path="/" component={Start} />
	        <Route exact path="/q1" component={Q1} />
          <Route exact path="/q2" component={Q2} />
	        <Route exact path="/q3" component={Q3} />
	        <Route exact path="/q4" component={Q4} />
	        <Route exact path="/q5" component={Q5} />
	        <Route exact path="/q6" component={Q6} />
          <Route exact path="/result" component={Result} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
