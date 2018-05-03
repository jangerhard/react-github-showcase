import PropTypes from 'prop-types';
import React from 'react';
import ProfileInfoComponent from "./Components/ProfileInfoComponent";
import RepositoriesComponent from "./Components/RepositoriesComponent";
import { getStatsFor } from "./Services/GetStatsService"

const containerStyle = {
    display: "flex",
    flexDirection: "column"
};

const mainStyle = {
    display: "flex",
    flexDirection: "row"
};

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
        })
    }

    render() {

        return (
            <div style={containerStyle}>
                <h3>Latest Github Activity </h3>

                <div style={mainStyle}>

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
