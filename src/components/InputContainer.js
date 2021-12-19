import './InputContainer.css';
import IconContainer from './IconContainer';

const InputContainer = ({visible, changeVisible}) => {

    return (
        <div className='input__container'>
            {/* <input className={`${visible ? 'input-visible' : ''}`} type="text" placeholder="Type something..." /> */}
            <IconContainer visible={visible} changeVisible={changeVisible} />
        </div>
    )
}

export default InputContainer;