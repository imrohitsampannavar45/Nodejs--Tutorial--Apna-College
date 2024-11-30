<h1>NodeJS</h1>

Javascript Runtime Enviornment 
it is used for server side programming

Node js is not a langauge, library or framework
< hr />

Node REPL - Read Evaluate Print Loop

Process 

Process :- This Object Provides information about and control over the current Node.js process.

Process.argv : returns an array containing the command line arguements passed when the nodejs process was launched 

<hr />

module.exports 

require() - a built in function to include external modules that exist in seperate files 
module.exports - a special object 
<hr />

require - entry point is index.js
<hr />

NPM - node package manager 

npm is the standard package manager for Node.js
* Library of packages 
* Command Line Tool


< hr />

<h2> Installing Packages </h2>

```sh
npm install <package name>

```



<h2>Installing Packages </h2>

* node_modules  - the node_modules folder contains every installed dependency for your project 

* package-lock.json - It records the exact version of every installed dependency, including its sub-dependencies and their version

* package.json -  the package json file contians desprictive and functional metadata about a project, such as a name, version and dependencies 

```sh 
npm init 

```
<h2>Local v/s Global </h2>

```sh
npm install -g <package name>

npm link <package name>

```

<h2> require v/s import </h2>

```sh
import {sum} from './math.js'
```

* We cant selectively load only the pieces we nedd with require but with import, we can selectively load only the pieces we need, which can save memory 

* Loading is synchronous for 'require' but can be asynchronous for  'import'.

<hr />


<h2>Library v/s Framework </h2>

<h3>Library</h3>
A library is a collection of pre-written code that can be used to perform specific tasks 

eg- Axios


<h3>Framework </h3>
A framework is a set of pre-written code that provides a structure for developing software applications 

eg - express

<hr />

<h2>Express </h2>

*  A node js web application framework that helps us to make web application 

* it is used for server side programming.

1. Listen for incoming requests 
2. Parse the data 
3. to match response with routes eg- (www.google.com/search)
4. to send suitable response 