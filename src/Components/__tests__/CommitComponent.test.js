import ShallowRenderer from 'react-test-renderer/shallow';
import CommitComponent from "../CommitComponent";
import React from "react";

const abbreviatedOid = 'AAAAAA';
const message = 'This is a commit message';
const longMessage = 'This is a very long commit message, which will need to be shortened'
const committedDate = '2018-05-04T19:59:54Z';

// Return a fixed timestamp when moment().format() is called
jest.mock('moment', () => () => ({fromNow: () => '3 days ago'}));

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

it('shortens long commit messages correctly', () => {
  const renderer = new ShallowRenderer();
  renderer.render(
      <CommitComponent
          message={longMessage}
          abbreviatedOid={abbreviatedOid}
          committedDate={committedDate} />
  );
  const tree = renderer.getRenderOutput();
  expect(tree).toMatchSnapshot();
});
