import React from 'react';
import { Link } from 'react-router-dom';

function Header() {

    const Res = {
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
        6: false,
        7: false,
        8: false,
        9: false,
        10: false,
        11: false,
        12: false,
        13: false,
        14: false,
        15: false,
        16: false,
        17: false,
        18: false
      }

    return (
        <div>
            <div className="Header">
                <Link to={{pathname: "/", state: {Res: Res}} }style={{textDecoration: 'none', color: 'inherit'}}>
                    <div>투자 유니버스</div>
                </Link>
            </div>
        </div>
    );
}

export default Header;