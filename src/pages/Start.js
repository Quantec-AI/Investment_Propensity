import React from 'react';
import '../App.css';
import NextButton from "../component/NextButton";

function Start() {
  return (
    <div className="App">
      <h1>투자 성향에 맞는 캐릭터를 만들어드려요 ^^*</h1>
      <NextButton Path={"/q1"} Per={0} Pur={0} Tol={0} Lit={0} Exp={0} Text={'테스트 시작하기'}/>
    </div>
  );
}
export default Start;
