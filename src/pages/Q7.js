import React, { useState } from 'react';
import Header from '../component/Header';
import NextButton from '../component/NextButton';
import QNA from '../content/QNA'

const QnA = QNA[6];

function Q7(props) {
    // const Period = props.location.state.Period;
    // const Pur = props.location.state.Purpose;
    // const Tolerance = props.location.state.Tolerance;
    // const Literacy = props.location.state.Literacy;
    // const Experience = props.location.state.Experience;
    const Res = props.location.state.Res;
    let ResponseList = [];
    // console.log(Res);
    // const [Purpose, getPurpose] = useState(Pur);
    const [Sel, setSel] = useState(false);
    const [a, setA] = useState(false); // 렌더링을 위해.. 임의로 넣음

    function MulSelection({ Answer }) {
        const id = Answer.id;
        const answer = Answer.Answer;
        const price = Answer.Price;

        const onClick = () => {
            Answer.State = !Answer.State;
            setSel(true);
            setA(id);
        };
        return (
            <div>
                <div className={'ell-comp'} onClick={onClick} style={{backgroundColor: Answer.State ? '#1d1a82':'#F7F7F7', color: Answer.State && 'White'}}>{answer}
                <div className={'small-text'} style={{marginTop: '0.5rem'}}>
                        {price}
                    </div>
                </div>
            </div>
        );
    }

    QnA.Answers.map(answer => (
        answer.State && ResponseList.push(answer.id)
    ));
    // console.log(QnA.Answers);
    Res[QnA.page] = ResponseList;
    console.timeLog(ResponseList);

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
                {Sel ?  <NextButton Path={"/q8"} Res={Res} Text={'Next'}/> : <button disabled className='next'>Next</button> }
            </div>
        </div>
    );
}

export default Q7;