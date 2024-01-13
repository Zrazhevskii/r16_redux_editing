import React, { useReducer } from 'react';
import './App.css';
import { Form } from './components/Form';
import { data } from './data/data';
import Context from './Context';
import reducer from './components/Reducer';

function App() {
    const [state, dispatch] = useReducer(reducer, data);

    return (
        <Context.Provider value={{ state, dispatch }}>
            <div className='main-wrapper'>
                <Form />
            </div>
        </Context.Provider>
    );
}

export default App;
