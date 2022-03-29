import React, { useState } from 'react';
import '../App.css';

function Result() {

  let [Purpose, CalPurpose] = useState(0);
  let [Tolerance, CalTolerance] = useState(0);
  let [Literacy, CalLiteracy] = useState(0);
  let [Experience, CalExperience] = useState(0);

  return (
    <div className="App">
      <div className="header-nav">
        <div>투자 성향 테스트</div>
      </div>
    </div>
  );
}


export default Result;
