import React from 'react';

function SelButton({ answer, value }) {
    // const [tab, setTab] = useState('sel-button'); //버튼 스타일
    const onClick = () => {
        console.log({ value })
    }
    return (
        <div>
            <button className={'sel-button'} value={value}>{answer}</button>
        </div>
    );
}

export default SelButton;