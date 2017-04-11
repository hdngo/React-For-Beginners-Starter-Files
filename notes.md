Setup:
-Need node.js
-all the tooling we need for React is done in node (node -v for version)
--use v6+
-need react dev tools (chrome/ffextension) 
--allows us to look at components, state, props, etc. in a tab on our regular dev tools

we're going to be writing alot of jsx and es6 
-need a highlighter for our editor (babel-sublime for sublime text)

in order to start our webpack processes and such, we'll be using terminal commands
-alternatively, download hyperterm

catch-of-the-day folder - working folder
stepped-solutions - contains stepped code

In order to actually use React, we're going to be using a bunch of modules and be bundling them, so we'll need a module bundler
-rather than pop in a new script tag at the end of the body everytime we have a new dependency, we're going to be writing all of the code in the index.js file and IMPORT all of the libraries as needed
--react, reactDOM, etc.

the module bundler will deal with all the import/exports and package them into a single file (webpack in our case)
-most of the react community seems to have settled on using webpack as their bundler

Behind the scenes we're going to be creating "create-react-app"
-if you've ever tried to create your own react file, it's pretty difficult
-we use create-react-app behind the scenes because it's easier and we'll later learn how to eject from create-react-app to be able to get the details of the react setup

In our package.json, we see all of the dependencies we have and need to build our app
react-scripts is what create-react uses for us

START:
-npm install

start our create-react-app which'll bundle our files and start our servers for us in addition to automatically reloading our site when changes are made
-going to run "npm start" and "npm watch"
--"npm build"

-our site runs at localhost:3000

===========================================
Thinking and Understanding React Components
===========================================
everything in react is a component
a component is a reusable piece of your website
react allows you to build your own tags/components and supply them with information
in our app, we'll render fish components

for React Dev tools, it'll show your custom tags which are really your components
anytime you have a piece of an application, it's generally good to build it into its own component
the "App component" is the parent component 
-the app component will have a state
--the state for our app will change what fish are rendered
we will attach data, attributes, etc. to our components 

=============================
Creating our First Components
=============================
