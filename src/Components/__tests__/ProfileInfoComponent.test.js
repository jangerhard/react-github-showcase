import React from "react";
import ShallowRenderer from 'react-test-renderer/shallow';
import ProfileInfoComponent from "../ProfileInfoComponent";

const fullName = 'Test Testington';
const avatarUrl = 'www.avatarurl.com';

it('renders profile-info correctly', () => {
    const renderer = new ShallowRenderer();
    renderer.render(
        <ProfileInfoComponent
            fullName={fullName}
            avatarUrl={avatarUrl}
        />
    );
    const tree = renderer.getRenderOutput();
    expect(tree).toMatchSnapshot();
});
it('renders profile-info correctly when loading', () => {
    const renderer = new ShallowRenderer();
    renderer.render(
        <ProfileInfoComponent
            fullName={fullName}
            avatarUrl={avatarUrl}
            loading
        />
    );
    const tree = renderer.getRenderOutput();
    expect(tree).toMatchSnapshot();
});