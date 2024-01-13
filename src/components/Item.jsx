import { useContext } from 'react';
import '../style/Item.css';
import Context from '../Context';
import PropTypes from 'prop-types';

export const Item = ({ data, handleUpdateItem }) => {
    const { dispatch } = useContext(Context);
    const { id, action, price } = data;

    const handleDelet = (id) => {
        dispatch({ type: 'delet', payload: id });
    };

    return (
        <div className='item'>
            <li className='item-text'>
                {action} {price}
            </li>
            <button
                className='btn-change'
                onClick={() => handleUpdateItem(id, action, price)}
            >
                ✎
            </button>
            <button className='btn-delet' onClick={() => handleDelet(id)}>
                ✘
            </button>
        </div>
    );
};

Item.propTypes = {
    handleUpdateItem: PropTypes.func.isRequired,
    data: PropTypes.shape({
        id: PropTypes.string.isRequired,
        action: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
    }),
};
