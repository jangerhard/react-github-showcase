import React from "react";
import ShallowRenderer from 'react-test-renderer/shallow';
import RepositoriesComponent from "../RepositoriesComponent";

const repos = [
    {
        "node": {
            "name": "react-github-showcase",
            "url": "https://github.com/jangerhard/react-github-showcase",
            "ref": {
                "target": {
                    "history": {
                        "nodes": [
                            {
                                "author": {
                                    "name": "Jan Gerhard Schoepp",
                                    "avatarUrl": "https://avatars2.githubusercontent.com/u/6482205?v=4"
                                },
                                "message": "Update README.md",
                                "abbreviatedOid": "3ce6669",
                                "committedDate": "2018-05-04T19:59:54Z",
                                "url": "https://github.com/jangerhard/react-github-showcase/commit/3ce6669da1f699e254a4aaccd5964863915547a0"
                            },
                            {
                                "author": {
                                    "name": "jangerhard",
                                    "avatarUrl": "https://avatars2.githubusercontent.com/u/6482205?v=4"
                                },
                                "message": "0.0.14",
                                "abbreviatedOid": "0106258",
                                "committedDate": "2018-05-04T17:40:37Z",
                                "url": "https://github.com/jangerhard/react-github-showcase/commit/01062589e243a9044b04c49f86775937af273fe8"
                            }
                        ]
                    }
                }
            }
        }
    },
    {
        "node": {
            "name": "PersonalGatsbyWebsite",
            "url": "https://github.com/jangerhard/PersonalGatsbyWebsite",
            "ref": {
                "target": {
                    "history": {
                        "nodes": [
                            {
                                "author": {
                                    "name": "Jan Gerhard Schoepp",
                                    "avatarUrl": "https://avatars2.githubusercontent.com/u/6482205?v=4"
                                },
                                "message": "Merge pull request #2 from jangerhard/cleanup_components\n\nCleanup components",
                                "abbreviatedOid": "66aea85",
                                "committedDate": "2018-05-03T18:43:21Z",
                                "url": "https://github.com/jangerhard/PersonalGatsbyWebsite/commit/66aea85be45f73383509466e8d48e376da3cb088"
                            },
                            {
                                "author": {
                                    "name": "jangerhard",
                                    "avatarUrl": "https://avatars2.githubusercontent.com/u/6482205?v=4"
                                },
                                "message": "Use shorthand for components",
                                "abbreviatedOid": "63c5423",
                                "committedDate": "2018-05-03T18:38:07Z",
                                "url": "https://github.com/jangerhard/PersonalGatsbyWebsite/commit/63c5423e955f0b5064d2abe556d75d568d9f849a"
                            }
                        ]
                    }
                }
            }
        }
    }
];

const reposWithNoCommits = [
    {
        "node": {
            "name": "react-github-showcase",
            "url": "https://github.com/jangerhard/react-github-showcase",
            "ref": null
        }
    },
    {
        "node": {
            "name": "PersonalGatsbyWebsite",
            "url": "https://github.com/jangerhard/PersonalGatsbyWebsite",
            "ref": null
        }
    }
];

test('renders repositories correctly when loading', () => {
    const renderer = new ShallowRenderer();
    renderer.render(
        <RepositoriesComponent
            repos={repos}
            loading
        />
    );
    const tree = renderer.getRenderOutput();
    expect(tree).toMatchSnapshot();
});
test('renders repositories correctly', () => {
    const renderer = new ShallowRenderer();
    renderer.render(
        <RepositoriesComponent
            repos={repos}
        />
    );
    const tree = renderer.getRenderOutput();
    expect(tree).toMatchSnapshot();
});

test('renders repositories with no commits ', () => {
    const renderer = new ShallowRenderer();
    renderer.render(
        <RepositoriesComponent
            repos={reposWithNoCommits}
        />
    );
    const tree = renderer.getRenderOutput();
    expect(tree).toMatchSnapshot();
});