import moment from 'moment';
import PropTypes from 'prop-types';
import React from 'react';

const CommitComponent = ({committedDate, abbreviatedOid, message}) => {

    const date = moment(committedDate).fromNow();

    function shortenMessage(message) {
    message.length > 40 ? message = message.substring(0,37) + "..." : message
    return message
    };

    return (
      <div>
      <span>{abbreviatedOid + ": "} </span>
      <span>{shortenMessage(message)} </span>
      <span>({date})</span>
      </div>

    )
};

CommitComponent.propTypes = {
    abbreviatedOid: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    committedDate: PropTypes.string.isRequired
};

export default CommitComponent;
