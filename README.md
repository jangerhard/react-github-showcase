[![CircleCI](https://circleci.com/gh/jangerhard/react-github-showcase.svg?style=svg)](https://circleci.com/gh/jangerhard/react-github-showcase)

# React Github Showcase

A small react component showcasing the latest contributions to your Github profile.

## Installation
```
npm install react-github-showcase
```

## Customization
**Pass these values as props to change the behaviour of the component**

username: *(Required)* The username of Github profile to showcase - String

api_key: *(Required)* A Github API key to access Github's API - String

showProfileInfo: Display basic profile info from Github - Boolean (Default: true)

numRepositories: How many repositories should be displayed - Number (Default: 3)

numCommits: How many repositories should be displayed - Number (Default: 2)

## Change-log

### 0.0.6
Add ability to specify number of repositories and commits to showcase

### 0.0.5
Add ability to hide basic profile info