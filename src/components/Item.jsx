import React from 'react';
import '../style/Item.css'

export const Item = (props) => {
    const { action, price } = props.data;
    // console.log(prise)
    return (
        <div className='item'>
            <li className='item-text'>
                {action} {price}
            </li>
            <button className='btn-change'>✎</button>
            <button className='btn-delet'>✘</button>
        </div>
    );
};
