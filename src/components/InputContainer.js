import './InputContainer.css';
import IconContainer from './IconContainer';
import { useState } from 'react';

const InputContainer = () => {
    const [visible, setVisible] = useState(false);

    const handleClick = () => {
        setVisible(!visible);
    };

    return (
        <div className='input__container'>
            <input className={`${visible ? 'input-visible' : ''}`} type="text" placeholder="Type something..." />
            <IconContainer visible={visible} changeVisible={handleClick} />
        </div>
    )
}

export default InputContainer;