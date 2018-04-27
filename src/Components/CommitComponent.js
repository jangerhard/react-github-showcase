import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

class CommitComponent extends React.Component {

    render() {

        const date = moment(this.props.committedDate).fromNow();

        return(
            <div style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "left",
                paddingLeft: "1em"
            }}>
                <div style={{
                    paddingLeft: "1em"
                }}>{this.props.abbreviatedOid}</div>
                :
                <div style={{
                    paddingLeft: "0.5em"
                }}>
                    {this.props.message}
                    </div>
                <div style={{
                    
                    paddingLeft: "0.5em"
                }}> </div>
                 ({date})
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

