import React from 'react';
import PropTypes from 'prop-types';

class AuthorComponent extends React.Component {

    render() {
        return (
            <div/>
        )
    }
}

AuthorComponent.propTypes = {
    name: PropTypes.string.isRequired,
    avatarUrl: PropTypes.string.isRequired
};

export default AuthorComponent;