import React from 'react';
import PropTypes from 'prop-types';
import ProfileInfoComponent from "./Components/ProfileInfoComponent";
import RepositoryComponent from "./Components/RepositoryComponent";
import RepositoriesComponent from "./Components/RepositoriesComponent";
import {getStatsFor} from "./services/getStatsService"

const API = 'https://api.github.com/graphql';

class GithubShowcase extends React.Component {

    constructor(props) {
        super(props);

        const variables = {
            "username": this.props.username,
            "numRepositories": this.props.numRepositories,
            "numCommits": this.props.numCommits,
        };

        this.state = {
            data: [],
            variables: variables,
            fullName: String,
            avatarUrl: String,
            repos: []
        };
    }

    componentDidMount() {
        getStatsFor(this.props.api_key, this.state.variables, (user) => {
            this.setState({
                fullName: user.name,
                avatarUrl: user.avatarUrl,
                repos: user.repositories.edges
            });
        }).bind(this);
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
            .then(res => {
                this.setState({
                    fullName: res.data.user.name,
                    avatarUrl: res.data.user.avatarUrl,
                    repos: res.data.user.repositories.edges
                });
            });
    }

    render() {
        return (
            <div className="container" style={{
                display: "flex",
                flexDirection: "column"
            }}>
                <h3>
                    Latest Github Activity
                </h3>
                <div style={{
                    display: "flex",
                    flexDirection: "row"
                }}>
                    {this.props.showProfileInfo &&
                    <ProfileInfoComponent
                        fullName={this.state.fullName}
                        avatarUrl={this.state.avatarUrl} />
                    }

                    <RepositoriesComponent repos={this.state.repos} />

                </div>
            </div>
        );
    }
}

GithubShowcase.propTypes = {
    username: PropTypes.string.isRequired,
    api_key: PropTypes.string.isRequired,
    showProfileInfo: PropTypes.bool,
    numRepositories: PropTypes.number,
    numCommits: PropTypes.number
};

GithubShowcase.defaultProps = {
    showProfileInfo: true,
    numRepositories: 3,
    numCommits: 2
};

export default GithubShowcase;

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
                    author {
                      name
                      avatarUrl
                    }
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