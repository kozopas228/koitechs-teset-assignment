import {
    ProgrammingLanguages,
    TopLanguages,
} from '../types/programming-laguages';
import { Repository } from '../types/respository';
import { Octokit } from '@octokit/core';
import * as process from 'process';
import { MAX_LANGUAGES_COUNT } from "../utils/constants";
const octokit = new Octokit({
    auth: process.env.API_TOKEN,
});

export async function getRepoLanguages(
    username: string,
    repoName: string
): Promise<ProgrammingLanguages> {
    const response = await octokit.request(
        `GET /repos/${username}/${repoName}/languages`,
        {
            owner: username,
            repo: repoName,
            headers: {
                'X-GitHub-Api-Version': '2022-11-28',
            },
        }
    );
    return response.data;
}

export async function countLanguages(
    username: string,
    repos: Repository[]
): Promise<ProgrammingLanguages> {
    const count: ProgrammingLanguages = {};

    const languagePromises = repos.map((repo) =>
        getRepoLanguages(username, repo.name).then((languages) => ({
            repo,
            languages,
        }))
    );

    const results = await Promise.all(languagePromises);

    results.forEach(({ languages }) => {
        for (const [lang, bytes] of Object.entries(languages)) {
            if (count[lang]) {
                count[lang] += bytes;
            } else {
                count[lang] = bytes;
            }
        }
    });

    return count;
}

export function getTopLanguages(
    languageCount: ProgrammingLanguages,
    topN: number = MAX_LANGUAGES_COUNT
): TopLanguages[] {
    return Object.entries(languageCount)
        .sort(([, countA], [, countB]) => countB - countA)
        .slice(0, topN)
        .map(([language, count]) => ({ language, count }));
}
