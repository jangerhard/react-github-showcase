import { getStatsFor } from "../GetStatsService"

jest.mock('../GetStatsService');

const variables = {
    "username": "jangerhard",
    "numRepositories": 1,
    "numCommits": 1
};

describe('#getStatsFor() using Promises', () => {
    it('should load user data', () => {
        return getStatsFor("invalidKey", variables)
            .then(user => {
                expect(user).toBeDefined()
                expect(user.avatarUrl).toEqual('testUrl.com')
                expect(user.name).toEqual('Sir Test Testington')
            })
            .catch(errors => {

            })
    })
    it('should handle errors', () => {
    })
    it('should display a nicer error message', () => {
    })
});