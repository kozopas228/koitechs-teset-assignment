import React from 'react';

interface IProps {
    name: string;
    url: string;
    lastUpdate: Date;
}

const RepositoryItem = ({ name, url, lastUpdate }: IProps) => {
    return (
        <div
            className='border-bottom border-2 mb-5'
            key={url}>
            <div className='row'>
                <h2 className='col-12'>
                    <a
                        href={url}
                        target={'_blank'}
                        rel='noreferrer'>
                        {name}
                    </a>
                </h2>
            </div>
            <div className='row'>
                <p className='col-12 text-secondary'>
                    Last Update: {lastUpdate.toLocaleDateString('en-us')}
                </p>
            </div>
        </div>
    );
};

export default RepositoryItem;
