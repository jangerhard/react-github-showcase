import React from 'react';
import PropTypes from 'prop-types';

class CommitComponent extends React.Component {

    render() {

        return(
            <div style={{
                paddingLeft: "3em"
            }}>
                {this.props.abbreviatedOid} : {this.props.message} ({this.props.committedDate})
            </div>
        )
    }
}

CommitComponent.propTypes = {
    abbreviatedOid: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    committedDate: PropTypes.string.isRequired
};

export default CommitComponent;

