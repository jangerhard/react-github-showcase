import moment from 'moment';
import PropTypes from 'prop-types';
import React from 'react';

const CommitComponent = ({committedDate, abbreviatedOid, message}) => {

    const date = moment(committedDate).fromNow();

    return (
        <div style={{paddingLeft: "1em"}}>
            {abbreviatedOid}: {message} ({date})
        </div>
    )
};

CommitComponent.propTypes = {
    abbreviatedOid: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    committedDate: PropTypes.string.isRequired
};

export default CommitComponent;

