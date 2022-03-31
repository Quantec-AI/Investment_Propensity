import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NextButton from '../component/NextButton';

const QnA_5 = {
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

    const [ClassName, setClassName] = useState('sel-button')
    // const [OnClick, setOnClick] = useState(null)
    const Period = props.location.state.Period.Period;
    const Purpose = props.location.state.Purpose.Purpose;
    const Tolerance = props.location.state.Tolerance.Tolerance;
    const [Literacy, getLiteracy] = useState(0);
    const [State, setState] = useState([
        false, false, false, false, false, false, false, false, false, false, false, false, false, false, false
    ]);
    // const [Color, setColor] = useState([
    //     'ell-comp', 'ell-comp', 'ell-comp', 'ell-comp', 'ell-comp', 'ell-comp', 'ell-comp', 'ell-comp', 'ell-comp', 'ell-comp', 'ell-comp', 'ell-comp', 'ell-comp', 'ell-comp', 'ell-comp'
    // ]);

    function MulSelection({ answer, value, id }) {
        // const [BackC, setBackC] = useState('ell-comp');
        const onClick = (e) => {
            if(State[id-1]===false){
              console.log(answer, 'Value: ',value, 'Toggle State: ',State[id-1], id);
              getLiteracy( Literacy + value );
              console.log('Literacy: ' ,Literacy);
              var newState = [...State];
              newState[id-1] = true;
              setState( newState );
            //   var newColor = [...Color];
            //   newColor[id-1] = 'ell-sel';
            //   setColor( newColor );
            // setBackC('ell-sel');
              return ;
            }
            else{
              console.log(answer, 'Value: ',value, 'Toggle State: ',State[id-1]);
              getLiteracy( Literacy - value );
              var newState = [...State];
              newState[id-1] = false;
              setState( newState );
            //   var newColor = [...Color];
            //   newColor[id-1] = 'ell-comp';
            //   setColor( newColor );
              return ;
            }
        };
    
        return (
            <div>
                <li className={'ell-comp'} value={value} onClick={onClick}>{answer}</li>
            </div>
        );
    }

    return (
        <div>
            {console.log(State)}
            <p>Peroid: {Period}</p>
            <p>Purpose: {Purpose}</p>
            <p>Tolerance: {Tolerance}</p>

            <h3>{ QnA_5.page }</h3> 
            <h1>{ QnA_5.Question }</h1>
            <div className={'ell-body'}>
                {QnA_5.Answers.map(answer => (
                    <MulSelection key= {answer.id} id={answer.id} answer= {answer.Answer} value={answer.Value} />
                ))}
            </div>
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