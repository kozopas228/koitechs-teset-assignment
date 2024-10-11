import React from 'react';
import styles from './HomePage.module.css';

const HomePage = () => {
    return (
        <div className={`container`}>
            <div className={'row'}>
                <button className={`btn btn-primary col-md-5 ${styles['knopka']}`}>test1</button>
                <button
                    className={'btn btn-outline-danger col-md-2 offset-md-1'}>
                    test2
                </button>
            </div>
        </div>
    );
};

export default HomePage;
