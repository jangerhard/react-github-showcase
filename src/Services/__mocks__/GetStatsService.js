const API_KEY = 'validKey';
const variables = {
    "username": "jangerhard",
    "numRepositories": 1,
    "numCommits": 1
};
const fakeData = {
    "avatarUrl": "testUrl.com",
    "name": "Test Testington",
    "repositories": {}
};

const apiKeyError = 'Invalid API-Key';
const variablesError = 'Invalid variables';

export const getStatsFor = (apiKey, variables, callback) => {
    return new Promise((resolve, reject) => {

        // API_KEY === apiKey ? resolve(fakeData)
        //     : reject({
        //         error: 'Invalid API key'
        //     })

        if (API_KEY !== apiKey)
            reject(apiKeyError);
        if (variables.name === username || variables.numRepositories === undefined || variables.numCommits === undefined)
            reject(variablesError);

        resolve(fakeData)
    }).catch(() => {

    });
}
