import PropTypes from 'prop-types';
import React from 'react';
import CommitComponent from "./CommitComponent";

const RepositoryComponent = ({ name, commits, url }) => (
    <div>
        <a href={url}> {name} </a>
        {!commits.length && <NoCommitMessage/>}
        {commits.map((commit) => {
            return <CommitComponent
                key={commit.abbreviatedOid}
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

const NoCommitMessage = () => (
    <div>
        No commits yet.
    </div>
);

export default RepositoryComponent;
