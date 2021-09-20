
# Account App Backend

Account app description

# Table of contents:
![Build status](https://img.shields.io/travis/request/request/master.svg?style=flat-square)  ![Dependency Status](https://img.shields.io/david/request/request.svg?style=flat-square) ![Known Vulnerabilities](https://snyk.io/test/npm/request/badge.svg?style=flat-square)
- [Pre-reqs](#pre-reqs)
- [Getting started](#getting-started)
- [Account app Backend](#account-app-backend)
	- [Project Structure](#project-structure)
	- [ESLint](#eslint)
- [Dependencies](#dependencies)
	- [`dependencies`](#dependencies-1)
	- [`devDependencies`](#devdependencies)

# Pre-reqs
To build and run this app locally you will need a few things:
- Install [Node.js](https://nodejs.org/en/)(VERSION 10.16.0)
- Install [Sequelize](http://docs.sequelizejs.com/manual/getting-started.html#installing)(VERSION 5.9.4)
- Install [Sequelize-CLI](https://www.npmjs.com/package/sequelize-cli)(VERSION 5.5.0)
- Install [VS Code](https://code.visualstudio.com/)

# Getting started
- Clone the repository
```
git clone https://github.com/assiswasiq/vz-technical-exam.git
```
- Install dependencies
```
cd <Account-app-server>
npm install
```
- Configure app with your local MYSQL server.
```bash
# go to config file
cd /src/config
# update the cofig.js with your current local setting
sudo nano config.json
```
- Run the project
```
npm run dev
```

Finally, navigate to `http://localhost:8080` and you should see the backend is running. Now you will test apis with postman!

## Project Structure
The full folder structure of this app is explained below:

> **Note!** Make sure you have already test the app using `npm run test`

| Name | Description |
| ------------------------ | --------------------------------------------------------------------------------------------- |
| **.vscode**              | Contains VS Code specific settings.                                                           |
| **src**                  | Contains the source code written in ES6.                                                      |
| **src/database**         | Contains in memory stored database.                                                           |
| **src/config**           | Contains the configutations for the application databases etc.                                |
| **src/routes**           | Contains all your application routes.                                                               |
| **src/services**         | Responsible for implementing the business logic, and provide the operation result.         |
| **src/shared**           | Contains shared element within classes or modules.                                            |
| **src/utils**            | Contains application's utilities.                                                             |
| **app.js**               | Main application file and contains express application configurations.                        |
| **test**                 | Contain all the test files.                                                   |
| **dist**                 | Contain all the build files for production.                                                   |
| **node_modules**         | Contains all your npm dependencies.                                                           |
| **package.json**            | Contains all your npm modules.                                          |

### Running the scripts
Npm scripts basically allow us to call (and chain) terminal commands via npm.
This is nice because most JavaScript tools have easy to use command line utilities allowing us to not need grunt or gulp to manage our builds.
If you open `package.json`, you will see a `scripts` section with all the different scripts you can call.
To call a script, simply run `npm run <script-name>` from the command line.

Below is a list of all the scripts this template has available:


| Npm Script | Description |
| ------------------------- | ------------------------------------------------------------------------------------------------- |
| `start`                   | Run the `./app.js` main file. Can be invoked with `npm start`.   |
| `test`             | Run the test file.        |
| `build`                   | Full build for production.                                                         |
| `dev`                     | Runs nodemon on `src/app.js` which is the apps entry point.         |
| `lint`                    | Runs ESLint on project files.                                       |
| `copy-config`             | Copies the sequelize config file into dist/config directory.        |
| `remove-build`             | Run the `./removeDist.js`.        |


## ESLint
ESLint is a code linter which mainly helps catch minor code quality and style issues.

### ESLint rules
Like most linters, TSLint has a wide set of configurable rules as well as support for custom rule sets.
All rules are configured through `eslint.json`.
In this project, we are using a fairly basic set of rules with no additional custom rules.
The settings are largely based off the ESLint settings that we use to develop JavaScript itself.

### Running ESLint
To run ESLint you can call the main build script or just the ESLint task.
```
npm run eslint  // runs only ESLint
```
Notice that ESLint is not a part of the main watch task.

# Dependencies
Dependencies are managed through `package.json`.
In that file you'll find two sections:

## `dependencies`

| Package                         | Description                                                           |
| ------------------------------- | --------------------------------------------------------------------- |
| dotenv                          | Loads environment variables from .env file.                           |
| express                         | Node.js web framework.                                                |
| winston                         | Logging library                                                       |
| uuid                            |                                                                       |

## `devDependencies` 

| Package                         | Description                                                            |
| ------------------------------- | ---------------------------------------------------------------------- |
| nodemon                         | nodemon is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.             |
| shelljs                         | Portable Unix shell commands for Node.js                               |
| @babel/cli                        | Babel command line                              |
| @babel/core                         | Babel compiler core               |
| @babel/node                         | Babel command line for Node                    |
| @babel/polyfill                         | Provides polyfills necessary for a full ES2015+ environment                   |
| @babel/preset-env                         | A Babel preset for each environment.                             |
| chai                         | Chai is a BDD / TDD assertion library  |
| chai-http                        | HTTP integration testing with Chai assertions.                              |
| mocha                       | JavaScript test framework                             |
|nyc                       | Istanbul command line interface                              |

To install or update these dependencies you can use `npm install` or `npm update`.

## License
Copyright (c) Deline Media LLC. All rights reserved.
Licensed under the [MIT](LICENSE.txt) License.