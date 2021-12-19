import './AutoComplete.css';
import InputContainer from './InputContainer';
import { useState } from 'react';

const AutoComplete = () => {
    const [visible, setVisible] = useState(false);

    const handleClick = () => {
        setVisible(!visible);
    };

    return (
        <div className={`autocomplete__container ${visible ? 'autocomplete-width' : ''}`}>
            <InputContainer visible={visible} changeVisible={handleClick} />
        </div>
    )
}

export default AutoComplete;