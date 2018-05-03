## How to contribute (Short Version)
Clone the project and do development on a feature branch, and then create a pull-request.

## How to contribute (Comprehensive Version)

### Clone/fork repo and navigate to folder
Clone: `git clone https://github.com/jangerhard/react-github-showcase.git`  
Fork: See [Github Guide](https://help.github.com/articles/fork-a-repo/)  
`cd react-github-showcase`

### Create a development branch for your feature/contribution
`git branch feature-[SOME-FEATURE]`

### Do development!

### Set up [NPM Link](http://www.deadcoderising.com/how-to-smoothly-develop-node-modules-locally-using-npm-link/)
`npm link`

### Start it up!
`npm start`

## Use component in a new project to see changes _(Won't be necessary after jest-testing is in place)_
Create a simple React project using a [starter](https://www.gatsbyjs.org/docs/) [pack](https://github.com/facebook/create-react-app) of your choice.

### Set up npm link within your react project
`cd your-react-project`  
`npm link react-github-showcase`

### Import into project 
```
import GithubShowcase from 'react-github-showcase';

<div>
    <GithubShowcase
        username={ANY_VALID_USERNAME}
        api_key={API_KEY}/>
</div>
```

_Remember to not submit your Api Key to Git. Use [Environment Variables](https://medium.com/@tacomanator/environments-with-create-react-app-7b645312c09d)_

### Once you run your react project you should see the Github Showcase! 
