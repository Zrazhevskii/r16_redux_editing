import { useState, useContext } from 'react';
import { Items } from './Items';
import '../style/Form.css';
import Context from '../Context';

export const Form = () => {
    const [formValue, setForm] = useState({
        id: '',
        actionValue: '',
        priseValue: '',
    });

    const { dispatch } = useContext(Context);

    const { id, actionValue, priseValue } = formValue;

    const handleSubmit = (e) => {
        e.preventDefault();

        setForm({
            id: '',
            actionValue: '',
            priseValue: '',
        });
    };

    const handleClick = () => {
        if (formValue.id === '') {
            return dispatch({
                type: 'add',
                payload: { actionValue, priseValue },
            });
        }
        dispatch({ type: 'update', payload: { id, actionValue, priseValue } });
    };

    const handleChangeForm = (e) => {
        e.preventDefault();

        const { name, value } = e.target;
        setForm((prevForm) => ({ ...prevForm, [name]: value }));
    };

    const handleUpdateItem = (id, action, price) => {
        setForm({
            id: id,
            actionValue: action,
            priseValue: price,
        });
    };

    return (
        <div>
            <form action='' className='form' onSubmit={handleSubmit}>
                <div className='input action'>
                    <label htmlFor='action'>Мероприятие</label>
                    <input
                        type='text'
                        id='action'
                        className='text'
                        placeholder='текст того, что надо сделать'
                        name='actionValue'
                        value={actionValue}
                        onChange={handleChangeForm}
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
                        onChange={handleChangeForm}
                        required
                    />
                </div>
                <div className='btn-box'>
                    <button className='btn save' onClick={handleClick}>
                        Save
                    </button>
                    <button className='btn cansel'>Cansel</button>
                </div>
            </form>
            <Items handleUpdateItem={handleUpdateItem} />
        </div>
    );
};
