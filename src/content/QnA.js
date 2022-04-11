const QNA = [
    { //1번 페이지: id, page, Question, Answers{id, Answer, Value, State}
        id:1, 
        page: 1,
        Question: "투자를 시작한 이유가\n궁금해요!", 
        Answers: [
            {
            id: 1, 
            Answer: "단기 목표: 학자금, 여행 등을 위한 자금 마련", 
            Value: "단기",
            State: false
            },
            {
            id:2, 
            Answer: "중기 목표: 집과 차 구입을 위해서", 
            Value: "중기_집_차",
            State: false
            },
            {
            id:3,
            Answer: "중기 목표: 결혼 자금을 위해", 
            Value: "중기_결혼",
            State: false
            },
            {
            id:4, 
            Answer: "중장기 목표: 자녀 교육 자금을 모으기 위해", 
            Value: "중장기",
            State: false
            },
            {
            id:5, 
            Answer: "장기 목표: 넉넉한 노후를 위한 투자", 
            Value: "장기",
            State: false
            }
        ]
    },
    { //2번 페이지: id, page, Question, Answers{id, Answer, Value, State}
        id:2, 
        page: 2,
        Question: "1억을 투자, 1년동안\n이정도는 땡겨야지!", 
        Answers: [
            {
                id:1,
                Answer: "200만원(수익률 2%, 100%확률)", 
                Value: 0,
                State: false
            },
            {
                id:2,
                Answer: "500만원(수익률 5%, 80%확률)", 
                Value: 10,
                State: false
            },
            {
                id:3,
                Answer: "1000만원(수익률 10%, 50%확률)", 
                Value: 20,
                State: false
            },
            {
                id:4,
                Answer: "5000만원(수익률 50%, 20%확률)", 
                Value: 30,
                State: false
            },
            {
                id:5,
                Answer: "1억(수익률 100%, 8%확률)", 
                Value: 40,
                State: false
            }
        ]
    },
    { //3번 페이지: id, page, Question, Answers{id, Answer, Value, State}
        id:3, 
        page: 3,
        Question: "투자할 때 '손실'에 대한\n나의 의견은?", 
        Answers: [
            {
                id: 1,
                Answer: "무슨 일이 있어도 원금은 지켜야 해요", 
                Value: 0,
                State: false
            },
            { 
                id:2,
                Answer: "손실은 최소화해야 해요", 
                Value: 10,
                State: false
            },
            {
                id:3, 
                Answer: "수익을 위한 약간의 손실 정도는 괜찮아", 
                Value: 20,
                State: false
            },
            {
                id:4,
                Answer: "High Risk, High Return!", 
                Value: 30,
                State: false
            }
        ]
    },
    { //4번 페이지: id, page, Question, Answers{id, Answer, Explain, Value, State}
        id:4, 
        page:4,
        Question: "내 자산 10억으로 투자할\n상품을 골라주세요!", 
        Answers: [
            {
                id:1,
                Answer: "초저위험 상품", 
                Explain: "(최선의 경우 100만원 이익, 최악의 경우 0원 손실)",
                Value: 0,
                State: false
            },
            {
                id:2,
                Answer: "저위험 상품", 
                Explain: "(최선의 경우 300만원 이익, 최악의 경우 100만원 손실)",
                Value: 8,
                State: false
            },
            {
                id:3,
                Answer: "중위험 상품", 
                Explain: "(최선의 경우 천만원 이익, 최악의 경우 300만원 손실)",
                Value: 16,
                State: false
            },
            {
                id:4,
                Answer: "고위험 상품",
                Explain: "(최선의 경우 3천만원 이익, 최악의 경우 천만원 손실)",
                Value: 24,
                State: false
            },
            {
                id:5,
                Answer: "초고위험 상품", 
                Explain: "(최선의 경우 5천만원 이익, 최악의 경우 2천만원 손실)",
                Value: 30,
                State: false
            }
        ]
    },
    { //5번 페이지: id, page, Question, Answers{id, Answer, Value, State}
        id:5,
        page: 5,
        Question: "아는 투자 단어들을\n모두 골라주세요!", 
        Answers: [
            {
                id:1, 
                Answer: "PER", 
                Value: 1,
                State: false
            },
            {
                id:2, 
                Answer: "KPI", 
                Value: -2,
                State: false
            },
            {
                id:3, 
                Answer: "유상증자", 
                Value: 1,
                State: false
            },
            {
                id:4, 
                Answer: "ETF", 
                Value: 1,
                State: false
            },
            {
                id:5, 
                Answer: "세액공제", 
                Value: -2,
                State: false
            },
            {
                id:6, 
                Answer: "공매도", 
                Value: 1,
                State: false
            },
            {
                id:7, 
                Answer: "ROA", 
                Value: 1,
                State: false
            },
            {
                id:8, 
                Answer: "FPS", 
                Value: -2,
                State: false
            },
            {
                id:9, 
                Answer: "인덱스", 
                Value: 1,
                State: false
            },
            {
                id:10, 
                Answer: "MTS", 
                Value: 1,
                State: false
            },
            {
                id:11,
                Answer: "BTS", 
                Value: -2,
                State: false
            },
            {
                id:12,
                Answer: "증거금", 
                Value: 1,
                State: false
            },
            {
                id:13,
                Answer: "코스피", 
                Value: 1,
                State: false
            },
            {
                id:14, 
                Answer: "반모", 
                Value: -2,
                State: false
            },
            {
                id:15,
                Answer: "IPO", 
                Value: 1,
                State: false
            }
        ]
    },
    { //6번 페이지: id, page, Question, Answers{id, Answer, Value, State}
        id:6,
        page: 6,
        Question: "내가 주식을 시작한지\n어언...", 
        Answers: [
            {
                id:1, 
                Answer: "6개월 이하", 
                Value: 0,
                State: false
            },
            {
                id:2, 
                Answer: "7개월 ~ 1년", 
                Value: 10,
                State: false
            },
            {
                id:3,
                Answer: "1년 ~ 5년", 
                Value: 20,
                State: false
            },
            {
                id:4,
                Answer: "5년 ~ 10년", 
                Value: 30,
                State: false
            },
            {
                id:5,
                Answer: "10년 이상", 
                Value: 40,
                State: false
            }
        ]
    }
];

export default QNA;