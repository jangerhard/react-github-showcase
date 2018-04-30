import PropTypes from 'prop-types';
import React from 'react';
import CommitComponent from "./CommitComponent";

const RepositoryComponent = ({ name, commits, url }) => (
    <div>
        <a href={url}> {name} </a>
        {commits.map(function (commit) {
            return <CommitComponent
                abbreviatedOid={commit.abbreviatedOid}
                message={commit.message}
                committedDate={commit.committedDate} />;
        })}
    </div>
);

RepositoryComponent.propTypes = {
    name: PropTypes.string.isRequired,
    commits: PropTypes.array.isRequired,
    url: PropTypes.string.isRequired
};

export default RepositoryComponent;