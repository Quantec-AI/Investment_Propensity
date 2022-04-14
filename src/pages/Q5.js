import React, { useState } from 'react';
import Header from '../component/Header';
import NextButton from '../component/NextButton';
import QNA from '../content/QNA'

const QnA = QNA[4];

function Q5(props) {
    // const Period = props.location.state.Period;
    // const Purpose = props.location.state.Purpose;
    // const Tolerance = props.location.state.Tolerance;
    const Res = props.location.state.Res;
    const ResponseList = [];

    // console.log(Answers);
    // const [Response, getResponse] = useState("Not Selected");
    const [Sel, setSel] = useState(false);
    const [a, setA] = useState(false); // 렌더링을 위해.. 임의로 넣음

    function MulSelection({ Answer }) {
        const id = Answer.id;
        const answer = Answer.Answer;

        const onClick = () => {
            Answer.State = !Answer.State;
            // const state = Answer.State;
            // Answer.State === false ? getLiteracy( Literacy - value ):getLiteracy( Literacy + value ); 
            // console.log(answer);
            setSel(true);
            Answer.State === false ? setA(-id): setA(id);
        };
        return (
            <div>
                <li className={'ell-comp'} onClick={onClick} style={{backgroundColor: Answer.State ? '#1d1a82':'#F7F7F7', color: Answer.State && 'White'}}>{answer}</li>
            </div>
        );
    }
    
    // QnA.Answers.map(answer => );
    QnA.Answers.map(answer => (
        answer.State && ResponseList.push(answer.id)
    ));
    // console.log(QnA.Answers);
    Res[QnA.page] = ResponseList;


    return (
        <div className="App">
            <Header />
            <div className='Content'>
                <h3 className='page'>{ QnA.page }</h3> 
                <h1 className='question'>{ QnA.Question }</h1>
                <div className={'ell-body'}>
                    {QnA.Answers.map(answer => (
                        <MulSelection key= {answer.id} Answer={answer} />
                    ))}
                </div>
                <div style={{paddingTop: '0.5rem'}}></div>
                {Sel ?  <NextButton Path={"/q6"} Res={Res} Text={'Next'}/> : <button disabled className='next'>Next</button> }
            </div>
        </div>
    );
}

export default Q5;