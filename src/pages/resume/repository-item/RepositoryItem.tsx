import React from 'react';
import styles from './RepositoryItem.module.css';

interface IProps {
    name: string;
    url: string;
    lastUpdate: Date;
}

const RepositoryItem = ({ name, url, lastUpdate }: IProps) => {
    return (
        <div
            className={`border-bottom border-2 mb-5 ${styles.repository_item}`}>
            <div className='row'>
                <h2 className='col-12'>
                    <a
                        href={url}
                        target={'_blank'}
                        rel='noreferrer'
                        className={'text-break'}>
                        {name}
                    </a>
                </h2>
            </div>
            <div className='row'>
                <p className='col-12 text-secondary'>
                    Last Update:{' '}
                    {lastUpdate.toLocaleDateString('en-eu', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                    })}
                </p>
            </div>
        </div>
    );
};

export default RepositoryItem;
