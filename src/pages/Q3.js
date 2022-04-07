import React, { useState } from 'react';
import NextButton from '../component/NextButton';
import QNA from '../content/QNA'

const QnA_3 = QNA[2];

function Q3(props) {
    const Period = props.location.state.Period;
    const Purpose = props.location.state.Purpose;

    const [Tolerance, getTolerance] = useState('Not Selected!');

    function SelButton({Answer}) {

        const value = Answer.Value;
        const answer = Answer.Answer;

        const onClick = () => {
            QnA_3.Answers.map(answer => (
                answer.State = false
            ))
            Answer.State = !Answer.State;
            console.log(answer);
            getTolerance(value);
        }
        
        return (
            <div>
                <button 
                    className={'sel-button'} 
                    value={value} onClick={ onClick } 
                    style={{backgroundColor: Answer.State ? '#1d1a82':'#F7F7F7', color: Answer.State && 'White'}}>
                    {answer}
                </button>
            </div>
        );
    }
    
    return (
        <div className="App">
            <p>Period: {Period}</p>
            <p>Purpose: {Purpose}</p>

            <h3 className='page'>{ QnA_3.page }</h3> 
            <h1 className='question'>{ QnA_3.Question }</h1>
            {QnA_3.Answers.map(answer => (
                <SelButton key= {answer.id} Answer={answer}/>
            ))}

            {/* <div style={{display:'inline-block'}}>
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
            </div> */}
            <NextButton Path={"/q4"} Per={Period} Pur={Purpose} Tol={Tolerance} Lit={0} Exp={0} Text={'Next'}/>
            
        </div>
    );
}

export default Q3;