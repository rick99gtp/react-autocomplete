import './AutoComplete.css';
import InputContainer from './InputContainer';
import { useState, useEffect } from 'react';

const AutoComplete = () => {
    const [visible, setVisible] = useState(false);
    const [inputVisible, setInputVisible] = useState(false);

    const handleClick = () => {
        setVisible(!visible);
    };

    useEffect(() => {
        if(visible) {
            const inputTimer = setTimeout(() => {
                setInputVisible(true);
                clearTimeout(inputTimer);
            }, 1250);
        }
    },[visible]);

    return (
        <div className={`autocomplete__container ${visible ? 'autocomplete-width' : ''}`}>
            <InputContainer inputVisible={inputVisible} visible={visible} changeVisible={handleClick} />
        </div>
    )
}

export default AutoComplete;