import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import NextButton from "../component/NextButton";

function Start() {
  return (
    <div className="App">
      <h1>나만의 캐릭터를 만들어보세요 *^^*</h1>
      <Link to="/q1"><NextButton/></Link>
    </div>
  );
}


export default Start;
