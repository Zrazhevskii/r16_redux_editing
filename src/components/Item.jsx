import React, { useContext } from 'react';
import '../style/Item.css';
import Context from '../Context';

export const Item = ({data, handleUpdateItem}) => {
    const { dispatch } = useContext(Context);
    const { id, action, price } = data;

    // console.log(handleUpdateItem)

    const handleDelet = (id) => {
        dispatch({ type: 'delet', payload: id });
    };

    return (
        <div className='item'>
            <li className='item-text'>
                {action} {price}
            </li>
            <button className='btn-change' onClick={() => handleUpdateItem(id, action, price)}>
                ✎
            </button>
            <button className='btn-delet' onClick={() => handleDelet(id)}>
                ✘
            </button>
        </div>
    );
};
