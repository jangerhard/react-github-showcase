import React from 'react';
import PropTypes from 'prop-types';

class ProfileInfoComponent extends React.Component {
    render() {
        return (
            <div className="profileInfo" style={{
                display: "flex",
                flexDirection: "column"
            }}>
                <img className="pic" style={{
                    width: "50%",
                    borderRadius: "50%"
                }}
                     src={this.props.avatarUrl}>

                </img>
                {this.props.fullName}
            </div>
        )
    }
}

ProfileInfoComponent.propTypes = {
    fullName: PropTypes.string.isRequired,
    avatarUrl: PropTypes.string.isRequired
};

export default ProfileInfoComponent;