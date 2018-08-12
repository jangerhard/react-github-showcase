import React from 'react';
import ProfileInfoComponent from "./ProfileInfoComponent";
import RepositoriesComponent from "./RepositoriesComponent";

const containerStyle = {
    display: "flex",
    flexDirection: "column"
};

const mainStyle = {
    display: "flex",
    flexDirection: "row"
};

const MainComponent = ({name, avatarUrl, repos, showProfileInfo}) =>
    <div style={containerStyle}>
        <h3> Latest Github Activity test </h3>

        <div style={mainStyle}>

            {showProfileInfo &&
            <ProfileInfoComponent
                fullName={name}
                avatarUrl={avatarUrl}/>
            }

            <RepositoriesComponent repos={repos}/>
        </div>
    </div>;

export default MainComponent