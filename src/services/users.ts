import { Octokit } from '@octokit/core';
import * as process from 'process';
import { GitHubUser } from '../types/github-user';
import { HttpStatus } from '../utils/httpStatus';

const octokit = new Octokit({
    auth: process.env.API_TOKEN,
});

export async function getUser(username: string): Promise<GitHubUser | null> {
    try {
        const user = await octokit.request(`GET /users/${username}`, {
            username: username,
            headers: {
                'X-GitHub-Api-Version': '2022-11-28',
            },
        });

        return user.data;
    } catch (e) {
        if (e.status === HttpStatus.NOT_FOUND) {
            return null;
        }

        throw e;
    }
}
