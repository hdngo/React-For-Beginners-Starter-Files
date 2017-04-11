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
First going to create a store picker component
-Allows to type the name of a store or autofill
-Button that'll take you to the store when clicked
-We'll first write the code in index.js and then move it into a separate components folder
-First need to load react
-Rather than use a script tag, we're going to use es6 modules

Importing React:
-import React from 'react';
-this loads the React variable from the library, 'react'
-'react' comes from our package.json (in dependencies)
--if it wasn't in our package.json, we'd have to install react via 'npm install react --save'

ESLint:
-the create-react-app comes with minimal eslint rules that'll throw us warnings in the console 

after importing react:
we see that in our dom elements we're given a static bundle.js file
any code that's written into index.js is bundled into our bundle.js file

Create our First Component:
use ES6 classes
-we use a capital on all of our classes because they're reusable
-our component classes must extend from the React.Component
-all components must have the render method
-when a component gets rendered to the actual page, it asks the class what html should it display and we specify in our render function using jsx


class StorePicker extends React.Component {
  render() {
    return <p>Hello</p>
  }
}

In the HTML:
we have an empty div -- <div id="main">
this is where our react app will go and it's our "mounting point"
we need to grab the react dom
-where react renders out to is not just html, but in our case we want it to render html so we need to import the render method from a package called react-dom
-- import { render } from 'react-dom';
-- rather than import the entire react-dom package, we use the curly braces so that we only grab the method we need

Render the storepicker component:
render(<StorePicker/>, document.querySelector('#main'));
-this is JSX because we specify the component and give it the target location for where it'll be rendered

It's best practice to put each of our components in their own files
-for each component file we need to import React
-- import React from 'react';
-also export the component
-- export default StorePicker;
- this allows us to import our component 
-- import StorePicker from './components/StorePicker'; (don't need the .js on the end cause it's assumed)

=====================
Writing HTML with JSX
=====================
JSX allows us to write html inside our javascript
-it's not required in react but it's just been preferred

example: return React.createElement('p', {className: 'Testing'}, 'I love you');
--creates a paragraph element with the class 'Testing' and content 'I love you'
--bad example because nesting gets complicated

for JSX - we have to use className instead of class because class is a reserved keyword in javascript
-you can only ever return 1 parent element
-you cannot do something like:
  <form>
  </form>
  <p>
  </p>
-you must only ever return 1 parent element, not 2 adjacent ones, one common workaround is throwing an encapsulating div
-we have to self close our tags
--i.e. <img/><br/>

Comments in JSX:
-cannot use // like you do in JavaScript or <!-- -->
-have to use curly brackets and /* */
-you can do regular JS comments outside of the JSX though
-if you're adding a comment in the JSX, make sure to not put it at the top level because it's treated as a top level element

======================================
Loading CSS into our React Application
======================================
Some people do inline, separate css files for each component, scss/css file
Nothing wrong with using a link tag
You can let webpack load your css for you though
-for this example, we're given a style.css
-import './css/style.css'; Webpack will load bundle and pop a style tag on the page for us
Having css stylesheets for each components lets you scope the css to those components only

===============================================
Creating our application layout with components
===============================================
For our app we have a header component,fish component, order component, inventory component...
We're going to scaffold them out
Make a new component called app.js
If you have undefined components, you'll get errors obviously
Remember to include 'import React from 'react' for all components

===============================
Passing Dynamic data with props
===============================
How do you get data from one component into another?
-via props
We have html attributes - i.e. src, alt. - which are ways to pass information to a tag
For React, you pass information via props
-we can make up as many attribetus as we want

example:
<Header tagline="Fresh Seafood Market/" />
-we made a prop called tagline and passed it "Fresh Seafood Market"

How do we access the attributes? And how do we put variables into jsx?
-delete the text and open up a set of curly bracelets and use '{this.props.tagline}'

You can use this.props.whatever anywhere within the render method
-tip: use console.log(this) to see the props object above the return method in the render

$r:
if you ever need to play with the react dev tools and click on the current component you want and use $r,
it sets $r to the current component
-helps for debugging
-also works in regular javascript
--use $0 while in react dev tools

Validation:
We will use prop types to validate that a) data is passed and that b) the data that is passed is the correct type
-i.e. is the data a string? reject?

===============================
Stateless Functional Components
===============================
So far we've been making basic React components
But rather than just having a render method, we can have other methods and lifecycle hooks
Sometimes components are simple and only do one thing like rendering html to the dom, in which case we don't need a full react component
-instead we can make a STATELESS functional component to render out the jsx
In our case, the header isn't going to change, all it does is creates the header with other elements inside of them

Converting the Header component into a stateless functional component:
-delete the closing brace }
-take out the class declaration and entire render() so we're left with what's returned
-store what's returned into a variable: const Header = (props) => { //return code here } 
-take out the 'this' in 'this.props' since we're being passed in props directly
--alternatively, var Header = function() {} or function Header() {}

=========================
Routing with React Router
=========================
We're going to use React Router which is the industry standard for routing in React even though it's not included in React
-using v4
It allows you to show and hide copmonents anywhere inside the application depending on if you're on a page or not

For our app:
we're going to create some routes to show the app component if we're on a store page, store picker if we're on a home page, or not found if we're at an invalid url

Import React Router:
import { BrowserRouter, Match, Miss } from 'react-router';
Create the router component, and inside of that have Match and Miss
--similar to Angular when creating the router
-example:
const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <Match exactly pattern="/" component={StorePicker} />
        <Match pattern="/store/:storeId" component={App} />
        <Miss component={notFound} />
      </div>
    </BrowserRouter>
  )
}
-- the exactly pattern reads as: when you're on '/' show the component, StorePicker
Now that we have the root component, we swap out the <App/> in our render call which'll indirectly call App or StorePicker
- render(<Root/>, document.querySelector('#main));

Note: The Match elements can't be a direct child of the BrowserRouter, so we wrap it in a div
If you're not passing in a string, and you're passing in a variable or boolean, you need to pass it in via curly braces

For our app:
Create NotFound.js component
Add import statement in index.js to include the NotFound.js file

============================
Helper and Utility Functions
============================
Not exclusive to React
When we have some functionality that isn't specifically tied to a component, it's useful to create helper functions
-for our app we'll use helpers.js to store them
In order to access some of the functions, we want to open up our storepicker and set a default value for when we load the page
-Rather than saying a value =, where values are tied to states, we want to have a default value equal to getFundName() from our helpers.js
--
named export in es6 example-- export function getFundName()

in our StorePicker.js, we set the defaultValue={getFunName()}
-we pass it in via {} so we can run JS
-we import the getFundName function at the top via: import { getFunName } from '../helpers';

