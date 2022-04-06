import React from 'react';
import '../App.css';
import RESULT from '../content/RESULT';
import TYPE from '../content/TYPE';

const Result = RESULT;
const Type = TYPE;

function First_Result(props) {

  const Period = props.location.state.Period.Period;
  const Purpose = props.location.state.Purpose.Purpose;
  const Tolerance = props.location.state.Tolerance.Tolerance;
  const Literacy = props.location.state.Literacy.Literacy;
  const Experience = props.location.state.Experience.Experience;

  const a_idx = [-1, -1, -1, -1, -1]; //투자기간, 투자목적, 위험감내도, 금융이해도, 투자경험
  let TypeIdx = -1; // 투자유형

  let Score = 0;

  function SetPeriod() { //투자 기간 Index 세팅
    let idx = -1;
    console.log('투자 기간 응답: ', Period);
    if(Period === '장기') {
      idx = 0;
      console.log('Period Index: ', idx);
    } else if (Period === '중장기') { 
      idx = 1;
      console.log('Period Index: ', idx);
    } else if (Period === '중기_결혼') {
      idx = 2;
      console.log('Period Index: ', idx);
    } else if (Period === '중기_집_차') {
      idx = 3;
      console.log('Period Index: ', idx);
    } else if (Period === '단기') {
      idx = 4;
      console.log('Period Index: ', idx);
    } else {
      console.log('No result');
    }

    // Quest = Result_1.투자기간[idx].Quest;
    // Score = Score + Result_1.투자기간[idx].Value;
    // console.log('Quest is: ', Quest);
    // console.log('Score is ', Score);

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

  //투자 성향 점수 계산
  Score = (Result.투자목적[a_idx[1]].Value + Result.위험감내수준[a_idx[2]].Value + Result.금융이해도[a_idx[3]].Value + Result.투자경험[a_idx[4]].Value);

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
    <div className="Result">
      {/* <h1>당신의 캐릭터는 아마도...</h1> */}
      <div className={'Quest'}>
        <h2>Quest</h2>
        <p>{Result.투자기간[a_idx[0]].Quest}</p>
      </div>
      <div> 
        <div className={'Column'}> 
          <h2>Character Info</h2>
          <h3>{Type[TypeIdx].Char}</h3>
          <p>{Type[TypeIdx].Content}</p>
          <ul>투자 목적: {Result.투자목적[a_idx[1]].Name}, {Result.투자목적[a_idx[1]].Grade}</ul>
          <ul>위험 감내도: {Result.위험감내수준[a_idx[2]].Name}, {Result.위험감내수준[a_idx[2]].Grade}</ul>
          <ul>금융 이해도: {Result.금융이해도[a_idx[3]].Name}, {Result.금융이해도[a_idx[3]].Grade}</ul>
          <ul>투자 경험: {Result.투자경험[a_idx[4]].Name}, {Result.투자경험[a_idx[4]].Grade}</ul>
        </div>
        <div className={'Column'}> 
          <h2>What's In My Bag?</h2>
          <h3>{Result.금융이해도[a_idx[3]].Weapon}</h3>
          <p>공격력: {Result.금융이해도[a_idx[3]].Power}</p>
          <h3>{Result.위험감내수준[a_idx[2]].Shield}</h3>
          <p>방어력: {Result.위험감내수준[a_idx[2]].Power}</p>
        </div>
      </div>
    </div>
  );
}


export default First_Result;
