import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import NextButton from '../component/NextButton';

const QnA_1 = {
  page: 1,
  Question: "투자를 시작한 이유가 궁금해요!", 
  Answers: [
    {
      id: 1, 
      Answer: "단기 목표: 학자금, 여행 등을 위한 자금 마련", 
      Value: "단기"
    },
    {
      id:2, 
      Answer: "중기 목표: 집과 차 구입을 위해서", 
      Value: "중기_집_차"
    },
    {
      id:3,
      Answer: "중기 목표: 결혼 자금을 위해", 
      Value: "중기_결혼"
    },
    {
      id:4, 
      Answer: "중장기 목표: 자녀 교육 자금을 모으기 위해", 
      Value: "중장기"
    },
    {
      id:5, 
      Answer: "장기 목표: 넉넉한 노후를 위한 투자", 
      Value: "장기"
    }
  ]
}

function Q1() {

  function SelButton({ answer, value }) {
    const onClick = () => {
      console.log(value)
      getPeriod(value)
    }
    return (
      <div>
        <button className={'sel-button'} value={value} onClick={ onClick }>{answer}</button>
      </div>
    );
  }

  const [Period, getPeriod] = useState('Not Selected!');
  
  return (
    <div className="App">
      <h3>{ QnA_1.page }</h3> 
      <h1> { QnA_1.Question }</h1>
      {QnA_1.Answers.map(answer => (
        <SelButton key= {answer.id} answer= {answer.Answer} value= {answer.Value}/>
      ))}
      <h4>Answer: { Period }</h4>

      <Link to={{
        pathname: "/q2",
        state: {
          Period: {Period},
          Purpose: 0,
          Tolerance: 0,
          Literacy: 0,
          Experience: 0
        }
      }}><NextButton/></Link>
    </div>
  );
}

export default Q1;
