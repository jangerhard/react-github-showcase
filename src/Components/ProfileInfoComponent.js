import PropTypes from 'prop-types';
import React from 'react';

const styles = {
    display: "flex",
    flexDirection: "column",
    width: "10em",
    marginRight: "1.5em",
    textAlign: "center"
};

const imageStyles = {
    borderRadius: "50%",
    height: "100%",
    width: "100%"
};
const ProfileInfoComponent = ({ avatarUrl, fullName }) => (
    <div className="profileInfo" style={styles}>
        <img className="pic" style={imageStyles} src={avatarUrl} />

        {fullName}
    </div>
);

ProfileInfoComponent.propTypes = {
    fullName: PropTypes.string.isRequired,
    avatarUrl: PropTypes.string.isRequired
};

export default ProfileInfoComponent;
