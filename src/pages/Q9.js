import React, { useState } from 'react';
import '../App.css';
import Header from '../component/Header';
import NextButton from '../component/NextButton';
import QNA from '../content/QNA'

const QnA = QNA[8];

function Q9(props) {
  const Res = props.location.state.Res;
  console.log(Res);
  // console.log(props.location.state);
  // Answers[1] = 3; 

  const [Response, getResponse] = useState('Not Selected!');
  const [Sel, setSel] = useState(false);

  function SelButton({ Answer }) {
    const id = Answer.id;
    const answer = Answer.Answer;

    const onClick = () => {
      QnA.Answers.map(answer => (
          answer.State = false
      ));
      Answer.State = !Answer.State;
      setSel(true);
      console.log(answer);
      getResponse(id);
    }
    return (
      <div>
        <button className={'sel-button'} onClick={ onClick } style={{backgroundColor: Answer.State ? '#1d1a82':'#F7F7F7', color: Answer.State && 'White'}}>{answer}</button>
      </div>
    );
  }
  
  Res[QnA.page] = Response;
  
  return (
    <div className="App">
      <Header />
      <div className='Content'>
        <h3 className='page'>{ QnA.page }</h3> 
        <h1 className='question'> { QnA.Question }</h1>
        {QnA.Answers.map(answer => (
          <SelButton key= {answer.id} Answer={answer}/>
        ))}
        {Sel ? <NextButton Path={"/q10"} Res={Res} Text={'Next'}/> : <button disabled className='next'>Next</button> }
      </div>
    </div>
  );
}

export default Q9;
