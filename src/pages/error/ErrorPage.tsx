import React from 'react';
import styles from './ErrorPage.module.css';

const ErrorPage = () => {
    return (
        <>
            <h3 className={styles.error}>
                <code>Not Found</code>
            </h3>
        </>
    );
};

export default ErrorPage;
