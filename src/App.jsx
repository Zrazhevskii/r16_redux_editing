import React, { useReducer } from 'react';
import './App.css';
import { Form } from './components/Form';
import { Items } from './components/Items';
import { data } from './data/data';
import Context from './Context';
import reducer from './components/Reducer';

function App() {
    const [state, dispatch] = useReducer(reducer, data);

    return (
        <Context.Provider value={{ state, dispatch }}>
            <div className='main-wrapper'>
                <Form />
                <Items />
            </div>
        </Context.Provider>
    );
}

export default App;
