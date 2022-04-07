import React, { useState } from 'react';
import NextButton from '../component/NextButton';
import QNA from '../content/QNA'

const QnA_6 = QNA[5];

function Q6(props) {
    const Period = props.location.state.Period;
    const Purpose = props.location.state.Purpose;
    const Tolerance = props.location.state.Tolerance;
    const Literacy = props.location.state.Literacy;

    const [Experience, getExperience] = useState('Not Selected!');

    function SelButton({ Answer }) {

        const value = Answer.Value;
        const answer = Answer.Answer;

        const onClick = () => {
            QnA_6.Answers.map(answer => (
                answer.State = false
            ));
            Answer.State = !Answer.State;
            console.log(answer);
            getExperience(value);
        }
        return (
            <div>
                <button className={'sel-button'} value={value} onClick={ onClick } style={{backgroundColor: Answer.State ? '#1d1a82':'#F7F7F7', color: Answer.State && 'White'}}>{answer}</button>
            </div>
        );
    }

    return (
        <div className="App"> 
            {/* <p>Period: {Period}</p>
            <p>Purpose: {Purpose}</p>
            <p>Tolerance: {Tolerance}</p>
            <p>Literacy: {Literacy}</p> */}

            <h3 className='page'>{ QnA_6.page }</h3> 
            <h1 className='Question'>{ QnA_6.Question }</h1>
            {QnA_6.Answers.map(answer => (
                <SelButton key= {answer.id} Answer= {answer}/>
            ))}

            {/* <div style={{display:'inline-block'}}>
                <Link to={{
                    pathname: "/fresult",
                    state: {
                        Period: {Period},
                        Purpose: {Purpose},
                        Tolerance: {Tolerance},
                        Literacy: {Literacy},
                        Experience: {Experience}
                    }
                }}><NextButton/></Link>  
            </div> */}
            <NextButton Path={"/fresult"} Per={Period} Pur={Purpose} Tol={Tolerance} Lit={Literacy} Exp={Experience} Text={'결과보기'}/>
        </div>
    );
}

export default Q6;