[![CircleCI](https://circleci.com/gh/jangerhard/react-github-showcase.svg?style=svg)](https://circleci.com/gh/jangerhard/react-github-showcase)
[![npm version](https://badge.fury.io/js/react-github-showcase.svg)](https://badge.fury.io/js/react-github-showcase)

# React Github Showcase

A small react component showcasing the latest contributions to your Github profile.

Uses headers to keep style consistent with your theme.

Still under development, but usable! Can as of May 1st, 2018 be seen in action at [React Github Showcase Demos](https://github-showcase-demos.netlify.com).

### Example with a [wrapper-div](https://github.com/jangerhard/PersonalGatsbyWebsite/blob/master/src/components/Common/CardPage.js) providing [styling](https://github.com/jangerhard/PersonalGatsbyWebsite/blob/master/src/components/Common/CardPage.module.css) - See [more](https://github-showcase-demos.netlify.com)
![Image of component wrapped in styled div](https://raw.githubusercontent.com/jangerhard/react-github-showcase/master/react-github-showcase.PNG)

## Installation
```
npm install react-github-showcase
```

## Usage

Add this component to your project and style the wrapping Div however you want! Provide the component with a username to look up and your own API-key from Github so that the component can use GraphQL to query for information.

```
import GithubShowcase from 'react-github-showcase';

<div>
    <GithubShowcase
        username={"jangerhard"}
        api_key={API_KEY}/>
</div>
```

## Customization
**Pass these values as props to change the behaviour of the component**

username: *(Required)* The username of Github profile to showcase - String

api_key: *(Required)* A Github API key to access Github's API - String

showProfileInfo: Display basic profile info from Github - Boolean (Default: true)

numRepositories: How many repositories should be displayed - Number (Default: 3)

numCommits: How many repositories should be displayed - Number (Default: 2)

### Styling 
Wrap the component in a styled div to change the look and feel of the component, while still keeping it consistant with your own theme. See examples [here](https://github-showcase-demos.netlify.com)

