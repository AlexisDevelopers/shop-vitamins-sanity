import React from 'react';

const Login = () => {
    return (
        <div className='container-login'>
            <div className='wrapper-login'>
                <h1 className='title-login'>SIGN IN</h1>
                <form className='form-login'>
                    <input className='input-login' placeholder="username" />
                    <input className='input-login' placeholder="password" />
                    <button className='btn-login'>LOGIN</button>
                    <a className='link-login'>DO NOT YOU REMEMBER THE PASSWORD?</a>
                    <a className='link-login'>CREATE A NEW ACCOUNT</a>
                </form>
            </div>
        </div>
    );
};

export default Login;