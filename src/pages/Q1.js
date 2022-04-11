import React, { useState } from 'react';
import '../App.css';
import Header from '../component/Header';
import NextButton from '../component/NextButton';
import QNA from '../content/QNA'

const QnA_1 = QNA[0];

function Q1() {

  const [Period, getPeriod] = useState('Not Selected!');
  const [Sel, setSel] = useState(false);

  function SelButton({ Answer }) {
    const value = Answer.Value;
    const answer = Answer.Answer;

    const onClick = () => {
      QnA_1.Answers.map(answer => (
          answer.State = false
      ));
      Answer.State = !Answer.State;
      setSel(true);
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
      <Header />
      <div className='Content'>
        <h3 className='page'>{ QnA_1.page }</h3> 
        <h1 className='question'> { QnA_1.Question }</h1>
        {QnA_1.Answers.map(answer => (
          <SelButton key= {answer.id} Answer={answer}/>
        ))}
        {Sel ? <NextButton Path={"/q2"} Per={Period} Pur={0} Tol={0} Lit={0} Exp={0} Text={'Next'}/> : <button disabled className='next'>Next</button> }
      </div>
    </div>
  );
}

export default Q1;
