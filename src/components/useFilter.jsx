import React, { useState } from 'react';

export const useFilter = () => {

    
    return (
        <div className='form-filter'>
            <input
                type='text'
                className='filter'
                placeholder='поиск по словам'
                name='valueFilter'
                value={valueFilter}
                onChange={handleFilter}
                required
            />
            <button
                className='btn-filter'
                onClick={() => handleBtnSearch(valueFilter)}
            >
                Найти
            </button>
        </div>
    );
};
