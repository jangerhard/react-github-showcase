import ShallowRenderer from 'react-test-renderer/shallow';
import CommitComponent from "../CommitComponent";
import React from "react";

const abbreviatedOid = 'AAAAAA';
const message = 'This is a commit message';
const committedDate = '2018-05-04T19:59:54Z';

it('renders commit correctly', () => {
    const renderer = new ShallowRenderer();
    renderer.render(
        <CommitComponent
            message={message}
            abbreviatedOid={abbreviatedOid}
            committedDate={committedDate} />
    );
    const tree = renderer.getRenderOutput();
    expect(tree).toMatchSnapshot();
});