# Introduction

This example is about a simple Typescript nodejs module that can be published to [npmjs.org](https://docs.npmjs.com/packages-and-modules/contributing-packages-to-the-registry) or other NPM registries. It should help you to quickly start a new Typescript project for a resuable module with all important aspects of a project, such as testing, coverage and code analysis.

If you want to start a new nodejs module based on Typescript without a graphical user interface (GUI) then you can simply use this one.
It uses:

* [Typescript](https://en.wikipedia.org/wiki/TypeScript) to write more secure and maintainable Javascript code
* [Prettier](https://prettier.io/docs/en/index.html) to make your code more readable using [code formatting](https://en.wikipedia.org/wiki/Prettyprint)
* [Eslint](https://en.wikipedia.org/wiki/ESLint) to analyse your code for inconsistencies, bad practices or security issues using [static code analysis](https://en.wikipedia.org/wiki/Static_program_analysis)
* [Jasmine](https://jasmine.github.io/) to write unit tests for your module
* [Istanbul NYC](https://github.com/istanbuljs/nyc) to calculate how much of your module code is [covered](https://en.wikipedia.org/wiki/Code_coverage) by unit tests

# Clean

In order to clean all build outputs (dist, coverage etc.) you need to run

```
npm run clean
```
# Code formatting
It is important to have readable code and ensure a consisting read experience accross the code base - even if written by different team members.
You can automatically format all your code by running
```
npm run fmt
```

You can define which files should be ignored by this in [.prettierignore](.prrettierignore). It is often very similar to your .gitignore.

You can configure the code formatting in [.prettierrc.json](.prettierrc.json).

# Build

To build the module run

```
npm run build
```

You will will find all built code in the dist folder

# Build for production
Production builds are more compact and do not contain unnecessary files.
You can build a production build using
```
npm run build-prod
```
You will will find all built code in the dist folder

# Code analysis

Analysis of the code can be run via

```
npm run codeanalysis
```

If there are issues with your code it will prompt them to you include the line of code and the issue.
You can configure it via the configuration file [.eslintrc.json](.eslintrc.json)

# Test

Testing can be run via

```
npm run test
```

It will produce a table that shows you a summary of your test coverage of your module. Additionally it will report the following outputs:

- A HTML report in the folder coverage/index.html. You can browse through all code files and see where coverage is still missing
- A [lcov](https://linux.die.net/man/1/lcov) report that can integrated in various code reporting tools, such as [Sonarqube](https://en.wikipedia.org/wiki/SonarQube)

It is recommended to store the test results in a versioned manner with your release files, so people can check them.

You can specify your own tests by adding a \*.spec.ts file in the folder spec. See [spec/index.spec.ts](spec/index.spec.ts) for an example.

You can configure testing via [spec/support/jasmin.json](spec/support/jasmine.json).

You can configure coverage via [.nycrc.json](.nycrc.json).

# Continuous Integration Pipeline
We provide a [continuous integration](https://en.wikipedia.org/wiki/Continuous_integration) pipeline using [Github Actions](https://docs.github.com/en/actions/learn-github-actions/understanding-github-actions).

The workflow is defined in [.github/workflows/build.yml](.github/workflows/build.yml).


You may also look at other continuous integration alternatives, such as [Travis-CI](https://www.travis-ci.com/).
# License

Copyright 2021 ZuInnoTe (Jörn Franke)

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
