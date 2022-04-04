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
  const [RPeriod, getRPeriod] = useState({
    id: 0,
    Quest: "Nothing",
    Value: 0
  });
  const [RPurpose, getRPurpose] = useState({
      id: 0,
      Grade: "0등급",
      Name: "Nothing",
      Value: 0
    });
  const [RTolerance, getRTolerance] = useState({
    id: 0,
    Grade: '0등급', 
    Name: 'Notiong',
    Value: 0
  });
  const [RLiteracy, getRLiteracy] = useState({
    id: 0,
    Grade: '0등급', 
    Name: 'Notiong',
    Value: 0
  });
  const [RExperience, getRExperience] = useState({
    id: 0,
    Grade: '0등급', 
    Name: 'Notiong',
    Value: 0
  });

  const Period = props.location.state.Period.Period;
  const Purpose = props.location.state.Purpose.Purpose;
  const Tolerance = props.location.state.Tolerance.Tolerance;
  const Literacy = props.location.state.Literacy.Literacy;
  const Experience = props.location.state.Experience.Experience;

  // console.log(Period);
  // function GetGrade({per, pur, tol, lit, exp}) {
  //   //투자기간
    
  //   // 투자목적
  //   // if(pur>25) {
  //   //   return getRPurpose(Result_1.투자목적[0]);
  //   // }
  //   //위험감내수준

  //   //금융이해도

  //   //투자경험

  //   return (
  //     <div>
  //       <p>{RPeriod}</p>
  //     </div>
  //   );
  // }

  // switch(Period) {
  //   case '장기' :
  //     return getRPeriod((prevState) => {
  //       return {...prevState, id: Result_1.투자기간[0].id, Quest: Result_1.투자기간[0].Quest, Value: Result_1.투자기간[0].Value }
  //     });
  //   case '중장기' :
  //     return getRPeriod((prevState) => {
  //       return{...prevState, id: Result_1.투자기간[1].id, Quest: Result_1.투자기간[1].Quest, Value: Result_1.투자기간[1].Value }
  //     });
  //   case '중기_결혼':
  //     return getRPeriod((prevState) => {
  //       return{...prevState, id: Result_1.투자기간[2].id, Quest: Result_1.투자기간[2].Quest, Value: Result_1.투자기간[2].Value }
  //     });
  //   case '중기_집_차':
  //     return getRPeriod((prevState) => {
  //       return{...prevState, id: Result_1.투자기간[3].id, Quest: Result_1.투자기간[3].Quest, Value: Result_1.투자기간[3].Value }
  //     });
  //   case '단기':
  //     return getRPeriod((prevState) => {
  //       return{...prevState, id: Result_1.투자기간[4].id, Quest: Result_1.투자기간[4].Quest, Value: Result_1.투자기간[4].Value }
  //     });
  // }

  if(Period === '장기') {
    console.log(Period);
    return getRPeriod((prevState) => {
      return {...prevState, id: Result_1.투자기간[0].id, Quest: Result_1.투자기간[0].Quest, Value: Result_1.투자기간[0].Value }
    });
  }

  console.log(Period);

  return (
    <div className="App">
      <ul>{Period}</ul>
      <ul>{Purpose}</ul>
      <ul>{Tolerance}</ul>
      <ul>{Literacy}</ul>
      <ul>{Experience}</ul>
      {/* <GetGrade per={Period} pur={Purpose}/> */}
      <p>{RPeriod}</p>
      <p>{RPurpose}</p>
      <p>{RTolerance}</p>
      <p>{RLiteracy}</p>
      <p>{RExperience}</p>
    </div>
  );
}


export default Result;
