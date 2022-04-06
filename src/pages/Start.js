import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import NextButton from "../component/NextButton";

function Start() {
  return (
    <div className="App">
      <h1>투자 성향에 맞는 캐릭터를 만들어드려요 ^^*</h1>
      <div style={{display:'inline-block'}}><Link to="/q1"><NextButton/></Link></div>
    </div>
  );
}


export default Start;
