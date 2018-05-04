import moment from 'moment';
import PropTypes from 'prop-types';
import React from 'react';
import LineEllipsis from 'react-lines-ellipsis'


const CommitComponent = ({committedDate, abbreviatedOid, message}) => {
    const dateStyles = {
    opacity: ".5"
    };

    const date = moment(committedDate).fromNow();

    return (
        <div style={{paddingLeft: "1em"}}>
            {abbreviatedOid}:
            <LineEllipsis text= {message} maxLine="1" ellipsis="..." trimRight basedOn='letters'/>
            <div style={dateStyles}>({date})</div>
        </div>
    )
};

CommitComponent.propTypes = {
    abbreviatedOid: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    committedDate: PropTypes.string.isRequired
};

export default CommitComponent;
