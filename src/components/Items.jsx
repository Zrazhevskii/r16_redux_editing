import { useContext } from 'react';
import Context from '../Context';
import { Item } from './Item';
import PropTypes from 'prop-types';

export const Items = ({ handleUpdateItem }) => {
    const { state } = useContext(Context);

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

Items.propTypes = {
    handleUpdateItem: PropTypes.func.isRequired,
};
