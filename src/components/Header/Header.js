import { faDumbbell} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <nav className='nav-items'>
            <div>
            <FontAwesomeIcon icon={faDumbbell}></FontAwesomeIcon>
            </div>
            <h1>FITNESS-CLUB</h1>
        </nav>
    );
};

export default Header;