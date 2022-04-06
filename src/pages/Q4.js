import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NextButton from '../component/NextButton';
import QNA from '../content/QNA'

const QnA_4 = QNA[3];

function Q4(props) {
    const Period = props.location.state.Period.Period;
    const Purpose = props.location.state.Purpose.Purpose;
    const Tol = props.location.state.Tolerance.Tolerance;
    const [Tolerance, getTolerance] = useState(Tol);
    function SelButton({ Answer }) {

        const value = Answer.Value;
        const answer = Answer.Answer;
        const explain = Answer.Explain;

        const onClick = () => {
            QnA_4.Answers.map(answer => (
                answer.State = false
            ));
            Answer.State = !Answer.State;
            getTolerance((Tol + value)/2);
            console.log(answer);
        }
        return (
            <div>
                <button className={'sel-button'} value={value} onClick={ onClick } style={{backgroundColor: Answer.State ? '#1d1a82':'#F7F7F7', color: Answer.State && 'White'}}>
                    {answer}
                    <br/>
                    <span className={'small-text'} style={{color: Answer.State && '#F2F2F2'}}>
                        {explain}
                    </span>
                </button>
            </div>
        );
    }
    
    return (
        <div className="App">
        {/* <p>Period: {Period}</p>
        <p>Purpose: {Purpose}</p>
        <p>Tolerance: {Tol}</p> */}

        <h3 className='page'>{ QnA_4.page }</h3> 
        <h1 className='question'>{ QnA_4.Question }</h1>
        {QnA_4.Answers.map(answer => (
            <SelButton key= {answer.id} Answer= {answer}/>
        ))}

        <Link to={{
            pathname: "/q5",
            state: {
                Period: {Period},
                Purpose: {Purpose},
                Tolerance: {Tolerance},
                Literacy: 0,
                Experience: 0
            }
        }}><NextButton/></Link>               
        </div>
    );
}

export default Q4;