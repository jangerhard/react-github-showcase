import React from 'react';
import PropTypes from 'prop-types'

const API = 'https://api.github.com/graphql';

class GithubShowcase extends React.Component {

    constructor(props) {
        super(props);

        const variables = {
            "username": this.props.username
        };

        this.state = {
            data: [],
            variables: variables
        };
    }

    componentDidMount() {
        fetch(API, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "Authorization": "bearer " + this.props.api_key
            },
            body: JSON.stringify({
                query: query,
                variables: this.state.variables
            }),
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

GithubShowcase.propTypes = {
    username: PropTypes.string.isRequired,
    api_key: PropTypes.string.isRequired,
};


export default GithubShowcase;

export const query = `
  query GithubQuery($username: String!) {

  user(login: $username) {

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