import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NextButton from '../component/NextButton';

const QnA_6 = {
    page: 6,
    Question: "내가 주식을 시작한지 어언...", 
    Answers: [
        {
            id:1, 
            Answer: "6개월 이하", 
            Value: 0
        },
        {
            id:2, 
            Answer: "7개월 ~ 1년", 
            Value: 10
        },
        {
            id:3,
            Answer: "1년 ~ 5년", 
            Value: 20
        },
        {
            id:4,
            Answer: "5년 ~ 10년", 
            Value: 30
        },
        {
            id:5,
            Answer: "10년 이상", 
            Value: 40
        }
    ]
}

function Q6(props) {
    const Period = props.location.state.Period.Period;
    const Purpose = props.location.state.Purpose.Purpose;
    const Tolerance = props.location.state.Tolerance.Tolerance;
    const Literacy = props.location.state.Literacy.Literacy;
    function SelButton({ answer, value }) {
        const onClick = () => {
          console.log(value);
          getExperience(value);
        }
        return (
            <div>
                <button className={'sel-button'} value={value} onClick={ onClick }>{answer}</button>
            </div>
        );
    }
    
    const [Experience, getExperience] = useState(0);

    return (
        <div>
            <p>Peroid: {Period}</p>
            <p>Purpose: {Purpose}</p>

            <h3>{ QnA_6.page }</h3> 
            <h1>{ QnA_6.Question }</h1>
            {QnA_6.Answers.map(answer => (
                <SelButton key= {answer.id} answer= {answer.Answer} value= {answer.Value}/>
            ))}
            <h4>Answer: { Tolerance }</h4>

            <Link to={{
                pathname: "/result",
                state: {
                    Period: {Period},
                    Purpose: {Purpose},
                    Tolerance: {Tolerance},
                    Literacy: {Literacy},
                    Experience: {Experience}
                }
            }}><NextButton/></Link>            
        </div>
    );
}

export default Q6;