import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NextButton from '../component/NextButton';

const QnA_3 = {
    page: 3,
    Question: "투자할 때 '손실'에 대한 나의 의견은?", 
    Answers: [
        {
            id: 1,
            Answer: "무슨 일이 있어도 원금은 지켜야 해요", 
            Value: 0
        },
        { 
            id:2,
            Answer: "손실은 최소화해야 해요", 
            Value: 10
        },
        {
            id:3, 
            Answer: "수익을 위한 약간의 손실 정도는 괜찮아", 
            Value: 20
        },
        {
            id:4,
            Answer: "High Risk, High Return!", 
            Value: 30
        }
    ]
}

function Q3(props) {
    const Period = props.location.state.Period.Period;
    const Purpose = props.location.state.Purpose.Purpose;
    function SelButton({ answer, value }) {
        const onClick = () => {
          console.log(value);
          getTolerance(value);
        }
        return (
            <div>
                <button className={'sel-button'} value={value} onClick={ onClick }>{answer}</button>
            </div>
        );
    }
    
    const [Tolerance, getTolerance] = useState(0);

    return (
        <div>
            <p>Peroid: {Period}</p>
            <p>Purpose: {Purpose}</p>

            <h3>{ QnA_3.page }</h3> 
            <h1>{ QnA_3.Question }</h1>
            {QnA_3.Answers.map(answer => (
                <SelButton key= {answer.id} answer= {answer.Answer} value= {answer.Value}/>
            ))}
            <h4>Answer: { Tolerance }</h4>

            <Link to={{
                pathname: "/q4",
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

export default Q3;