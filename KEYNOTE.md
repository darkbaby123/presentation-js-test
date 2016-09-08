# Test Redux app with Mocha



# Why JavaScript test is hard?

- Need to combine several libraries, make lots of choices
- Run on Node.js or browser (depend on your choice)



# Test frameworks, lots of choices

- Mocha
- Jasmine
- Jest
- Karma
- JUnit
- Chai
- expect
- Sinon
- ...



# Grouped into below types

- Test framework - describe test suit, test example, etc.
- Test runner - run the tests on Node.js or browser
- Assertion library - you know what it is
- Mock library - mock/stub/spy



# Some frameworks plays several roles

- Mocha - framework, runner (Node.js and browser)
- Jasmine - framework, runner (browser), assertion
- Jest - framework, runner, auto-mock
- Karma - runner
- Chai/expect - assertion
- Sinon - mock



# One more thing

There's also lots of front-end build tools...

- Webpack
- Browserify
- Gulp
- Grunt
- Rollup



# What should I learn?

Just pick one and getting started.

We'll use (mainly):

- Mocha
- expect
- Webpack



# A simple Mocha example on Node.js

DEMO



# A simple Mocha example on browser

DEMO

**Requirement**

- Create an index.html
- Load Mocha JS & CSS
- Load source & test files
- Run Mocha to execute all tests

**Problems**

- Browser doesn't have a module system (no `require`)
- manage the dependencies & orders by hand (i.e. <script>)

**Solution**

- Use Webpack to parse & bundle the file



# CommonJS to ES module

- Add Babel, preset, and loader for Webpack
- Add `.babelrc`



# Init Redux app

DEMO



# Mocha & Webpack on Node.js

- Use mocha-webpack



# Test reducer & action



# Mocha & Webpack on browser

- Use mocha-loader



# Test React component (shallow rendering)



# Test React component (full rendering)

- Use `webpack.DefinePlugin` to conditionally load jsdom
