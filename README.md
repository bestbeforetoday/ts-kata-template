# Overview

A skeleton TypeScript project designed as a starting point for a code kata. The project is configured with:
- [Jest](https://jestjs.io/) as a test runner.
- [ESLint](https://eslint.org/) as a linter.

# Getting started

## Prerequisites

Ensure that you have [Node.js](https://nodejs.org/) installed. Particularly if you may need to develop using multiple Node.js versions, I recommend using [Node Version Manager (NVM)](https://github.com/nvm-sh/nvm) to manage installation, update and switching between Node.js versions.

## Getting started

Clone this repository to your local development environment. In the top-level directory of this project, download project dependencies with the command:
```
npm install
```

You should now be able to run the unit tests with the command:
```
npm test
```

This will produce a test failure so you can familiarize yourself with how test errors are presented.

The unit tests can be run in "watch" mode, which will cause the tests to run every time a code change occurs, using the command:
```
npm test -- --watchAll
```



## Project structure

- `src/` contains source code to be tested.
- `test/` contains unit tests that define a specification for the behaviour of the source code.
