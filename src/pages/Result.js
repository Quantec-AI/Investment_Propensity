import React, { useState } from 'react';
import '../App.css';

const Result_1 = {
  투자기간: [
    {
      id: 1,
      Quest: "편안한 노후를 맞이하라!",
      Value: 4
    },
    {
      id: 2,
      Quest: "아들딸에게 좋은 교육의 기회를 제공하자!",
      Value: 3
    },
    {
      id: 3,
      Quest: "결혼 자금을 마련해 결혼에 골인하라!",
      Value: 2
    },
    {
      id: 4,
      Quest: "집과 차를 위한 자금을 마련하라!",
      Value: 2
    },
    {
      id: 5,
      Quest: "여유자금을 마련하라!",
      Value: 1
    }
  ],
  투자목적: [
    {
      id: 1,
      Grade: "1등급",
      Name: "High Risk",
      Value: 4
    },
    {
      id: 2,
      Grade: "2등급",
      Name: "Low Risk",
      Value: 3
    },
    {
      id: 3,
      Grade: "3등급",
      Name: "Market Neutral",
      Value: 2
    },
    {
      id: 4,
      Grade: "4등급",
      Name: "Risk Hedging",
      Value: 1
    },
  ],
  위험감내수준: [
    {
      id: 1,
      Grade: '1등급', 
      Name: 'Maximal',
      Value: 6
    },
    {
      id: 2,
      Grade: '2등급', 
      Name: 'Parial',
      Value: 4
    },
    {
      id: 3,
      Grade: '3등급', 
      Name: 'Minimum',
      Value: 2
    },
    {
      id: 4,
      Grade: '4등급', 
      Name: 'No',
      Value: -30
    }
  ],
  금융이해도: [
    {
      id: 1,
      Grade: "1등급",
      Name: "Advanced",
      Value: 4
    },
    {
      id: 2,
      Grade: "1등급",
      Name: "High",
      Value: 4
    },
    {
      id: 3,
      Grade: "2등급",
      Name: "Low",
      Value: 2
    },
    {
      id: 4,
      Grade: "2등급",
      Name: "Rare",
      Value: 2
    }
  ],
  투자경험: [
    {
      id: 1,
      Grade: "1등급",
      Name: "High Risk Assets",
      Value: 4
    },
    {
      id: 2,
      Grade: "1등급",
      Name: "Medium Risk Assets",
      Value: 4
    },
    {
      id: 3,
      Grade: "2등급",
      Name: "Low Risk Assets",
      Value: 2
    },
    {
      id: 4,
      Grade: "2등급",
      Name: "Savings",
      Value: 2
    }
  ]
}

function Result(props) {
  // const [RPeriod, getRPeriod] = useState({
  //   id: 0,
  //   Quest: "Nothing",
  //   Value: 0
  // });
  // const [RPurpose, getRPurpose] = useState({
  //     id: 0,
  //     Grade: "0등급",
  //     Name: "Nothing",
  //     Value: 0
  //   });
  // const [RTolerance, getRTolerance] = useState({
  //   id: 0,
  //   Grade: '0등급', 
  //   Name: 'Notiong',
  //   Value: 0
  // });
  // const [RLiteracy, getRLiteracy] = useState({
  //   id: 0,
  //   Grade: '0등급', 
  //   Name: 'Notiong',
  //   Value: 0
  // });
  // const [RExperience, getRExperience] = useState({
  //   id: 0,
  //   Grade: '0등급', 
  //   Name: 'Notiong',
  //   Value: 0
  // });

  const Period = props.location.state.Period.Period;
  const Purpose = props.location.state.Purpose.Purpose;
  const Tolerance = props.location.state.Tolerance.Tolerance;
  const Literacy = props.location.state.Literacy.Literacy;
  const Experience = props.location.state.Experience.Experience;

  const idx_array = [-1, -1, -1, -1, -1]; //투자기간, 투자목적, 위험감내도, 금융이해도, 투자경험

  let Quest = '퀘스트';
  let Weapon = {weapon: '', power: 0};
  let Shield = {shield: '', power: 0};
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
    // console.log('Quest is ', Quest);
    // console.log('Score is ', Score);

    return idx;
  }
  function SetPurpose() { //투자 목적 Index 세팅
    let idx = -1;
    console.log('투자 목적 응답: ', Purpose);
    if(Purpose >= 26) {
      idx = 0;
      console.log('Purpose Index: ', idx);
    } else if (Purpose > 16 && Purpose < 26) { 
      idx = 1;
      console.log('Purpose Index: ', idx);
    } else if (Purpose > 6 && Purpose < 16) {
      idx = 2;
      console.log('Purpose Index: ', idx);
    } else if (Purpose <= 6) {
      idx = 3;
      console.log('Purpose Index: ', idx);
    } else {
      console.log('No result');
    }

    // Quest = Result_1.투자기간[idx].Quest;
    // Score = Score + Result_1.투자기간[idx].Value;
    // console.log('Quest is ', Quest);
    // console.log('Score is ', Score);

    return idx;
  }


  return (
    <div className="App">

      <ul>{Period}</ul>
      <ul>{Purpose}</ul>
      <ul>{Tolerance}</ul>
      <ul>{Literacy}</ul>
      <ul>{Experience}</ul>
      {idx_array[0] = <SetPeriod/>}
      {idx_array[1] = <SetPurpose/>}
      <div>Period: {idx_array[0]}</div>
      <div>Purpose: {idx_array[1]}</div>
      <div>Tolerance: {idx_array[2]}</div>
      <div>Literacy: {idx_array[3]}</div>
      <div>Experience: {idx_array[4]}</div>
      <ul>Quest: {Quest} </ul>
      <ul>Score: {Score} </ul>
    </div>
  );
}


export default Result;
