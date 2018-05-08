import PropTypes from 'prop-types';
import React from 'react';
import RepositoryComponent from "./RepositoryComponent";

const RepositoriesComponent = ({ repos }) => (
    <div className="repos" style={{}}>
        {repos.map(function (repo) {
            return <RepositoryComponent
                key={repo.node.url}
                name={repo.node.name}
                commits={repo.node.ref.target.history.nodes}
                url={repo.node.url} />;
        })}
    </div>
);

RepositoriesComponent.propTypes = {
    repos: PropTypes.array.isRequired
};

export default RepositoriesComponent;