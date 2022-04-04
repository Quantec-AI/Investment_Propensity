import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import NextButton from "../component/NextButton";

function Start() {
  return (
    <div className="App">
      <Link to="/q1"><NextButton/></Link>
    </div>
  );
}


export default Start;
