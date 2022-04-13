import React, { useState } from 'react';
import Header from '../component/Header';
import NextButton from '../component/NextButton';
import QNA from '../content/QNA'

const QnA = QNA[6];

function Q7(props) {

    const Period = props.location.state.Period;
    const Pur = props.location.state.Purpose;
    const Tolerance = props.location.state.Tolerance;
    const Literacy = props.location.state.Literacy;
    const Experience = props.location.state.Experience;
    const [Purpose, getPurpose] = useState(Pur);
    const [Sel, setSel] = useState(false);
    console.log('원래 Purpose 값', Pur);
    // getPurpose(Pur);

    function MulSelection({ Answer }) {
        const value = Answer.Value;
        const answer = Answer.Answer;
        const price = Answer.Price;
        // console.log(Answer);
        console.log(Purpose);


        const onClick = () => {
            Answer.State = !Answer.State;
            Answer.State === false ? getPurpose( Purpose - value ):getPurpose( Purpose + value ); 
            console.log(answer);
            setSel(true);
        };
        return (
            <div>
                <div className={'ell-comp'} value={value} onClick={onClick} style={{backgroundColor: Answer.State ? '#1d1a82':'#F7F7F7', color: Answer.State && 'White'}}>{answer}
                <div className={'small-text'} style={{marginTop: '0.5rem'}}>
                        {price}
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="App">
            <Header />
            <div className='Content'>
                <h3 className='page'>{  QnA.page }</h3> 
                <h1 className='question'>{  QnA.Question }</h1>
                <div className={'ell-body'}>
                    { QnA.Answers.map(answer => (
                        <MulSelection key= {answer.id} Answer={answer} />
                    ))}
                </div>
                <div style={{paddingTop: '0.5rem'}}></div>
                {Sel ?  <NextButton Path={"/q8"} Per={Period} Pur={Purpose} Tol={Tolerance} Lit={Literacy} Exp={Experience} Text={'Next'}/> : <button disabled className='next'>Next</button> }
            </div>
        </div>
    );
}

export default Q7;