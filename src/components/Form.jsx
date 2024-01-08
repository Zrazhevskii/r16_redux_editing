import React from 'react'
import '../style/Form.css'

export const Form = () => {
  return (
    <div>
        <form action="" className='form'>
            <div className='input action'>
                <label htmlFor="action">Мероприятие</label>
                <input type="text" id='action' className='text'/>
            </div>
            <div className='input prise'>
                <label htmlFor="prise">Сколько стоит</label>
                <input type="text" id='prise' className='text'/>
            </div>
            <div className='btn-box'>
                <button className='btn save'>Save</button>
                <button className='btn cansel'>Cansel</button>
            </div>
        </form>
    </div>
  )
}
