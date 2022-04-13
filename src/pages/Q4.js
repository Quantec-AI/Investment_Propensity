import React, { useState } from 'react';
import Header from '../component/Header';
import NextButton from '../component/NextButton';
import QNA from '../content/QNA'

const QnA = QNA[3];

function Q4(props) {
    // const Period = props.location.state.Period;
    // const Purpose = props.location.state.Purpose;
    // const Tol = props.location.state.Tolerance;
    const Res = props.location.state.Res;

    console.log(Res);

    const [Response, getResponse] = useState('Not Selected');
    const [Sel, setSel] = useState(false);
    function SelButton({ Answer }) {

        const id = Answer.id;
        const answer = Answer.Answer;
        const explain = Answer.Explain;

        const onClick = () => {
            QnA.Answers.map(answer => (
                answer.State = false
            ));
            Answer.State = !Answer.State;
            getResponse(id);
            console.log(answer);
            setSel(true);
        }
        return (
            <div>
                <button 
                    className={'sel-button'} 
                    onClick={ onClick } 
                    style={{backgroundColor: Answer.State ? '#1d1a82':'#F7F7F7', color: Answer.State && 'White'}}>
                    {answer}
                    <div className={'small-text'} style={{marginTop: '0.5rem', color: Answer.State && '#F2F2F2'}}>
                        {explain}
                    </div>
                </button>
            </div>
        );
    }

    Res[QnA.page] = Response;
    
    return (
        <div className="App">
            <Header />
            <div className='Content'>
                <h3 className='page'>{ QnA.page }</h3> 
                <h1 className='question'>{ QnA.Question }</h1>
                {QnA.Answers.map(answer => (
                    <SelButton key= {answer.id} Answer= {answer}/>
                ))}
                {Sel ?  <NextButton Path={"/q5"} Res={Res} Text={'Next'}/> : <button disabled className='next'>Next</button> }
            </div>
        </div>
    );
}

export default Q4;