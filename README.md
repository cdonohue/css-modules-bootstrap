# css-modules-bootstrap
Using css modules with Bootstrap for component composition

This is a simple example that composes a local css file with a bootstrap button.

In order to consume a bootstrap less component, we must intercept the file as it's being imported and add `variables.less` and `mixins.less`, which all bootstrap components expect to be loaded.

To run:

1. `nvm install`
2. `npm install`
3. `npm start`
