import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import NextButton from '../component/NextButton';
import QNA from '../content/QNA'

const QnA_1 = QNA[0];

function Q1() {

  const [Period, getPeriod] = useState('Not Selected!');

  function SelButton({ Answer }) {
    const value = Answer.Value;
    const answer = Answer.Answer;

    const onClick = () => {
      QnA_1.Answers.map(answer => (
          answer.State = false
      ));
      Answer.State = !Answer.State;
      console.log(answer);
      getPeriod(value);
    }
    return (
      <div>
        <button className={'sel-button'} value={value} onClick={ onClick } style={{backgroundColor: Answer.State ? '#1d1a82':'#F7F7F7', color: Answer.State && 'White'}}>{answer}</button>
      </div>
    );
  }
  
  return (
    <div className="App">
      <h3 className='page'>{ QnA_1.page }</h3> 
      <h1 className='question'> { QnA_1.Question }</h1>
      {QnA_1.Answers.map(answer => (
        <SelButton key= {answer.id} Answer={answer}/>
      ))}

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
