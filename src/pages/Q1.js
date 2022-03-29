import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import SelButton from '../component/SelButton';
import NextButton from '../component/NextButton';

function Q1() {

  return (
    <div className="App">
      <h1>투자를 시작한 이유가 궁금해요!</h1>
      <SelButton answer="단기목표 : 학자금, 여행 등을 위한 자금 마련" value="단기"/>
      <SelButton answer="중기목표 : 집과 차 구입을 위해서" value="중기1"/>
      <SelButton answer="중기목표 : 결혼 자금 마련을 위해" value="중기2"/>
      <SelButton answer="중장기목표 : 자녀 교육 자금을 모으기 위해" value="중장기"/>
      <SelButton answer="장기목표 : 넉넉한 노후를 위한 투자" value="장기"/>
      <p></p>
      <Link to="/q2"><NextButton/></Link>
    </div>
  );
}

export default Q1;
