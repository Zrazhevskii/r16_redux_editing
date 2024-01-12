import React, { useState, useContext } from 'react';
import '../style/Form.css';
import Context from '../Context';

// import reducer from './Reducer';

// const initialState = {
//     actionValue: '',
//     priseValue: '',
// }

export const Form = () => {
    const [formValue, setForm] = useState({
        actionValue: '',
        priseValue: '',
    });
    // const [ state, dipatch ] = useReducer(reducer, initialState)

    const { dispatch } = useContext(Context);

    const { actionValue, priseValue } = formValue;

    const handleSubmit = (e) => {
        e.preventDefault();

        setForm({
            actionValue: '',
            priseValue: '',
        });
    };

    const handleChange = (e) => {
        e.preventDefault();

        const { name, value } = e.target;
        setForm((prevForm) => ({ ...prevForm, [name]: value }));
    };

    return (
        <div>
            <form action='' className='form'>
                <div className='input action'>
                    <label htmlFor='action'>Мероприятие</label>
                    <input
                        type='text'
                        id='action'
                        className='text'
                        placeholder='текст того, что надо сделать'
                        name='actionValue'
                        value={actionValue}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className='input prise'>
                    <label htmlFor='prise'>Сколько стоит</label>
                    <input
                        type='text'
                        id='prise'
                        className='text'
                        placeholder='тут самое важно, что бьет по карману'
                        name='priseValue'
                        value={priseValue}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className='btn-box'>
                    <button className='btn save'>Save</button>
                    <button className='btn cansel'>Cansel</button>
                </div>
            </form>
        </div>
    );
};
