# Typescript Project Setup Guide

This is an empty template for creating TypeScript projects. It also includes ESLint and Jest.

The easiest way of creating a new project is by forking this into a new GitHub repository:
* fork this repo on [GitHub](https://github.com/software-developer-org/typescript-template)
by pressing the fork button on the upper right side.
* choose the account you want your fork (your new repo) to be placed
* click on the settings button in your forked repo and change the name e.g. to 'myproject'
* open a console / bash and get a local copy using `git clone https://github.com/youraccount/yourproject'
* change the package.json to your needs
* ...enjoy with your new project :)!

# Setup tool chain

* **Git:**

Install and configure git following this [git-started](https://github.com/software-developer-org/git-started) as a basic tutorial.

In case you are new to git: step back, take your time, and work through the tutorial at your own speed! git is tool you will work on a daily basis. The better you understand and dive deeper into it, the more productive you will be on your daily business!

Once you have mastered the basics of git followed these intermediate [git-bootcamp](https://github.com/software-developer-org/bootcamp) exercises.

* **Node.js:**

You can find the latest version for your system at [nodejs.org](https://nodejs.org/en/). There are two versions:

- a long time support version (LTS): which should be used on production
- latest version: if you are curios about the latest Node features

If you are not implementing in Node, or do just TypeScript, then go for the LTS. This will also make your life easier when integrating other projects or apis.

* **Node Package Manager (npm)**

NOTE: If you install Node.js it also includes npm.

npm is (a) a [registry](https://docs.npmjs.com/about-npm/) where you can find all open source packages [here](npmjs.com) and (b) a command line tool (CLI) for installing node packages from this registry (and others).


 * **VSCode**
 Visual Studio Code  is a lightweight but powerful source code editor you can download the latest version on [code.visualstudio.com](https://code.visualstudio.com/)

* **VSCode Plugins**
VSCode has some realy helpful extensions. For intalling extensions follow [these instructions](https://code.visualstudio.com/docs/editor/extension-gallery).
We recommend the following extensions:

  * [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
  * [Prettier ESLint](https://marketplace.visualstudio.com/items?itemName=rvest.vs-code-prettier-eslint)
  * [Prettier- Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
  * [Git History](https://marketplace.visualstudio.com/items?itemName=donjayamanne.githistory)

  The easiest way to install them is to search for each in the vscode extention tab (Ctrl+Shift+X)


## Getting Started

Your project configuration is defined in the Node configuration file 'package.json'. In this file all the required Node packages for this project are defined.
These packages will be installed by the folling CLI command. Open your console and enter:

```bash
> npm install
# the following is only output...
npm WARN typescript-template@1.0.0 No repository field.
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@2.1.3 (node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@2.1.3: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})

added 621 packages from 373 contributors and audited 622 packages in 13.291s

21 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```

All installed packages will appear in the node_modules folder. Every time the package.json is updated, this folder can be updated using `npm install`.

**Jest**

Jest is used for unit testing your code. You can find an example file with the corresponding test in this repo.

All tests can be started by:

```bash
npm test
```

Note: `npm test` points to a script named 'test' as defined in package.json. In this case it is a shortform for `npx jest`.

Jest allows a TestPathPattern (see help using `npx jest --help`). Examples:

```bash
# run all tests containing the pattern 'example-code'
npm test example-code
# run all tests starting ending with test.ts
npm test *test.ts
```

* You can also use Jest to debug your code.
The conifg needed is already in the .vscode folder.

  * Use the debug tab (Ctrl+Shift+D), select the 'Debug Jest Tests' option in the upper left corner and press the green start button this will run all tests in debug mode.

  * If you want to run a single test open your launch.json file in the .vscode folder. in the 'runtimeArgs' object is a comment for the filename you want to singel test. simply insert your filename and uncomment it then start the debuger again.

For more information on how to use jest visit [jestjs.io](https://jestjs.io/docs/en/getting-started)


**ESLint & Prettier**

For better code formating install the two libs in your project folder as devDependencies.

```bash
# This adds the eslint package into package.json and installs it
npm install -D eslint
# dito
npm install -D prettier
```
or install them globally for general use using the -g prefix
 ```bash
npm install -g eslint
```

You can use the two basic config files in this repo.
If you want to personalise your config visit the following sites for more information:
+ [prettier config](https://prettier.io/docs/en/options.html)
+ [eslint config](https://eslint.org/docs/user-guide/configuring)

