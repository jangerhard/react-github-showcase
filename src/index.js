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
            <div className={styles.container}>
                <div className={styles.profileInfo}>
                    <img className={styles.pic}
                           src="https://avatars2.githubusercontent.com/u/6482205?v=4">

                    </img>
                    Jan Schøpp
                </div>
                <div className={styles.repos}>
                    <div className={styles.repo}>
                        Repo 1
                        <div className={styles.commit}>
                            Commit1
                        </div>
                        <div className={styles.commit}>
                            Commit2
                        </div>
                    </div>
                    <div className={styles.repo}>
                        Repo 2
                        <div className={styles.commit}>
                            Commit1
                        </div>
                        <div className={styles.commit}>
                            Commit2
                        </div>
                    </div>
                    <div className={styles.repo}>
                        Repo 3
                        <div className={styles.commit}>
                            Commit1
                        </div>
                        <div className={styles.commit}>
                            Commit2
                        </div>
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