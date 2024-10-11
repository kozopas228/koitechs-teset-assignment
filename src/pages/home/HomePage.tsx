import React, { ChangeEvent, useState } from 'react';
import styles from './HomePage.module.css';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');

    function handleUsernameChange(e: ChangeEvent<HTMLInputElement>) {
        setUsername(e.target.value);
    }
    function handleCreateClick() {
        navigate(`/${username}`);
    }

    return (
        <div className={`container`}>
            <div className={'border border-secondary rounded p-3 mt-4'}>
                <div className='row'>
                    <div className='col-12'>
                        <h1>GitHub Resume</h1>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12'>
                        <p>
                            Enter your GitHub <b>username</b>. Do not enter URLs
                            or anything else but username.
                        </p>
                    </div>
                </div>
                <form className='row mt-3'>
                    <div className='col-lg-10 col-8'>
                        <input
                            className='form-control'
                            onChange={handleUsernameChange}
                        />
                    </div>
                    <div className={'col-lg-2 col-4 '}>
                        <button
                            className='w-100 btn btn-success'
                            onClick={handleCreateClick}>
                            Create
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default HomePage;
