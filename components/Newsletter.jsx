import React from 'react';
import { BiSend } from 'react-icons/bi';

const Newsletter = () => {
    return (
        <div className='container-newsletter'>
            <h1 className='title-newsletter'>Newsletter</h1>
            <div className='desc-newsletter'>Email newsletter archive sent from LaVelle Vitamin Shop.</div>
            <div className='inputContainer-newsletter'>
                <input className='input-newsletter' placeholder='Your email' />
                <button className='btnSend-newsletter'>
                    <BiSend size='20px' />
                </button>
            </div>
        </div>
    )
}

export default Newsletter