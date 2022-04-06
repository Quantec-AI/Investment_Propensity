import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NextButton from '../component/NextButton';
import QNA from '../content/QNA'

const QnA_5 = QNA[4];

function Q5(props) {

    const Period = props.location.state.Period.Period;
    const Purpose = props.location.state.Purpose.Purpose;
    const Tolerance = props.location.state.Tolerance.Tolerance;
    const [Literacy, getLiteracy] = useState(0);

    function MulSelection({ Answer }) {
        const value = Answer.Value;
        const answer = Answer.Answer;

        const onClick = () => {
            Answer.State = !Answer.State;
            // const state = Answer.State;
            Answer.State === false ? getLiteracy( Literacy - value ):getLiteracy( Literacy + value ); 
            console.log(answer);
        };
    
        return (
            <div>
                {/* <button className={'sel-button'} value={value} onClick={ onClick } style={{backgroundColor: Answer.State ? '#1d1a82':'#F7F7F7', color: Answer.State && 'White'}}>{answer}</button> */}
                <li className={'ell-comp'} value={value} onClick={onClick} style={{backgroundColor: Answer.State ? '#1d1a82':'#F7F7F7', color: Answer.State && 'White'}}>{answer}</li>
            </div>
        );
    }

    return (
        <div className="App">
            {/* {console.log(State)} */}
            {/* <p>Period: {Period}</p>
            <p>Purpose: {Purpose}</p>
            <p>Tolerance: {Tolerance}</p> */}

            <h3 className='page'>{ QnA_5.page }</h3> 
            <h1 className='question'>{ QnA_5.Question }</h1>
            <div className={'ell-body'}>
                {QnA_5.Answers.map(answer => (
                    <MulSelection key= {answer.id} Answer={answer} />
                ))}
            </div>
            <div style={{paddingTop: '2rem'}}></div>

            <div style={{display:'inline-block'}}>
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
            
        </div>
    );
}

export default Q5;