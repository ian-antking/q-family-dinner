# eslint-config-mcr-codes
 
eslint config for learning to code

## Install
Install the npm package as a dev dependency
`npm install eslint-config-mcr-codes --save-dev`

Then install the peer-dependencies
`npm install --save-dev eslint@4.19.1 eslint-plugin-import@2.12.0 eslint-plugin-react@7.9.1 babel-eslint@8.2.5 eslint-plugin-babel@5.1.0`

## Setup
Add an `.eslintrc` file at the root of your project with the following content:

```json
{
  "extends": [
    "mcr-codes"
  ]
}
```

If your project is a React project, add `"mcr-codes/react"` instead of just `"mcr-codes"`

