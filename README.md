# Typescript Project Setup Guide

## Install Neccessary Software

* **Git:**

To install and configure git follow this instructions [git-started](https://github.com/software-developer-org/git-started).

For a more detailed explenation on git and gitHub with exercises 
visit [git-bootcamp](https://github.com/software-developer-org/bootcamp)

 

* **Node.js:**

You can find the latest version for your system at [nodejs.org](https://nodejs.org/en/).

 Use the LTS version, simply install it and your good to go.

 * **VSCode**
 Visual Studio Code  is a lightweight but powerful source code editor you can download the latest version on [code.visualstudio.com](https://code.visualstudio.com/)

* **VSCode Plugins**
VSCode has some realy helpfull extensions.
We recommend installing the following four:

  * [ESLint](https://eslint.org/)
  * [Prettier- Code formatter](https://prettier.io/)
  * [Prettier ESLint](https://github.com/prettier/prettier-eslint)
  * [Git History](https://github.com/DonJayamanne/gitHistoryVSCode)

  The easiest way to install them is to search for each in the vscode extention tab (Ctrl+Shift+X)


## Setup Developer Environment

**For your Conveniance**

When finished follow these steps to change the template to your own repository.
* fork this repo on [GitHub](https://github.com/software-developer-org/typescript-template)
by pressing the fork button on the upper right side.

* choose the account you want the fork to be placed

* click on the settings button in your forked repo and change the name e.g. 'myproject'

* clone your 'myproject' repo and change the package.json to your needs.

* finally in your 'myrepo' folder run
 ```bash
npm install 
``` 

This creates a basic setup for your project.


**Jest**

--TO DOO--

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

