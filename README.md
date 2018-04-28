[![CircleCI](https://circleci.com/gh/jangerhard/react-github-showcase.svg?style=svg)](https://circleci.com/gh/jangerhard/react-github-showcase)

# React Github Showcase

A small react component showcasing the latest contributions to your Github profile.

Uses headers to keep style consistent with your theme.

Still under development, but usable!

![Image of component wrapped in styled div](https://lh3.googleusercontent.com/CXqKYftHCoQfDvxtUXJ0Kbiae8D2ADfZKn1Yx3imYYfLkoH3wgLrnFdhjVGPXco5IK8ao-Uvzjg30kILaryXpv8_r-Pdy6hIIfpNq-AxYryLhz_jYb5fzRPaQ5z5eMqlTM7vyieOMKavpmBrJa3TCEBXXqgmP9u8ckUIv-126mQ8N3tJEIpktCs_ljk4-46hXRoGVL7UbO6q5dfkoxIFILWGnSMGOln9azFwxnhoyTbxnOMRmIGTRQyUtO7nFBgDqgltC5XvZQlwt-7tAErIqa1s-6clEd4Ga01sKJvcAPHxm7ctSlU3KhFDR9ofDjEY7VwSc-oPS-gSAClzJdeerUWLIunfgMoQWgUgQqy_S2xQQw043SPvUo_FLwCmBvFW_QPaqXCSdpQkK-vlrIuvpuPzlupKuz-nVps6c1DinNgY0Q3pVBbN20eu6v9NZjVgZzW7YuZyi82JvqQzD_-HY7azDgw_kUtccoTHvGQuCJNMhonZcsPjAA62frL6li0tQb2d4P2ZBlMx4WiDusJ2A6jcVxDbIiykxHmyxYtaQArfhz6ELiGtHlS3HDg2nWRUvWPD5FJ8OHgSTeAtydK2RvB_IA6A3cqrqp84FmC9=w814-h350-no)

## Installation
```
npm install react-github-showcase
```

## Usage

Add this component to your project and style the wrapping Div however you want! Provide the component with a username to look up and your own API-key from Github so that the component can use GraphQL to query for information.

```
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