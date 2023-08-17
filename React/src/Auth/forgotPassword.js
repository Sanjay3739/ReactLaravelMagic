
import React, { useState } from 'react';
import http from '../http';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await http.post('/password/email', { email });
            setSuccessMessage(response.data.success.message);
            setErrorMessage('');
        } catch (error) {
            setErrorMessage(error.response.data.error.message);
            setSuccessMessage('');
        }
    };

    return (
        <div className="registration parent">
            <div className="set reset_width">
                <div className="forms reset_height ">
                    <div className="background">
                        <form onSubmit={handleSubmit}>
                            <div className="cover">
                                <header className="head-form">
                                    <h2 className='text-white'>Forgot Password</h2>
                                    <hr className='text-white' p-2 />
                                    <p className='text-white'>Your password have been changed ?</p>
                                </header>
                                {successMessage && <div className="good text-success ">{successMessage}</div>}
                                {errorMessage && <div className="error">{errorMessage}</div>}
                                <div className="field-set m-3 mt-5">
                                    <span className="input-item"><i className="fa fa-user-circle"></i></span>
                                    <input className="form-input" id="txt-input" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required  placeholder="@Email" />
                                    <br />
                                </div>
                                <button className="reset_btn m-3">Send Reset Link </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ForgotPassword;
