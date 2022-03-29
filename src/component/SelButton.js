import React, {useState} from 'react';

function SelButton(props) {
    // const [tab, setTab] = useState('sel-button'); //버튼 스타일
    const onClick = () => {
        props.getTextValue({value});
    }
    return (
        <div>
            <button className={'sel-button'} value={props.value}>{props.answer}</button>
        </div>
    );
}

export default SelButton;