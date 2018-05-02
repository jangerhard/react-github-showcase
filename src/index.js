import React from 'react';
import PropTypes from 'prop-types';
import ProfileInfoComponent from "./Components/ProfileInfoComponent";
import RepositoryComponent from "./Components/RepositoryComponent";
import RepositoriesComponent from "./Components/RepositoriesComponent";
import {getStatsFor} from "./Services/GetStatsService"

class GithubShowcase extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            fullName: String,
            avatarUrl: String,
            repos: []
        };
    }

    componentDidMount() {

        const variables = {
            "username": this.props.username,
            "numRepositories": this.props.numRepositories,
            "numCommits": this.props.numCommits,
        };

        getStatsFor(this.props.api_key, variables, (user) => {
            this.setState({
                fullName: user.name,
                avatarUrl: user.avatarUrl,
                repos: user.repositories.edges
            });
        }).bind(this);
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
                        avatarUrl={this.state.avatarUrl}/>
                    }

                    <RepositoriesComponent repos={this.state.repos}/>

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