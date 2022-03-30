import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NextButton from '../component/NextButton';

const QnA_2 = {
    page: 2,
    Question: "1억을 투자, 1년동안 이정도는 땡겨야지!", 
    Answers: [
        {
            id:1,
            Answer: "200만원(수익률 2%, 100%확률)", 
            Value: 0
        },
        {
            id:2,
            Answer: "500만원(수익률 5%, 80%확률)", 
            Value: 10
        },
        {
            id:3,
            Answer: "1000만원(수익률 10%, 50%확률)", 
            Value: 20
        },
        {
            id:4,
            Answer: "5000만원(수익률 50%, 20%확률)", 
            Value: 30
        },
        {
            id:5,
            Answer: "1억(수익률 100%, 8%확률)", 
            Value: 40
        }
    ]
}

function Q2(props) {
    const Period = props.location.state.Period.Period;
    function SelButton({ answer, value }) {
        const onClick = () => {
          console.log(value)
          getPurpose(value)
        }
        return (
            <div>
                <button className={'sel-button'} value={value} onClick={ onClick }>{answer}</button>
            </div>
        );
    }
    
    const [Purpose, getPurpose] = useState(0);

    return (
        <div>
            <p>Peroid: {Period}</p>

            <h3>{ QnA_2.page }</h3> 
            <h1> { QnA_2.Question }</h1>
            {QnA_2.Answers.map(answer => (
                <SelButton key= {answer.id} answer= {answer.Answer} value= {answer.Value}/>
            ))}
            <h4>Answer: { Purpose }</h4>

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