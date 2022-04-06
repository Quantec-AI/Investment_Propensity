import React from 'react';

function NextButton({bool}) {
    return (
        <div>
            {/* <button className={bool ?'next':'dis_next'} disabled={bool}>Next</button> */}
            <button className={'next'}>Next</button>
        </div>
    );
}

export default NextButton;