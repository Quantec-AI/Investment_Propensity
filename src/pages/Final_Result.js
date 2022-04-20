import React from 'react';
import '../App.css';
import Header from '../component/Header';
import RESULT from '../content/RESULT';
import Final_TYPE from '../content/FinalTYPE';
import NextButton from '../component/NextButton';
import QNA from '../content/QNA';
import { ComposedChart, XAxis, YAxis, Tooltip, Legend, CartesianGrid, Area, Line } from 'recharts';

const Result = RESULT;
const Final_Type = Final_TYPE;
  

function Final_Result(props) {
    const Res = props.location.state.Res;
    console.log(Res);

    //Set Period Value - Q1
    const Per_Quest = Res[1];
    const Per = QNA[0].Answers.find(function(data) {
        return data.id === Res[1]
    });
    //Set Purpose Value - Q2
    const Pur1 = QNA[1].Answers.find(function(data) {
        return data.id === Res[2]
    });
    //Set Tolerance Value - Q3
    const Tol1 = QNA[2].Answers.find(function(data) {
        return data.id === Res[3]
    });
    //Set Tolerance Value - Q4
    const Tol2 = QNA[3].Answers.find(function(data) {
        return data.id === Res[4]
    });
    //Set Literacy Value - Q5 (Sum of All Response)
    let Lit1 = 0; //-> Literacy value
    let tmp_lit = []; //-> 값 보관함 
    for(let i = 0; i <Res[5].length; i++){
        tmp_lit[i] = QNA[4].Answers.find(function(data){
            return data.id === Res[5][i]
        });
        Lit1 = Lit1 + tmp_lit[i].Value;
    };
    //Set Experience Value - Q6
    const Exp1 = QNA[5].Answers.find(function(data) {
        return data.id === Res[6]
    });
    //Set Purpose Value - Q7
    let Pur2 = 0; //-> Pur2 value
    let tmp_pur = []; //-> 값 보관함 
    for(let i = 0; i <Res[7].length; i++){
        tmp_pur[i] = QNA[6].Answers.find(function(data){
            return data.id === Res[7][i]
        });
        Pur2 = Pur2 + tmp_pur[i].Value;
    };
    //Just Section - Q8

    //Set Tolerance Value - Q9
    const Tol3 = QNA[8].Answers.find(function(data) {
        return data.id === Res[9]
    });
    //Set Tolerance Value - Q10
    const Tol4 = QNA[9].Answers.find(function(data) {
        return data.id === Res[10]
    });
    //Set Literacy Value - Q11
    const Lit2 = QNA[10].Answers.find(function(data) {
        return data.id === Res[11]
    });
    //Set Literacy Value - Q12
    const Lit3 = QNA[11].Answers.find(function(data) {
        return data.id === Res[12]
    });
    //Set Experience Value - Q13
    const Exp2 = QNA[12].Answers.find(function(data) {
        return data.id === Res[13]
    });
    //Set Personal Info : Gender - Q14
    const Gender = QNA[13].Answers.find(function(data) {
        return data.id === Res[14]
    });
    //Set Personal Info : Age - Q15
    const Age = QNA[14].Answers.find(function(data) {
        return data.id === Res[15]
    });
    //Set Personal Info : Income - Q16
    const Income = QNA[15].Answers.find(function(data) {
        return data.id === Res[16]
    });
    //Set Personal Info : Invest Money - Q17
    const Money = Res[17];
    //Set Personal Info : Invest Property - Q18
    const Property = QNA[17].Answers.find(function(data) {
        return data.id === Res[18]
    });

    const Period = Per.Value;
    const Purpose = Pur1.Value + Pur2;
    const Tolerance = (Tol1.Value + Tol2.Value)/2 + Tol3.Value + Tol4.Value;
    const Literacy = Lit1 + Lit2.Value + Lit3.Value;
    const Experience = (Exp1.Value + Exp2.Value)/2;

    const a_idx = [-1, -1, -1, -1, -1]; //투자기간, 투자목적, 위험감내도, 금융이해도, 투자경험
    let TypeIdx = -1; // 투자유형

    function SetPeriod() { //투자 기간 Index 세팅
        const idx = (Per_Quest === 5) ? 0 :
            (Per_Quest === 4) ? 1 :
            (Per_Quest === 3) ? 2 : 
            (Per_Quest === 2) ? 3 : 
            (Per_Quest === 1) ? 4 :
            console.log('No Result');
        console.log('투자 기간 응답: ', Per_Quest, '\n투자 기간 Index: ', idx);
        return idx;
    }
    function SetPurpose() { //투자 목적 Index 세팅
        const idx = (Purpose >= 26) ? 0 :
            (16 <= Purpose < 26) ? 1 :
            (6 <= Purpose < 16) ? 2 : 
            (Purpose < 6) ? 3 : 
            console.log('No Result');
        console.log('투자 목적 응답: ', Purpose, '\n투자 목적 Index: ', idx);
        return idx;
    }
    function SetTolerance() { //위험 감내도 Index 세팅
        const idx = (Tolerance >= 26) ? 0 :
            (16 <= Tolerance < 26) ? 1 :
            (6 <= Tolerance < 16) ? 2 : 
            (Tolerance < 6) ? 3 : 
            console.log('No Result');
        console.log('위험 감내도 응답: ', Tolerance, '\n위험 감내도 Index: ', idx);
        return idx;
    }
    function SetLiteracy() { //금융 이해도 Index 세팅
        const idx = (Literacy >= 8) ? 0 :
            (6 <= Literacy < 8) ? 1 :
            (3 <= Literacy < 6) ? 2 : 
            (Literacy < 3) ? 3 : 
            console.log('No Result');
        console.log('금융 이해도 응답: ', Literacy, '\n금융 이해도 Index: ', idx);
        return idx;
    }
    function SetExperience() { //투자 경험 Index 세팅
        const idx = (Experience >= 31) ? 0 :
            (21 <= Experience < 31) ? 1 :
            (11 <= Experience < 21) ? 2 : 
            (Experience < 11) ? 3 : 
            console.log('No Result');

        console.log('투자 경험 응답: ', Experience, '\n투자 경험 Index: ', idx);
        return idx;
    }

    a_idx[0] = SetPeriod();
    a_idx[1] = SetPurpose();
    a_idx[2] = SetTolerance();
    a_idx[3] = SetLiteracy();
    a_idx[4] = SetExperience();

    //토탈 점수 계산
    const Total_Score = (Result.투자목적[a_idx[1]].Value + Result.위험감내수준[a_idx[2]].Value + Result.금융이해도[a_idx[3]].Value + Result.투자경험[a_idx[4]].Value + Period + Age.Value + Income.Value + Property.Value);
    //투자 성향 점수 계산
    const Score = (Result.투자목적[a_idx[1]].Value + Result.위험감내수준[a_idx[2]].Value + Result.금융이해도[a_idx[3]].Value + Result.투자경험[a_idx[4]].Value);

    //투자 성향 캐릭터 Index 세팅
    function SetType() { 
        console.log('Total Score is... ', Total_Score, '\nScore is... ',Score);
        const idx = ((Total_Score >=31) &&(16 <= Score <= 18)) ? 0 :
            ((Total_Score >=31) && (14 <= Score <= 15)) ? 1 :
            ((Total_Score >=31) && (12 <= Score <= 13)) ? 2 :
            ((23<= Total_Score <=30) && (14 <= Score <= 18)) ? 3 :
            ((23<= Total_Score <=30) && (12 <= Score <= 13)) ? 4 :
            ((23<= Total_Score <=30) && (7 <= Score <= 11)) ? 5 :
            ((18<= Total_Score <=22) && (14 <= Score <= 18)) ? 6 :
            ((18<= Total_Score <=22) && (12 <= Score <= 13)) ? 7 :
            ((18<= Total_Score <=22) && (7 <= Score <= 11)) ? 8 :
            ((6<= Total_Score <=17) && (Score === 13)) ? 9 :
            ((6<= Total_Score <=17) && (11 <= Score <= 12)) ? 10 :
            ((6<= Total_Score <=17) && (17 <= Score <= 10)) ? 11 :
            (Total_Score <=5) ? 12 : 
            console.log('Error Type');
        return idx;
    }

    TypeIdx = SetType();

    const MIN = Final_Type[TypeIdx].Min;
    const MAX = Final_Type[TypeIdx].Max;
    const REV = Final_Type[TypeIdx].Revenuse;

    // let covMoney = 0;
    // let covUnits = '';

    function valueLabelFormat(Money) {
      
        let scaledValue = Money;
          
        if(scaledValue < 10000) {
          scaledValue = Math.round(scaledValue/10)*10;
        }

        while (scaledValue >= 10000) {
            scaledValue /= 10000;
        }
        return parseInt(scaledValue);
    }

    function valueFormat(Money) {
        const units = ['만원', '억원'];
        let unitIndex = 0;

        while (Money >= 10000 && unitIndex < units.length - 1) {
            unitIndex += 1;
            Money /= 10000;
        }
        return units[unitIndex];
    }

    // const a = valueLabelFormat(Money);
    // console.log(a);
    const covMoney = valueLabelFormat(Money);
    const covUnits = valueFormat(Money);

    const data2 = [
        {
          "year": "현재",
          "예상수익범위": [covMoney, covMoney],
          "예상수익": covMoney
        },
        {
          "year": "5년",
          "예상수익범위": [((MIN/8*covMoney)*(1)+covMoney), ((MAX/8*covMoney)*(1)+covMoney)],
          "예상수익": ((REV/8*covMoney)*(1)+covMoney)
        },
        {
          "year": "10년",
          "예상수익범위": [((MIN/8*covMoney)*(2)+covMoney), ((MAX/8*covMoney)*(2)+covMoney)],
          "예상수익": ((REV/8*covMoney)*(2)+covMoney)
        },
        {
          "year": "15년",
          "예상수익범위": [((MIN/8*covMoney)*(3)+covMoney), ((MAX/8*covMoney)*(3)+covMoney)],
          "예상수익": ((REV/8*covMoney)*(3)+covMoney)
        },
        {
          "year": "20년",
          "예상수익범위": [((MIN/8*covMoney)*(4)+covMoney), ((MAX/8*covMoney)*(4)+covMoney)],
          "예상수익": ((REV/8*covMoney)*(4)+covMoney)
        },
        {
          "year": "25년",
          "예상수익범위": [((MIN/8*Money)*(5)+covMoney), ((MAX/8*covMoney)*(5)+covMoney)],
          "예상수익": ((REV/8*covMoney)*(5)+covMoney)
        },
        {
          "year": "30년",
          "예상수익범위": [((MIN/8*covMoney)*(6)+covMoney), ((MAX/8*covMoney)*(6)+covMoney)],
          "예상수익": ((REV/8*covMoney)*(6)+covMoney)
        },
        {
          "year": "35년",
          "예상수익범위": [((MIN/8*covMoney)*(7)+covMoney), ((MAX/8*covMoney)*(7)+covMoney)],
          "예상수익": ((REV/8*covMoney)*(7)+covMoney)
        },
        {
          "year": "40년",
          "예상수익범위": [((MIN/8*covMoney)*(8)+covMoney), ((MAX/8*covMoney)*(8)+covMoney)],
          "예상수익": ((REV/8*covMoney)*(8)+covMoney)
        }
    ]
    const data = [
        {
          "year": "현재",
          "예상수익범위": [covMoney, covMoney],
          "예상수익": covMoney
        },
        {
          "year": "5년",
          "예상수익범위": [((MIN/100*covMoney)*(5)+covMoney), ((MAX/100*covMoney)*(5)+covMoney)],
          "예상수익": ((REV/100*covMoney)*(5)+covMoney)
        },
        {
          "year": "10년",
          "예상수익범위": [((MIN/100*covMoney)*(10)+covMoney), ((MAX/100*covMoney)*(10)+covMoney)],
          "예상수익": ((REV/100*covMoney)*(10)+covMoney)
        },
        {
          "year": "15년",
          "예상수익범위": [((MIN/100*covMoney)*(15)+covMoney), ((MAX/100*covMoney)*(15)+covMoney)],
          "예상수익": ((REV/100*covMoney)*(15)+covMoney)
        },
        {
          "year": "20년",
          "예상수익범위": [((MIN/100*covMoney)*(20)+covMoney), ((MAX/100*covMoney)*(20)+covMoney)],
          "예상수익": ((REV/100*covMoney)*(20)+covMoney)
        },
        {
          "year": "25년",
          "예상수익범위": [((MIN/100*covMoney)*(25)+covMoney), ((MAX/100*covMoney)*(25)+covMoney)],
          "예상수익": parseFloat(((REV/100*covMoney)*(25)+covMoney).toFixed(2))
        },
        {
          "year": "30년",
          "예상수익범위": [parseFloat(((MIN/100*covMoney)*(30)+covMoney).toFixed(2)), parseFloat(((MAX/100*covMoney)*(30)+covMoney).toFixed(2))],
          "예상수익": parseFloat(((REV/100*covMoney)*(30)+covMoney).toFixed(2))
        },
        {
          "year": "35년",
          "예상수익범위": [parseFloat(((MIN/100*covMoney)*(35)+covMoney).toFixed(2)), parseFloat(((MAX/100*covMoney)*(35)+covMoney).toFixed(2))],
          "예상수익": parseFloat(((REV/100*covMoney)*(35)+covMoney).toFixed(2))
        },
        {
          "year": "40년",
          "예상수익범위": [parseFloat(((MIN/100*covMoney)*(40)+covMoney).toFixed(2)), parseFloat(((MAX/100*covMoney)*(40)+covMoney).toFixed(2))],
          "예상수익": parseFloat(((REV/100*covMoney)*(40)+covMoney).toFixed(2))
        }
    ]

    console.log(typeof(Result.금융이해도[a_idx[3]].Img))
    console.log(typeof('../assets/weapon/weapon-lv2.svg'))

    const a = 2;

    return (
        <div className="App">
        <Header />
        <div className='Result'>  {/* style={{display: 'flex'}} */}
            <div> 
            <div> 
                <div className='Quest'> 
                <div style={{fontSize: '20px', fontWeight: '700', fontFamily: 'DungGeunMo'}}>Quest</div>
                <div>{Result.투자기간[a_idx[0]].Quest}</div>
                </div>
                {/* <img className='TypeImage'></img> */}
                <div className='TypeImage'></div>
                <h1 style={{color: '#fefefe', fontFamily: 'DungGeunMo', padding: '0.5rem'}}>{Final_Type[TypeIdx].Char}</h1>
            </div>
            <div className='Explain'>
                <div className='CharInfo'>
                    <div className='Table'>
                        <p><b>투자 목적</b>: {Result.투자목적[a_idx[1]].Grade}<span style={{color: '#A7A8A3', fontSize: '0.8rem', fontWeight:'800'}}> / 4등급</span></p>
                        <p><b>위험 감내도</b>: {Result.위험감내수준[a_idx[2]].Grade}<span style={{color: '#A7A8A3', fontSize: '0.8rem', fontWeight:'800'}}> / 4등급</span></p>
                        <p><b>금융 이해도</b>: {Result.금융이해도[a_idx[3]].Grade}<span style={{color: '#A7A8A3', fontSize: '0.8rem', fontWeight:'800'}}> / 2등급</span></p>
                        <p><b>투자 경험</b>: {Result.투자경험[a_idx[4]].Grade}<span style={{color: '#A7A8A3', fontSize: '0.8rem', fontWeight:'800'}}> / 2등급</span></p>
                    </div>

                    <div className='Bag'>
                        <div className='Item'>
                            <div style={{width: '64px', height: '64px', textAlign:'center'}}>
                                <img width={64} height={64} src={require(`../assets/weapon/weapon-lv${a}.svg`).default}/>  
                                {/* <img width={64} height={64} src={require(Result.금융이해도[a_idx[3]].Img).default}/>   */}
                            </div>
                            <div style={{marginTop: 'auto', marginBottom:'auto', marginLeft:'0.5rem'}}>
                                <b>{Result.금융이해도[a_idx[3]].Weapon}</b> <br/>
                                {Result.금융이해도[a_idx[3]].Level}
                            </div>
                        </div>
                        <div className='Item'>
                            <div style={{width: '64px', height: '64px', backgroundColor:'gray', padding: 'auto'}}>
                                <img width={50} height={50} src={require(`../assets/shield/shield-lv2.svg`).default}/>  
                                {/* <img width={50} height={50} src={`../assets/shield/shield-lv2.svg`}/> */}
                                {/* <img width={50} height={50} src={require(Result.위험감내수준[a_idx[2]].Level.Img).default}/>  */}
                            </div>
                            <div style={{marginTop: 'auto', marginBottom:'auto', marginLeft:'0.5rem'}}>
                                <b>{Result.위험감내수준[a_idx[2]].Shield}</b> <br/>
                                {Result.위험감내수준[a_idx[2]].Level}
                            </div>
                        </div>
                    </div>
                </div>
                <ComposedChart width={400} height={250} margin={{top: 20, bottom: 20}} data={data}>
                    <XAxis dataKey="year" tick={{fontSize: 10}} padding={{right: 20}}/>
                    <YAxis unit={covUnits} tick={{fontSize: 10}} padding={{bottom: 10}} />
                    <Tooltip />
                    <Legend tick={{fontSize: 10}} />
                    <CartesianGrid stroke="#f4f4f4" />
                    <Area type="monotone" dataKey="예상수익범위" fill="#FFB950" stroke="#FFB950" />
                    <Line type="monotone" dataKey="예상수익" stroke="#1D1A82" />
                </ComposedChart>
                {/* 캐릭터 설명 +  */}
                <div>
                <p>{Final_Type[TypeIdx].Content}</p>
                </div>
            </div>
            </div>
            <NextButton Path={"/"} Per={0} Pur={0} Tol={0} Lit={0} Exp={0} Text={'테스트 다시하기'}/>
            <div style={{fontSize: '0.8rem', color: '#A7A8A3', textAlign:'left', padding: '1rem'}}>
            - 칼과 방패는 각각 금융이해도와 위험감내도로 정해집니다. <br/>
            </div>
        </div>
        </div>
    );
}

export default Final_Result;
