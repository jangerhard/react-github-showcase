import React from 'react';
import PropTypes from 'prop-types';
import ProfileInfoComponent from "./Components/ProfileInfoComponent";
import RepositoryComponent from "./Components/RepositoryComponent";
import RepositoriesComponent from "./Components/RepositoriesComponent";

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
                <ProfileInfoComponent
                    fullName={this.state.fullName.toString()}
                    avatarUrl={this.state.avatarUrl.toString()}/>
                
                <RepositoriesComponent repos={this.state.repos}/>
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