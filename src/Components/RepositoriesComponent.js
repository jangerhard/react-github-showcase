import PropTypes from 'prop-types';
import React from 'react';
import RepositoryComponent from "./RepositoryComponent";
import RoundShape from "react-placeholder/lib/placeholders/RoundShape";
import TextBlock from "react-placeholder/lib/placeholders/TextBlock";
import ReactPlaceholder from "react-placeholder";

const awesomePlaceholder =
    <div className="repos" style={{
        width: "30em"
    }}>
        <TextBlock rows={5} color='grey'/>
    </div>;

const RepositoriesComponent = ({repos, loading}) =>
    <ReactPlaceholder ready={!loading}
                      customPlaceholder={awesomePlaceholder}>
        <div className="repos" style={{}}>
            {repos.map(function (repo) {

                const commits = repo.node.ref !== null ? repo.node.ref.target.history.nodes : [];

                return <RepositoryComponent
                    key={repo.node.url}
                    name={repo.node.name}
                    commits={commits}
                    url={repo.node.url}/>;
            })}
        </div>
    </ReactPlaceholder>;

RepositoriesComponent.propTypes = {
    repos: PropTypes.array.isRequired
};

export default RepositoriesComponent;