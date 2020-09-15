# Typescript Project Setup Guide

## Install Neccessary Software

* **Git**

 To install and configure git follow this instructions [git-started](https://github.com/software-developer-org/git-started).
 

* **Node.js**

You can find the latest version for your system at [nodejs.org](https://nodejs.org/en/) simply install it and your good to go.


* **TypeScript**

After you installed node.js you cann install TypeScript with

```bash
npm install -g typescript
```

## Setup Developer Environment

**For your Conveniance**
You can now clone this repo, personalize the package.json and run
 ```bash
npm install 
``` 

This creates a basic setup for your projekt.


**Jest**

If you want to use jest to test your code you have to set it up for typescript.

*You can skip these steps if you clone this repo*


First install jest in your projekt folder
```bash
npm i -D jest
```
Then install this to libs:

Types for typescript & jest
```bash
npm i -D @types
```
And ts-test which compiles first and then runs the tests
```bash
npm i -D ts-jest
```

Creating a jest.config.js file in the root of the project with the following content:

```bash
module.exports = {
   preset: 'ts-jest',
   testEnvironment: 'node',
   };
   ```
At last add this scripts to your package.json

```bash
"scripts": {
    "test": "jest",
    "built": "tsc"
},
```

For more information on how to use jest visit [jestjs.io](https://jestjs.io/docs/en/getting-started)


**ESLint & Prettier**

For better code formating install the two libs in your project folder as devDependencies.

```bash
npm install -D eslint
npm install -D prettier
``` 
or install them globally for general use using the -g prefix
 ```bash
npm install -g eslint
``` 

You can use the two config files in this repo.
If you want to personalice your conifg visit the following sites for more information:
+ [prettier config](https://prettier.io/docs/en/options.html)
+ [eslint config](https://eslint.org/docs/user-guide/configuring)

