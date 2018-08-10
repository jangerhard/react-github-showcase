import PropTypes from 'prop-types';
import React from 'react';
import {getStatsFor} from "./Services/GetStatsService"
import MainComponent from "./Components/MainComponent";
import ErrorComponent from "./Components/ErrorComponent";

class GithubShowcase extends React.Component {

    constructor() {
        super();
        this.state = {loading: true, userData: {}, errorMessage: null}
    }

    componentDidMount() {
        const {username, api_key, numRepositories, numCommits} = this.props;

        getStatsFor(api_key, {
            username,
            numRepositories,
            numCommits
        }).then(
            res => {
                if (res.ok) return res.json();
                throw Error(res.statusText);
            }
        ).then(res => {
                this.setState({
                    loading: false,
                    userData: res.data.user
                })
            }
        ).catch(error => {
            console.log(error);
            return this.setState({
                loading: false,
                errorMessage: error.message
            })
        })
    }

    render() {

        const {loading, userData, errorMessage} = this.state;
        const {avatarUrl, name, repositories} = userData;
        const {showProfileInfo} = this.props;

        console.log(this.state);

        if (loading) return (<div>LOADING</div>);

        return (

            errorMessage ?
                <ErrorComponent {...{errorMessage}}/> :

                <MainComponent {...{
                    name,
                    avatarUrl,
                    repos: repositories.edges,
                    showProfileInfo
                }}/>
        )
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