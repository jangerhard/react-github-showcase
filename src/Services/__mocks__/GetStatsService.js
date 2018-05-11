import {query} from "../GetStatsService";

const API = 'https://api.github.com/graphql';

const fakeData = [
    {
        "avatarUrl": "https://avatars2.githubusercontent.com/u/6482205?v=4",
        "name": "Jan Gerhard Schoepp",
        "repositories": {
            "edges": [
                {
                    "node": {
                        "name": "react-github-showcase",
                        "url": "https://github.com/jangerhard/react-github-showcase",
                        "ref": {
                            "target": {
                                "history": {
                                    "nodes": [
                                        {
                                            "message": "Update README.md",
                                            "abbreviatedOid": "a6e242e",
                                            "committedDate": "2018-05-01T10:28:23Z"
                                        },
                                        {
                                            "message": "Extract Github Service and use component shorthand and destructering (#1)\n\n* 0.0.11\r\n\r\n* Use component shorthand and destructering\r\n\r\n* Extract service\r\n\r\n* Finish up extracting service",
                                            "abbreviatedOid": "c12cffd",
                                            "committedDate": "2018-05-01T09:30:22Z"
                                        }
                                    ]
                                }
                            }
                        }
                    }
                },
                {
                    "node": {
                        "name": "SchoeppBrewery",
                        "url": "https://github.com/jangerhard/SchoeppBrewery",
                        "ref": {
                            "target": {
                                "history": {
                                    "nodes": [
                                        {
                                            "message": "Fix layouts",
                                            "abbreviatedOid": "d5c27ea",
                                            "committedDate": "2018-04-14T14:31:37Z"
                                        },
                                        {
                                            "message": "Set middle row of grid to auto",
                                            "abbreviatedOid": "075443f",
                                            "committedDate": "2018-04-14T11:50:51Z"
                                        }
                                    ]
                                }
                            }
                        }
                    }
                },
                {
                    "node": {
                        "name": "ReactPluralsight",
                        "url": "https://github.com/jangerhard/ReactPluralsight",
                        "ref": {
                            "target": {
                                "history": {
                                    "nodes": [
                                        {
                                            "message": "Finish course",
                                            "abbreviatedOid": "d96e05b",
                                            "committedDate": "2018-04-11T19:03:53Z"
                                        },
                                        {
                                            "message": "Add tests using Enzyme and Testing Utils",
                                            "abbreviatedOid": "8feb574",
                                            "committedDate": "2018-03-03T19:35:04Z"
                                        }
                                    ]
                                }
                            }
                        }
                    }
                }
            ]
        }
    }
];

export const getStatsFor = () => {
    return new Promise(resolve => {
        resolve(fakeData);
    });
};
