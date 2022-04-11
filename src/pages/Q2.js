import React, { useState } from 'react';
import Header from '../component/Header';
import NextButton from '../component/NextButton';
import QNA from '../content/QNA'

const QnA_2 = QNA[1];

function Q2(props) {
    const Period = props.location.state.Period;

    const [Purpose, getPurpose] = useState('Not Selected!');
    const [Sel, setSel] = useState(false);

    function SelButton({ Answer }) {

        const value = Answer.Value;
        const answer = Answer.Answer;

        const onClick = () => {
            QnA_2.Answers.map(answer => (
                answer.State = false
            ));
            Answer.State = !Answer.State;
            console.log(answer);
            getPurpose(value);
            setSel(true);
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
                <h3 className='page'>{ QnA_2.page }</h3> 
                <h1 className='question'> { QnA_2.Question }</h1>
                {QnA_2.Answers.map(answer => (
                    <SelButton key= {answer.id} Answer= {answer}/>
                ))}
                {Sel ? <NextButton Path={"/q3"} Per={Period} Pur={Purpose} Tol={0} Lit={0} Exp={0} Text={'Next'}/> : <button disabled className='next'>Next</button> }
            </div>            
        </div>
    );
}

export default Q2;