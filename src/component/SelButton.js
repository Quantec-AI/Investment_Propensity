import React, {useState} from 'react';

function SelButton(props) {
    const [tab, setTab] = useState('sel-button'); //버튼 스타일
    const onClick = () => {
        tab === "sel-button" ? setTab("on-sel-button") : setTab("sel-button");
    }
    return (
        <div>
            <button className={tab} onClick={onClick} value={props.value}>{props.answer}</button>
        </div>
    );
}

export default SelButton;