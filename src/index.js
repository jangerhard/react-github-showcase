import React from 'react';

const API = 'https://api.github.com/graphql';
const API_KEY = 'x';

class GithubShowcase extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [],
        };
    }

    componentDidMount() {
        fetch(API, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "Authorization": "bearer " + API_KEY
            },
            body: JSON.stringify({ query: query }),
        })
            .then(res => res.json())
            .then(res => console.log(res));
    }

    render() {
        return (
            <div>{}</div>
    );
    }
}
export default GithubShowcase;

export const query = `
  query GithubQuery {

  user(login: "jangerhard") {

    repositories(first: 3, orderBy: {field: UPDATED_AT, direction: DESC}) {

      edges {

        node {

          name

          ref(qualifiedName: "master"){

            target {

              ... on Commit {

                history (first: 2) {

                  nodes{

                    author {

                      name

                      avatarUrl

                    }

                    message

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