import './IconContainer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

const IconContainer = ({ changeVisible, visible }) => {
    const [searchAnimClass, setSearchAnimClass] = useState('');
    const [searchVisible, setSearchVisible] = useState(true);
    const [timesVisible, setTimesVisible] = useState(false);

    useEffect(() => {
        if(visible) {
            // add animation class to icon__container
            const animTimer = setTimeout(() => {
                setSearchAnimClass('short-rotate');
                clearTimeout(animTimer);
            }, 400);
        }
    },[visible]);

    useEffect(() => {
        switch(searchAnimClass) {
            case 'short-rotate':
                const nextTimer = setTimeout(() => {
                    setSearchAnimClass('full-rotate');
                    setSearchVisible(!searchVisible);
                    clearTimeout(nextTimer);
                }, 500);
                break;
            case 'full-rotate':
                const timesTimer = setTimeout(() => {
                    setTimesVisible(true);
                    clearTimeout(timesTimer);
                }, 250);
                break;
            default:
        }
    }, [searchAnimClass]);

    return (
        <div className={`${searchAnimClass} icon__container ${visible ? 'add-animation' : ''}`} onClick={changeVisible}>
            <FontAwesomeIcon className={`icons ${!searchVisible ? 'hide-icon' : ''}`} icon={faSearch} size="2x"/>
            <FontAwesomeIcon className={`icons times-icon ${timesVisible ? 'show-icon' : ''}`} icon={faTimes} size="3x"/>
        </div>
    )
}

export default IconContainer;