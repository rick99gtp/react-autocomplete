import './InputContainer.css';
import IconContainer from './IconContainer';
import { useEffect, useState } from 'react';

const InputContainer = ({visible, changeVisible, inputVisible}) => {

    const [displayInput, setDisplayInput] = useState(false);
    const [inputOpacity, setInputOpacity] = useState(false);

    useEffect(() => {
        if(inputVisible) {
            setDisplayInput(!displayInput);
        }
    }, [inputVisible]);

    useEffect(() => {
        if(displayInput) {
            setInputOpacity(true);
        }
    }, [displayInput]);

    return (
        <div className='input__container'>
            { inputVisible ? <input className={`${displayInput ? 'display-input' : ''} ${inputOpacity ? 'input-opacity' : ''}`} type="text" placeholder="Type something..." /> : null }
            <IconContainer visible={visible} changeVisible={changeVisible} />
        </div>
    )
}

export default InputContainer;