import React from 'react';
import PropTypes from 'prop-types';

class ProfileInfoComponent extends React.Component {
    render() {
        return (
            <div className="profileInfo" style={{
                display: "flex",
                flexDirection: "column",
                width: "10em",
                marginRight: "1.5em",
                textAlign: "center"
            }}>
                <img className="pic" style={{
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
    fullName: PropTypes.func.isRequired,
    avatarUrl: PropTypes.func.isRequired
};

export default ProfileInfoComponent;