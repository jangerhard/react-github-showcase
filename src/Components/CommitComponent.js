import moment from 'moment';
import PropTypes from 'prop-types';
import React from 'react';

const commitStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: "1em"
};

const dateStyle = {
    opacity: ".5",
    paddingLeft: "0.5em"
};

const CommitComponent = ({committedDate, abbreviatedOid, message}) => {

    const date = moment(committedDate).fromNow();

    return (
        <div style={commitStyle}>
            {abbreviatedOid}: {message}
            <div style={dateStyle}>{date}</div>
        </div>
    )
};

CommitComponent.propTypes = {
    abbreviatedOid: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    committedDate: PropTypes.string.isRequired
};

export default CommitComponent;

