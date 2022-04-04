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
            Value: 0,
            State: false
        },
        {
            id:2, 
            Answer: "7개월 ~ 1년", 
            Value: 10,
            State: false
        },
        {
            id:3,
            Answer: "1년 ~ 5년", 
            Value: 20,
            State: false
        },
        {
            id:4,
            Answer: "5년 ~ 10년", 
            Value: 30,
            State: false
        },
        {
            id:5,
            Answer: "10년 이상", 
            Value: 40,
            State: false
        }
    ]
}

function Q6(props) {
    const Period = props.location.state.Period.Period;
    const Purpose = props.location.state.Purpose.Purpose;
    const Tolerance = props.location.state.Tolerance.Tolerance;
    const Literacy = props.location.state.Literacy.Literacy;

    const [Experience, getExperience] = useState('Not Selected!');

    function SelButton({ Answer }) {

        const value = Answer.Value;
        const answer = Answer.Answer;

        const onClick = () => {
            {QnA_6.Answers.map(answer => (
                answer.State = false
            ))}
            Answer.State = !Answer.State;
            console.log(value);
            getExperience(value);
        }
        return (
            <div>
                <button className={'sel-button'} value={value} onClick={ onClick } style={{backgroundColor: Answer.State ? '#a6cee3':'#eee'}}>{answer}</button>
            </div>
        );
    }

    return (
        <div>
            <p>Period: {Period}</p>
            <p>Purpose: {Purpose}</p>
            <p>Tolerance: {Tolerance}</p>
            <p>Literacy: {Literacy}</p>

            <h3>{ QnA_6.page }</h3> 
            <h1>{ QnA_6.Question }</h1>
            {QnA_6.Answers.map(answer => (
                <SelButton key= {answer.id} Answer= {answer}/>
            ))}
            <h4>Answer: { Experience }</h4>

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