[![CircleCI](https://circleci.com/gh/jangerhard/react-github-showcase.svg?style=svg)](https://circleci.com/gh/jangerhard/react-github-showcase)

# React Github Showcase

A small react component showcasing the latest contributions to your Github profile.

Uses headers to keep style consistent with your theme.

Still under development, but usable! Can as of May 1st, 2018 be seen in action at [janschoepp-dev](https://janschoepp-dev.netlify.com/projects/).

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

## Change-log

### 0.0.11
Proper formatting of dates

### 0.0.6
Add ability to specify number of repositories and commits to showcase

### 0.0.5
Add ability to hide basic profile info
