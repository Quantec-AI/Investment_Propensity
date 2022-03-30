import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NextButton from '../component/NextButton';

let QnA_5 = {
    page: 5,
    Question: "아는 투자 단어들을 모두 골라주세요!", 
    Answers: [
        {
            id:1, 
            Answer: "PER", 
            Value: 1,
            State: false
        },
        {
            id:2, 
            Answer: "KPI", 
            Value: -1,
            State: false
        },
        {
            id:3, 
            Answer: "유상증자", 
            Value: 1,
            State: false
        },
        {
            id:4, 
            Answer: "ETF", 
            Value: 1,
            State: false
        },
        {
            id:5, 
            Answer: "세액공제", 
            Value: -1,
            State: false
        },
        {
            id:6, 
            Answer: "공매도", 
            Value: 1,
            State: false
        },
        {
            id:7, 
            Answer: "ROA", 
            Value: 1,
            State: false
        },
        {
            id:8, 
            Answer: "FPS", 
            Value: -1,
            State: false
        },
        {
            id:9, 
            Answer: "인덱스", 
            Value: 1,
            State: false
        },
        {
            id:10, 
            Answer: "MTS", 
            Value: 1,
            State: false
        },
        {
            id:11,
            Answer: "BTS", 
            Value: -1,
            State: false
        },
        {
            id:12,
            Answer: "증거금", 
            Value: 1,
            State: false
        },
        {
            id:13,
            Answer: "코스피", 
            Value: 1,
            State: false
        },
        {
            id:14, 
            Answer: "반모", 
            Value: -1,
            State: false
        },
        {
            id:15,
            Answer: "IPO", 
            Value: 1,
            State: false
        }
    ]
}

function Q5(props) {
    const Period = props.location.state.Period.Period;
    const Purpose = props.location.state.Purpose.Purpose;
    const Tolerance = props.location.state.Tolerance.Tolerance;
    function SelButton({ answer, value, state }) {
        const onClick = () => {
          if(state === false) {
              console.log('선택');
              state = true;
              getLiteracy(Literacy + value);
          }
          else {
              console.log('해제');
              state = false;
              getLiteracy(Literacy - value);
          }
          console.log(QnA_5.Answers);
        }
        return (
            <div>
                <button className={'sel-button'} value={value} onClick={ onClick }>{answer}</button>
            </div>
        );
    }
    
    function CalLiteracy({ value, state }) {
        // Lit_temp = Literacy
        if(state === true) {
            // Lit_temp = Lit_temp + value;
            getLiteracy(Literacy + value);
            return 0;
        }
        else{
            return 0;
        }
    }
    const [Literacy, getLiteracy] = useState(0);
    let Lit_temp = 0;

    return (
        <div>
            <p>Peroid: {Period}</p>
            <p>Purpose: {Purpose}</p>
            <p>Tolerance: {Tolerance}</p>

            <h3>{ QnA_5.page }</h3> 
            <h1>{ QnA_5.Question }</h1>
            {QnA_5.Answers.map(answer => (
                <SelButton key= {answer.id} answer= {answer.Answer} value= {answer.Value} state={answer.State}/>
            ))}
            {/* {QnA_5.Answers.map(answer => (
                <CalLiteracy key= {answer.id} value= {answer.Value} state={answer.State}/>
            ))} */}
            <h4>Answer: { Literacy }</h4>

            <Link to={{
                pathname: "/q6",
                state: {
                    Period: {Period},
                    Purpose: {Purpose},
                    Tolerance: {Tolerance},
                    Literacy: {Literacy},
                    Experience: 0
                }
            }}>
                <NextButton/>
            </Link>   
            
        </div>
    );
}

export default Q5;