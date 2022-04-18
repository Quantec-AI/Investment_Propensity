import React from 'react';
import '../App.css';
import Header from '../component/Header';
import RESULT from '../content/RESULT';
import TYPE from '../content/TYPE';
import NextButton from '../component/NextButton';
import QNA from '../content/QNA';

const Result = RESULT;
const Type = TYPE;

function First_Result(props) {
  const Res = props.location.state.Res;

  //Set Period Value - Q1
  const Per_Quest = Res[1];
  //Set Purpose Value - Q2
  const Pur1 = QNA[1].Answers.find(function(data) {
    return data.id === Res[2]
  });
  //Set Tolerance Value - Q3, Q4
  const Tol1 = QNA[2].Answers.find(function(data) {
    return data.id === Res[3]
  });
  const Tol2 = QNA[3].Answers.find(function(data) {
    return data.id === Res[4]
  });
  //Set Literacy Value - Q5 (Sum of All Response)
  let Literacy = 0; //-> Literacy value
  let tmp = []; //-> 값 보관함 
  for(let i = 0; i <Res[5].length; i++){
    tmp[i] = QNA[4].Answers.find(function(data){
      return data.id === Res[5][i]
    });
    Literacy = Literacy + tmp[i].Value;
    // console.log('Literacy: ', Literacy, "Value: ", tmp[i].Value);
  };
  //Set Experience Value - Q6
  const Exp1 = QNA[5].Answers.find(function(data) {
    return data.id === Res[6]
  });

  // const Period = Per.Value;
  const Purpose = Pur1.Value;
  const Tolerance = (Tol1.Value + Tol2.Value)/2;
  //Literacy
  const Experience = Exp1.Value;

  const a_idx = [-1, -1, -1, -1, -1]; //투자기간, 투자목적, 위험감내도, 금융이해도, 투자경험
  let TypeIdx = -1; // 투자유형

  let Score = 0;

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

  //투자 성향 점수 계산
  Score = (Result.투자목적[a_idx[1]].Value + Result.위험감내수준[a_idx[2]].Value + Result.금융이해도[a_idx[3]].Value + Result.투자경험[a_idx[4]].Value);

  function SetType() { //투자 성향 캐릭터 Index 세팅
    const idx = (Score >= 15) ? 0 :
      (13 <= Score < 15)  ? 1 :
      (11 <= Score < 13) ? 2 : 
      (7 <= Score < 11) ? 3 : 
      (Score < 7) ? 4 :
      console.log('No Result');
    console.log('투자 성향 점수: ', Score, '\n투자 성향 Index: ', idx);
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
                  <div style={{width: '64px', height: '64px', backgroundColor:'gray', textAlign:'center'}}>
                  {Result.금융이해도[a_idx[3]].Level}
                  </div>
                  <div style={{marginTop: 'auto', marginBottom:'auto', marginLeft:'0.5rem'}}>
                    <b>{Result.금융이해도[a_idx[3]].Weapon}</b>
                  </div>
                </div>
                <div className='Item'>
                  <div style={{width: '64px', height: '64px', backgroundColor:'gray', textAlign:'center'}}>
                    {Result.위험감내수준[a_idx[2]].Level}
                  </div>
                  <div style={{marginTop: 'auto', marginBottom:'auto', marginLeft:'0.5rem'}}>
                    <b>{Result.위험감내수준[a_idx[2]].Shield}</b>
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
        <NextButton Path={"/q7"} Res={Res} Text={'테스트 이어하기'}/>
        <NextButton Path={"/"} Per={0} Pur={0} Tol={0} Lit={0} Exp={0} Text={'테스트 다시하기'}/>
        <div style={{fontSize: '0.8rem', color: '#A7A8A3', textAlign:'left', padding: '1rem'}}>
          - 칼과 방패는 각각 금융이해도와 위험감내도로 정해집니다. <br/>
          - 테스트 이어하기 버튼을 눌러 더 정확한 투자성향을 확인할 수 있습니다. 
        </div>
      </div>
    </div>
  );
}


export default First_Result;
