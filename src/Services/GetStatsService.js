const API = 'https://api.github.com/graphql';

export const query = `
  query GithubQuery($username: String!, $numRepositories: Int!, $numCommits: Int!) {
  user(login: $username) {
    avatarUrl
    name
    repositories(first: $numRepositories, orderBy: {field: UPDATED_AT, direction: DESC}) {
      edges {
        node {
          name
          url
          ref(qualifiedName: "master") {
            target {
              ... on Commit {
                history(first: $numCommits) {
                  nodes {
                    message
                    abbreviatedOid
                    committedDate
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
`;

export const getStatsFor = (apiKey, variables, callback) => {
    fetch(API, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            "Authorization": "bearer " + apiKey
        },
        body: JSON.stringify({ query, variables })
    })
        .then(res => res.json())
        .then(res => {
            if (res.message)
                throw Error(res.message)

            callback(res.data.user)
        })
        .catch(error => console.log(error))
};

