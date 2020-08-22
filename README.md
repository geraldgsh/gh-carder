# React and Redux

This is the **GitHub Actions configuration**. If you are looking for the **Stickler configuration**, you can find it [here](https://github.com/microverseinc/linters-config/tree/Stickler/react-redux).

If you are not familiar with linters and GitHub Actions, read [root level README](../README.md).

## Set-up GitHub Actions

This GitHub Action is going to run [ESLint](https://eslint.org/) and [Stylelint](https://stylelint.io/) to help you find style issues.

[Stylelint](https://stylelint.io/) is a linter for your stylesheets that helps you avoid errors and enforce conventions.

[ESLint](https://eslint.org/) is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code, with the goal of making code more consistent and avoiding bugs.

Please do the following **steps in this order**:

1. In the first commit of your feature branch create a `.github/workflows` folder and add a copy of [`.github/workflows/linters.yml`](.github/workflows/linters.yml) to that folder.
    - **Remember** to use the file linked above
    - **Remember** that `.github` folder starts with a dot.
2. **Do not make any changes in config files - they represent style guidelines that you share with your team - which is a group of all Microverse students.**
    - If you think that change is necessary - open a [Pull Request in this repository](../README.md#contributing) and let your code reviewer know about it.
3. When you open your first pull request you should see the result of the GitHub Actions:

![gh actions checks](../assets/images/gh-actions-eslint-stylelint-checks.png)

Click on the `Details` link to see the full output and the errors that need to be fixed:

![gh actions failing checks](../assets/images/gh-actions-html-css-failing-checks.png)

## Set-up linters in your local env

### ESLint

1. Run `npm install --save-dev eslint@6.8.x eslint-config-airbnb@18.1.x eslint-plugin-import@2.20.x eslint-plugin-jsx-a11y@6.2.x eslint-plugin-react@7.20.x eslint-plugin-react-hooks@2.5.x` (not sure how to use npm? Read [this](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)).

```
$ npm install --save-dev eslint@6.8.x eslint-config-airbnb@18.1.x eslint-plugin-import@2.20.x eslint-plugin-jsx-a11y@6.2.x eslint-plugin-react@7.20.x eslint-plugin-react-hooks@2.5.x

+ eslint-config-airbnb@18.1.0
+ eslint-plugin-react@7.20.6
+ eslint-plugin-import@2.20.2
+ eslint-plugin-jsx-a11y@6.2.3
+ eslint-plugin-react-hooks@2.5.1
+ eslint@6.8.0
added 456 packages from 105 contributors, removed 150 packages, updated 1384 packages and audited 1851 packages in 264.998s

70 packages are looking for funding
```

2. Copy [.eslintrc.json](./.eslintrc.json) to the root directory of your project.
3. **Do not make any changes in config files - they represent style guidelines that you share with your team - which is a group of all Microverse students.**
    - If you think that change is necessary - open a [Pull Request in this repository](../README.md#contributing) and let your code reviewer know about it.
4. Run `npx eslint .` on the root of your directory of your project.
5. Fix linter errors.
6. **IMPORTANT NOTE**: feel free to research [auto-correct options for Stylelint](https://stylelint.io/user-guide/cli#autofixing-errors) if you get a flood of errors but keep in mind that correcting style errors manually will help you to make a habit of writing a clean code!

### Stylelint

1. Run

   ```
   npm install --save-dev stylelint@13.3.x stylelint-scss@3.17.x stylelint-config-standard@20.0.x stylelint-csstree-validator
   ```

   (not sure how to use npm? Read [this](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)).


```
$ npm install --save-dev stylelint@13.3.x stylelint-scss@3.17.x stylelint-config-standard@20.0.x stylelint-csstree-validator

+ stylelint-config-standard@20.0.0
+ stylelint-csstree-validator@1.8.0
+ stylelint-scss@3.17.2
+ stylelint@13.3.3
added 136 packages from 91 contributors, removed 10 packages, updated 6 packages and audited 1987 packages in 67.901s

113 packages are looking for funding
```

2. Copy [.stylelintrc.json](./.stylelintrc.json) to the root directory of your project.
3. **Do not make any changes in config files - they represent style guidelines that you share with your team - which is a group of all Microverse students.**
   - If you think that change is necessary - open a [Pull Request in this repository](../README.md#contributing) and let your code reviewer know about it.
4. Run
   ```
   npx stylelint "**/*.{css,scss}"
   ```
   on the root of your directory of your project.
5. Fix linter errors.
6. **IMPORTANT NOTE**: feel free to research [auto-correct options for Stylelint](https://stylelint.io/user-guide/cli#autofixing-errors) if you get a flood of errors but keep in mind that correcting style errors manually will help you to make a habit of writing a clean code!

## Test/Deployment Actions

Feel free to add your own deployment actions which can run your tests and deploy to Heroku.

Make sure that you do not modify the [`.github/workflows/linters.yml`](.github/workflows/linters.yml) but that you create a separe GitHub Action workflow file for that.
