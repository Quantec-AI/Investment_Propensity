import React from 'react';
import '../App.css';
import Header from '../component/Header';
import RESULT from '../content/RESULT';
import TYPE from '../content/TYPE';
import Final_TYPE from '../content/FinalTYPE';
import NextButton from '../component/NextButton';
import QNA from '../content/QNA';

const Result = RESULT;
const Type = TYPE;
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
  let Literacy = 0; //-> Literacy value
  let tmp_lit = []; //-> 값 보관함 
  for(let i = 0; i <Res[5].length; i++){
    tmp_lit[i] = QNA[4].Answers.find(function(data){
      return data.id === Res[5][i]
    });
    Literacy = Literacy + tmp_lit[i].Value;
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
  //Set Experience Value - Q11 
  const Exp2 = QNA[10].Answers.find(function(data) {
    return data.id === Res[11]
  });
  //Set Personal Info : Gender - Q12
  const Gender = QNA[11].Answers.find(function(data) {
    return data.id === Res[12]
  });
  //Set Personal Info : Age - Q13 
  const Age = QNA[12].Answers.find(function(data) {
    return data.id === Res[13]
  });
  //Set Personal Info : Income - Q14
  const Income = QNA[13].Answers.find(function(data) {
    return data.id === Res[14]
  });
  //Set Personal Info : Invest Money - Q15
  const Money = QNA[14].Answers.find(function(data) {
    return data.id === Res[15]
  });
  //Set Personal Info : Invest Property - Q16
  const Property = QNA[15].Answers.find(function(data) {
    return data.id === Res[16]
  });

  const Period = Per.Value;
  const Purpose = Pur1.Value + Pur2;
  const Tolerance = (Tol1.Value + Tol2.Value)/2 + Tol3.Value + Tol4.Value;
  //Literacy
  const Experience = (Exp1.Value + Exp2.Value)/2;

//   console.log('Period: ', Period);
//   console.log('Purpose: ', Purpose);
//   console.log('Tolerance: ', Tolerance);
//   console.log('Literacy: ', Literacy);
//   console.log('Experience: ', Experience);

  const a_idx = [-1, -1, -1, -1, -1]; //투자기간, 투자목적, 위험감내도, 금융이해도, 투자경험
  let TypeIdx = -1; // 투자유형

//   let Score = 0;

  function SetPeriod() { //투자 기간 Index 세팅
    let idx = -1;
    console.log('투자 기간 응답: ', Period);
    if(Per_Quest === 5) {
      idx = 0;
      console.log('Period Index: ', idx);
    } else if (Per_Quest === 4) { 
      idx = 1;
      console.log('Period Index: ', idx);
    } else if (Per_Quest === 3) {
      idx = 2;
      console.log('Period Index: ', idx);
    } else if (Per_Quest === 2) {
      idx = 3;
      console.log('Period Index: ', idx);
    } else if (Per_Quest === 1) {
      idx = 4;
      console.log('Period Index: ', idx);
    } else {
      console.log('No result');
    }
    return idx;
  }
  function SetPurpose() { //투자 목적 Index 세팅
    let idx = -1;
    console.log('투자 목적 응답: ', Purpose);
    if(Purpose >= 26) {
      idx = 0;
      console.log('Purpose Index: ', idx);
    } else if (Purpose >= 16 && Purpose < 26) { 
      idx = 1;
      console.log('Purpose Index: ', idx);
    } else if (Purpose >= 6 && Purpose < 16) {
      idx = 2;
      console.log('Purpose Index: ', idx);
    } else if (Purpose < 6) {
      idx = 3;
      console.log('Purpose Index: ', idx);
    } else {
      console.log('No result');
    }
    return idx;
  }
  function SetTolerance() { //위험 감내도 Index 세팅
    let idx = -1;
    console.log('위험 감내도 응답: ', Tolerance);
    if(Tolerance >= 26) {
      idx = 0;
      console.log('Tolerance Index: ', idx);
    } else if (Tolerance >= 16 && Tolerance < 26) { 
      idx = 1;
      console.log('Tolerance Index: ', idx);
    } else if (Tolerance >= 6 && Tolerance <= 16) {
      idx = 2;
      console.log('Tolerance Index: ', idx);
    } else if (Tolerance < 6) {
      idx = 3;
      console.log('Tolerance Index: ', idx);
    } else {
      console.log('No result');
    }
    return idx;
  }
  function SetLiteracy() { //위험 감내도 Index 세팅
    let idx = -1;
    console.log('금융이해도 응답: ', Literacy);
    if(Literacy >= 8) {
      idx = 0;
      console.log('Literacy Index: ', idx);
    } else if (Literacy >= 6 && Literacy < 8) { 
      idx = 1;
      console.log('Literacy Index: ', idx);
    } else if (Literacy >= 3 && Literacy < 6) {
      idx = 2;
      console.log('Literacy Index: ', idx);
    } else if (Literacy < 3) {
      idx = 3;
      console.log('Literacy Index: ', idx);
    } else {
      console.log('No result');
    }
    return idx;
  }
  function SetExperience() { //투자 경험 Index 세팅
    let idx = -1;
    console.log('투자 경험 응답: ', Experience);
    if(Experience >= 31) {
      idx = 0;
      console.log('Experience Index: ', idx);
    } else if (Experience >= 21 && Experience < 31) { 
      idx = 1;
      console.log('Experience Index: ', idx);
    } else if (Experience >= 11 && Experience < 21) {
      idx = 2;
      console.log('Experience Index: ', idx);
    } else if (Experience < 11) {
      idx = 3;
      console.log('Experience Index: ', idx);
    } else {
      console.log('No result');
    }
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


  function SetType() { //투자 성향 캐릭터 Index 세팅
    let idx=-1;
    console.log('투자 성향 점수: ', Score);
    if(Score >= 15) {
      idx=0;
      console.log('캐릭터 Index: ', idx);
    } else if (Score >= 13 && Score < 15) { 
      idx=1;
      console.log('캐릭터 Index: ', idx);
    } else if (Score >= 11 && Score < 13) {
      idx=2;
      console.log('캐릭터 Index: ', idx);
    } else if (Score >= 7 && Score < 11) {
      idx=3;
      console.log('캐릭터 Index: ', idx);
    } else if (Score < 7) {
      idx = 4;
      console.log('Experience Index: ', idx);
    } else {
      console.log('No result');
    }
    return idx;
  }
  TypeIdx = SetType();

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
            <h1 style={{color: '#fefefe', fontFamily: 'DungGeunMo', padding: '0.5rem'}}>{Type[TypeIdx].Char}</h1>
            {/* <div className='Bag'></div> */}
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
                  <div>{Result.금융이해도[a_idx[3]].Weapon}
                    {/* <span style={{fontSize: '0.8rem', color:'#A7A8A3', fontWeight:'600'}}> (공격력: {Result.금융이해도[a_idx[3]].Level})</span> */}
                    <span> {Result.금융이해도[a_idx[3]].Level}</span>
                  </div>
                </div>
                <div className='Item'>
                  <div>{Result.위험감내수준[a_idx[2]].Shield}
                    {/* <span style={{fontSize: '0.8rem', color:'#A7A8A3', fontWeight:'600'}}> (방어력: {Result.위험감내수준[a_idx[2]].Level})</span> */}
                    <span> {Result.위험감내수준[a_idx[2]].Level}</span>
                  </div>
                </div>
              </div>
            </div>
            {/* 캐릭터 설명 +  */}
            <div>
              <p>{Type[TypeIdx].Content}</p>
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
