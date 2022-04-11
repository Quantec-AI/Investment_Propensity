import React from 'react';
import '../App.css';
import NextButton from "../component/NextButton";
import QNA from '../content/QNA'

function Start() {
  QNA.map(qna => (
    qna.Answers.map(answer => (
      answer.State = false
    ))
  ));
  return (
    <div className="App">
      <div className='Start'>
        <div style={{fontSize: '0.9rem', fontWeight: '400', marginBottom:'0.3rem'}}>돈 쓸어담기 1단계</div>
        <div style={{fontSize: '1.2rem', fontWeight: '700'}}>나의 투자 성향 확인하기</div>
        {/* <h1>투자 성향에 맞는 캐릭터를 만들어드려요 ^^*</h1> */}
        <h5 style={{marginBottom: '0'}}>Press button to start</h5>
        <NextButton Path={"/q1"} Per={0} Pur={0} Tol={0} Lit={0} Exp={0} Text={'테스트 시작하기'}/>
      </div>
    </div>
  );
}
export default Start;
