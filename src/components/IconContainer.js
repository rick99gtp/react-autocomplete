import './IconContainer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const IconContainer = ({ changeVisible }) => {
    return (
        <div className='icon__container' onClick={changeVisible}>
            <FontAwesomeIcon className='icon' icon={faSearch} size="2x"/>
        </div>
    )
}

export default IconContainer;