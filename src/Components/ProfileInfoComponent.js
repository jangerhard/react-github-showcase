import PropTypes from 'prop-types';
import React from 'react';
import {
    TextBlock,
    MediaBlock,
    TextRow,
    RectShape,
    RoundShape
} from 'react-placeholder/lib/placeholders';
import ReactPlaceholder from "react-placeholder";

const styles = {
    display: "flex",
    flexDirection: "column",
    width: "10em",
    marginRight: "1.5em",
    textAlign: "center"
};

const imageStyles = {
    borderRadius: "50%"
};

const awesomePlaceholder =
    <div className="profileInfo" style={styles}>
        <RoundShape color='grey' style={{width: 100, height: 100}}/>
        <TextBlock rows={1} color='grey'/>
    </div>;

const ProfileInfoComponent = ({avatarUrl, fullName, loading}) =>
    <ReactPlaceholder ready={!loading}
                      customPlaceholder={awesomePlaceholder}>
        <div className="profileInfo" style={styles}>
            <img className="pic" style={imageStyles} src={avatarUrl}/>

            {fullName}
        </div>
    </ReactPlaceholder>;

ProfileInfoComponent.propTypes = {
    fullName: PropTypes.string.isRequired,
    avatarUrl: PropTypes.string.isRequired
};

export default ProfileInfoComponent;