import React from 'react';
import { Link } from 'react-router-dom';


//{Path, Per, Pur, Tol, Lit, Exp, Text}
function NextButton({Path, Per, Pur, Tol, Lit, Exp, Text}) {
    return (
        <div>        
            <div style={{display:'inline-block'}}>
                <Link to={{
                pathname: Path,
                state: {
                    Period: Per,
                    Purpose: Pur,
                    Tolerance: Tol,
                    Literacy: Lit,
                    Experience: Exp
                }
                }}><button className={'next'}>{Text}</button></Link>
            </div>             
        </div>
    );
}

export default NextButton;