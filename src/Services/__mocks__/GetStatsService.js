const API_KEY = 'validKey';
const variables = {
    "username": "jangerhard",
    "numRepositories": 1,
    "numCommits": 1
};
const fakeData = {
    "avatarUrl": "testUrl.com",
    "name": "Sir Test Testington",
    "repositories": {}
};

const apiKeyError = 'Invalid API-Key';
const variablesError = 'Invalid variables';

export const getStatsFor = (apiKey, variables, callback) => {

    API_KEY === apiKey && validVars(variables) ? callback(fakeData)
        : Error({
            error: 'Invalid API key'
        })
}

function validVars(vars) {
    return !vars.username || !vars.numRepositories || !vars.numCommits
}
