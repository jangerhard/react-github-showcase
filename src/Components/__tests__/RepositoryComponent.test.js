import React from "react";
import ShallowRenderer from 'react-test-renderer/shallow';
import RepositoryComponent from "../RepositoryComponent";

const name = 'Test Testington';
const commits = [
    {
        abbreviatedOid: 'AAAAAA',
        message: 'This is a commit message',
        committedDate: '2018-05-04T19:59:54Z',
    }
];
const url = 'www.test.com';

test('renders repository correctly', () => {
    const renderer = new ShallowRenderer();
    renderer.render(
        <RepositoryComponent
            commits={commits}
            name={name}
            url={url}
        />
    );
    const tree = renderer.getRenderOutput();
    expect(tree).toMatchSnapshot();
});

test('renders repository with no commits correctly', () => {
    const renderer = new ShallowRenderer();
    renderer.render(
        <RepositoryComponent
            commits={[]}
            name={name}
            url={url}
        />
    );
    const tree = renderer.getRenderOutput();
    expect(tree).toMatchSnapshot();
});