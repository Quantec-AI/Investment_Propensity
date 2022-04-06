import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NextButton from '../component/NextButton';
import QNA from '../content/QNA'

const QnA_2 = QNA[1];

function Q2(props) {
    const Period = props.location.state.Period.Period;

    const [Purpose, getPurpose] = useState('Not Selected!');

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
        }
        return (
            <div>
                <button className={'sel-button'} value={value} onClick={ onClick } style={{backgroundColor: Answer.State ? '#1d1a82':'#F7F7F7', color: Answer.State && 'White'}}>{answer}</button>
            </div>
        );
    }
    

    return (
        <div className="App">
            {/* <p>Period: {Period}</p> */}

            <h3 className='page'>{ QnA_2.page }</h3> 
            <h1 className='question'> { QnA_2.Question }</h1>
            {QnA_2.Answers.map(answer => (
                <SelButton key= {answer.id} Answer= {answer}/>
            ))}

            <Link to={{
                pathname: "/q3",
                state: {
                    Period: {Period},
                    Purpose: {Purpose},
                    Tolerance: 0,
                    Literacy: 0,
                    Experience: 0
                }
            }}><NextButton/></Link>
        </div>
    );
}

export default Q2;