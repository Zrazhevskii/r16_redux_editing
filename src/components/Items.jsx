import React, { useContext } from 'react';
import Context from '../Context';
import { Item } from './Item';

export const Items = ({ handleUpdateItem }) => {
    const { state } = useContext(Context);

    // console.log(handleUpdateItem)

    if (!state) return;

    return (
        <div className='items-wrapper'>
            <ul className='item-list'>
                {state.map((elem) => {
                    return (
                        <Item
                            data={elem}
                            handleUpdateItem={handleUpdateItem}
                            key={elem.id}
                        />
                    );
                })}
            </ul>
        </div>
    );
};
