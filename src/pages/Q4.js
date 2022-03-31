import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NextButton from '../component/NextButton';

const QnA_4 = {
    page:4,
    Question: "내 자산 10억으로 투자할 상품을 골라주세요!", 
    Answers: [
        {
            id:1,
            Answer: "초저위험 상품", 
            Explain: "(최선의 경우 100만원 이익, 최악의 경우 0원 손실)",
            Value: 0
        },
        {
            id:2,
            Answer: "저위험 상품", 
            Explain: "(최선의 경우 300만원 이익, 최악의 경우 100만원 손실)",
            Value: 10
        },
        {
            id:3,
            Answer: "중위험 상품", 
            Explain: "(최선의 경우 천만원 이익, 최악의 경우 300만원 손실)",
            Value: 20
        },
        {
            id:4,
            Answer: "고위험 상품",
            Explain: "(최선의 경우 3천만원 이익, 최악의 경우 천만원 손실)",
            Value: 30
        },
        {
            id:5,
            Answer: "초고위험 상품", 
            Explain: "(최선의 경우 5천만원 이익, 최악의 경우 2천만원 손실)",
            Value: 40
        }
    ]
}

function Q4(props) {
    const Period = props.location.state.Period.Period;
    const Purpose = props.location.state.Purpose.Purpose;
    const Tol = props.location.state.Tolerance.Tolerance;
    const [Tolerance, getTolerance] = useState(Tol);
    const [Value, getValue] = useState(0);
    function SelButton({ answer, explain, value }) {
        const onClick = () => {
          console.log(value)
          getTolerance((Tol + value)/2)
          getValue(value)
        }
        return (
            <div>
                <button className={'sel-button'} value={value} onClick={ onClick }>{answer}<br/><span className={'small-text'}>{explain}</span></button>
            </div>
        );
    }
    
    return (
        <div>
        <p>Peroid: {Period}</p>
        <p>Purpose: {Purpose}</p>
        <p>Tolerance: {Tol}</p>

        <h3>{ QnA_4.page }</h3> 
        <h1>{ QnA_4.Question }</h1>
        {QnA_4.Answers.map(answer => (
            <SelButton key= {answer.id} answer= {answer.Answer} explain= {answer.Explain} value= {answer.Value}/>
        ))}
        <h4>Answer: { Value }</h4>

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