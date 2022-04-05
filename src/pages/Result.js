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

  const Quest = '퀘스트';
  const Weapon = {weapon: '', power: 0};
  const Shield = {shield: '', power: 0};
  const Score = 0;

  // const [Quest, setQuest] = useState('퀘스트');
  // const [Weapon, setWeapon] = useState({weapon: '', power: false});
  // const [Shield, setShield] = useState({shield: '', power: false});
  // const [Score, getScore] = useState(0);

  // function SetPeriod({ P }) {
  //   if(P === '장기') {
  //     setQuest(Result_1.투자기간[0].Quest);
  //     getScore(Score + Result_1.투자기간[0].Value);
  //     console.log('Quest is ', Quest);
  //     console.log('Score is ', Score);
  //   } else if (P === '중장기') { 
  //     setQuest(Result_1.투자기간[1].Quest);
  //     getScore(Score + Result_1.투자기간[1].Value);
  //     console.log('Quest is ', Quest);
  //     console.log('Score is ', Score);
  //   } else if (P === '중기_결혼') {
  //     setQuest(Result_1.투자기간[2].Quest);
  //     getScore(Score + Result_1.투자기간[2].Value);
  //     console.log('Quest is ', Quest);
  //     console.log('Score is ', Score);
  //   } else if (P === '중기_집_차') {
  //     setQuest(Result_1.투자기간[3].Quest);
  //     getScore(Score + Result_1.투자기간[3].Value);
  //     console.log('Quest is ', Quest);
  //     console.log('Score is ', Score);
  //   } else if (P === '단기') {
  //     setQuest(Result_1.투자기간[4].Quest);
  //     getScore(Score + Result_1.투자기간[4].Value);
  //     console.log('Quest is ', Quest);
  //     console.log('Score is ', Score);
  //   } else {
  //     console.log('No result');
  //   }
  //   return (
  //     <div>
  //       <h2>Quest</h2>
  //       <div>{Quest}</div>
  //     </div>
  //   );
  // }

  // function SetPeriod({ P }) {
  //   switch(P) {
  //     case '장기':
  //       setQuest(Result_1.투자기간[0].Quest);
  //       getScore(Score + Result_1.투자기간[0].Value);
  //       console.log('Quest is ', Quest);
  //       console.log('Score is ', Score);
  //     break;
  //     case '중장기':
  //       setQuest(Result_1.투자기간[1].Quest);
  //       getScore(Score + Result_1.투자기간[1].Value);
  //       console.log('Quest is ', Quest);
  //       console.log('Score is ', Score);
  //     break;
  //     case '중기_결혼':
  //       setQuest(Result_1.투자기간[2].Quest);
  //       getScore(Score + Result_1.투자기간[2].Value);
  //       console.log('Quest is ', Quest);
  //       console.log('Score is ', Score);
  //     break;
  //     case '중기_집_차':
  //       setQuest(Result_1.투자기간[3].Quest);
  //       getScore(Score + Result_1.투자기간[3].Value);
  //       console.log('Quest is ', Quest);
  //       console.log('Score is ', Score);
  //     break;
  //     case '단기':
  //       setQuest(Result_1.투자기간[4].Quest);
  //       getScore(Score + Result_1.투자기간[4].Value);
  //       console.log('Quest is ', Quest);
  //       console.log('Score is ', Score);
  //     break;
  //     default:
  //       console.log('No result');
  //   }
  //   return null;
  // }

  return (
    <div className="App">

      <ul>{Period}</ul>
      <ul>{Purpose}</ul>
      <ul>{Tolerance}</ul>
      <ul>{Literacy}</ul>
      <ul>{Experience}</ul>
    </div>
  );
}


export default Result;
