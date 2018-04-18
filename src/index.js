import React from 'react';
import PropTypes from 'prop-types';

const API = 'https://api.github.com/graphql';

class GithubShowcase extends React.Component {

    constructor(props) {
        super(props);

        const variables = {
            "username": this.props.username
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
                display: "flex"
            }}>
                <div className="profileInfo" style={{
                    display: "flex",
                    flexDirection: "column"
                }}>
                    <img className="pic" style={{
                        width: "50%",
                        borderRadius: "50%"
                    }}
                         src={this.state.avatarUrl}>

                    </img>
                    {this.state.fullName}
                </div>
                <div className="repos" style={{
                    width: "75%"
                }}>
                    <div className="repo">
                        {this.state.repos.map(function (repo) {
                            return <div>
                                {repo.node.name}
                                {repo.node.ref.target.history.nodes.map(function (commit) {
                                    return <div style={{
                                        paddingLeft: "3em"
                                    }}>
                                        {commit.abbreviatedOid} : {commit.message} ({commit.committedDate})
                                    </div>;
                                })}
                            </div>;
                        })}
                    </div>
                </div>
            </div>
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
    avatarUrl
    name
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