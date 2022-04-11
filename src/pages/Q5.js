import React, { useState } from 'react';
import Header from '../component/Header';
import NextButton from '../component/NextButton';
import QNA from '../content/QNA'

const QnA_5 = QNA[4];

function Q5(props) {

    const Period = props.location.state.Period;
    const Purpose = props.location.state.Purpose;
    const Tolerance = props.location.state.Tolerance;
    const [Literacy, getLiteracy] = useState(0);
    const [Sel, setSel] = useState(false);

    function MulSelection({ Answer }) {
        const value = Answer.Value;
        const answer = Answer.Answer;

        const onClick = () => {
            Answer.State = !Answer.State;
            // const state = Answer.State;
            Answer.State === false ? getLiteracy( Literacy - value ):getLiteracy( Literacy + value ); 
            console.log(answer);
            setSel(true);
        };
        return (
            <div>
                <li className={'ell-comp'} value={value} onClick={onClick} style={{backgroundColor: Answer.State ? '#1d1a82':'#F7F7F7', color: Answer.State && 'White'}}>{answer}</li>
            </div>
        );
    }

    return (
        <div className="App">
            <Header />
            <div className='Content'>
                <h3 className='page'>{ QnA_5.page }</h3> 
                <h1 className='question'>{ QnA_5.Question }</h1>
                <div className={'ell-body'}>
                    {QnA_5.Answers.map(answer => (
                        <MulSelection key= {answer.id} Answer={answer} />
                    ))}
                </div>
                <div style={{paddingTop: '0.5rem'}}></div>
                {Sel ?  <NextButton Path={"/q6"} Per={Period} Pur={Purpose} Tol={Tolerance} Lit={Literacy} Exp={0} Text={'Next'}/> : <button disabled className='next'>Next</button> }
            </div>
        </div>
    );
}

export default Q5;