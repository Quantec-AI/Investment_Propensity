const RESULT = {
    투자기간: [ // id, Quest, Value
      {
        id: 1,
        Quest: "편안한 노후를 맞이하라!",
        Value: 4
      },
      {
        id: 2,
        Quest: "자식들에게 좋은 교육의 기회를 제공하자!",
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
    투자목적: [ // id, Grade, Name, Value
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
    위험감내수준: [ // id, Grade, Name, Img, Shield, Level, Content, Value
      {
        id: 1,
        Grade: '1등급', 
        Name: 'Maximal',
        Img: '',
        Shield: '장난감 방패',
        Level: "Lv.1",
        Content: "",
        Value: 6
      },
      {
        id: 2,
        Grade: '2등급',
        Name: 'Parial',
        Img: '',
        Shield: '노멀 방패',
        Level: "Lv.2",
        Content: "",
        Value: 4
      },
      {
        id: 3,
        Grade: '3등급', 
        Name: 'Minimum',
        Img: '',
        Shield: '엘리트 방패',
        Level: "Lv.3",
        Content: "",
        Value: 2
      },
      {
        id: 4,
        Grade: '4등급', 
        Name: 'No',
        Img: '',
        Shield: '전설의 방패',
        Level: "Lv.4",
        Content: "",
        Value: -30
      }
    ],
    금융이해도: [ // id, Grade, Name, Img, Weapon, Level, Value
      {
        id: 1,
        Grade: "1등급",
        Name: "Advanced",
        Img: '',
        Weapon: "전설의 칼",
        Level: "Lv.4",
        Content: "",
        Value: 4
      },
      {
        id: 2,
        Grade: "1등급",
        Name: "High",
        Img: '',
        Weapon: "고급자의 칼",
        Level: "Lv.3",
        Content: "",
        Value: 4
      },
      {
        id: 3,
        Grade: "2등급",
        Name: "Low",
        Img: '',
        Weapon: "초급자의 칼",
        Level: "Lv.2",
        Content: "",
        Value: 2
      },
      {
        id: 4,
        Grade: "2등급",
        Name: "Rare",
        Img: '',
        Weapon: "장난감 칼",
        Level: "Lv.1",
        Content: "",
        Value: 2
      }
    ],
    투자경험: [ // id, Grade, Name, Value
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
  };

export default RESULT;