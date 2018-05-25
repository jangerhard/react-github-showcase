import { getStatsFor } from "../GetStatsService"

jest.mock('../GetStatsService');

const variables = {
    "username": "jangerhard",
    "numRepositories": 1,
    "numCommits": 1
};
const invalidVariables = {
    "username": "jangerhard",
    "numRepositories": 1,
};

const API_KEY = 'validKey';

describe('#getStatsFor() using Promises', () => {
    it('should load user data', () => {
        return getStatsFor(API_KEY, variables, (user) => {
            expect(user).toBeDefined()
            expect(user.avatarUrl).toEqual('testUrl.com')
            expect(user.name).toEqual('Sir Test Testington')
        })
    })
    it('should handle an invalid APIKey and valid variables', () => {
        return getStatsFor("invalidKey", variables)
            .catch(error => {
                expect(error).toBeDefined()
                expect(error).toEqual('Invalid API-Key')
            })
    })
    it('should handle a valid APIKey and invalid variables', () => {
        return getStatsFor(API_KEY, invalidVariables)
            .catch(error => {
                expect(error).toBeDefined()
                expect(error).toEqual('Invalid variables')
            })
    })
    it('should handle a 503', () => {
    })
    it('should display a nicer error message', () => {
    });
});