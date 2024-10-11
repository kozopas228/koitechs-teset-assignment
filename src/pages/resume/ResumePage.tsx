import React, { useEffect, useState } from 'react';
import styles from './ResumePage.module.css';
import { useNavigate, useParams } from 'react-router-dom';
import LanguagesChart from './languages-chart/LanguagesChart';
import RepositoryItem from './repository-item/RepositoryItem';
import { GitHubUser } from '../../types/github-user';
import { Repository } from '../../types/respository';
import { TopLanguages } from '../../types/programming-laguages';
import { getUser } from '../../services/users';
import { getUserRepos } from '../../services/repositories';
import { countLanguages, getTopLanguages } from '../../services/languages';

const ResumePage = () => {
    const { username } = useParams();

    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState<GitHubUser | null>(null);
    const [repos, setRepos] = useState<Repository[]>([]);
    const [topLanguages, setTopLanguages] = useState<TopLanguages[]>([]);

    const [realName, setRealName] = useState('John Doe');
    const [publicReposCount, setPublicReposCount] = useState(7);
    const [memberSinceDate, setMemberSinceDate] = useState(
        new Date(2020, 7, 21)
    );

    useEffect(() => {
        (async function () {
            await setIsLoading(true);

            const user = await getUser(username!);
            setUser(user);

            const repos = await getUserRepos(username!);
            setRepos(repos);

            const allLanguagesCount = await countLanguages(username!, repos);

            const top5Languages = getTopLanguages(allLanguagesCount);
            setTopLanguages(top5Languages);

            console.log(top5Languages);

            setTimeout(() => {
                setIsLoading(false);
            }, 1000);
        })();
    }, [username]);

    return (
        <div className={`container`}>
            {isLoading ? (
                <div className={'border border-secondary rounded p-3 mt-4'}>
                    <div className='text-center'>
                        <div
                            className='spinner-border'
                            role='status'></div>
                    </div>
                </div>
            ) : !user ? (
                <div className={'p-3 mt-4'}>
                    <div className='text-center'>
                        <h4>User was not found.</h4>
                    </div>
                </div>
            ) : (
                <div className={'border border-secondary rounded p-3 mt-4'}>
                    <div className='row'>
                        <div className='col-12'>
                            <h1>{username}</h1>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-12 mt-3'>
                            <h5 className={'text-secondary'}>
                                AKA <b>{user.name}</b>
                            </h5>
                        </div>
                    </div>
                    <div className='row mt-1'>
                        <div className='col-2'>
                            <p>
                                Public Repositories: <b>{user.public_repos}</b>
                            </p>
                        </div>
                        <div className='col-3'>
                            <p>
                                Member Since:{' '}
                                <b>
                                    {new Date(
                                        user.created_at
                                    ).toLocaleDateString('en-eu', {
                                        day: 'numeric',
                                        month: 'long',
                                        year: 'numeric',
                                    })}
                                </b>
                            </p>
                        </div>
                    </div>
                    <div className='row mt-3'>
                        <div className='col-lg-4 col-8'>
                            <span>Use of languages (maximum of 5):</span>
                            <LanguagesChart topLanguages={topLanguages} />
                        </div>
                    </div>
                    <div className='row mt-4'>
                        <p className='col-12'>
                            Most Recent Public Repositories (maximum of 10):
                        </p>
                    </div>
                    <RepositoryItem
                        name={'Repository 1'}
                        url={''}
                        lastUpdate={new Date()}
                    />
                </div>
            )}
        </div>
    );
};

export default ResumePage;
