import React, { useContext} from 'react';
import Context from '../Context';
import { Item } from './Item';


export const Items = () => {
    const { state } = useContext(Context)
    // console.log(value.data)
    return (
        <div className='items-wrapper'>
            <ul className='item-list'>
                {state.map((elem) => {
                    return <Item data={elem} key={elem.id} />;
                })}
            </ul>
        </div>
    );
};
