import { Repository } from '../types/respository';
import { Octokit } from '@octokit/core';
import * as process from 'process';
const octokit = new Octokit({
    auth: process.env.API_TOKEN,
});

export async function getUserRepos(username: string): Promise<Repository[]> {
    const user = await octokit.request(`GET /users/${username}/repos`, {
        username: username,
        headers: {
            'X-GitHub-Api-Version': '2022-11-28',
        },
    });

    return user.data;
}
