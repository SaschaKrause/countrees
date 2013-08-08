FrontEndStack.LEAN
=============
**FrontEndStack.LEAN** is an opinionated **Seed** for creating well structured single page apps (SPA) in a fast and maintainable way.

**LEAN** is an acronym for some of the main technologies used in this seed
* **L**ess *(extends CSS with dynamic behavior such as variables, mixins, operations and functions)*
* **E**xpress *(minimal and flexible node.js web application framework)*
* **A**ngularJS *(clientside MVC based JavaScript framework)*
* **N**odeJS *(event-driven I/O server-side JavaScript environment based on V8)*

### Why?

Focus on creating your actual app, instead of losing time doing boilerplate and repetitive work all by yourself.
What you got out of the box is this (among other cool things):
* TBD


### Full Stack Overview

This seed uses the following technologies:

| Name | Description | Implemented
| --- |--- | --- |
| NodeJS  | TBD | ✓
| Experss  | TBD | ✓
| Less  | TBD | ✓
| AngularJS  | TBD | WIP
| Karma  | TBD | TBD
| Grunt  | TBD | WIP
| Bower  | TBD | ✓
| Bootstrap  | TBD | WIP
| Jade  | TBD | ✓

### Prerequisites

##### Node and npm


##### Grunt
```
npm install -g grunt-cli
```
You will also need to install **grunt-init** globally to take advantage of the provided scaffolding possibilies.
```
npm install -g grunt-init
```

#### Karma
```
npm install -g karma
```

##### Bower
Bower depends on Node and npm. It's installed globally using npm:
```
npm install -g bower
```

### How to run

All you need to do is follow these steps to get up and running:

1. Clone this repository with ``` git clone git@github.com:SaschaKrause/FrontEndStack.git ```
2. Install all npm depenencies with ``` npm install ```
3. Install all client-side dependencies with ``` bower install ```
4. Run tests and build minified and concatinated JavaScript files for production with ``` grunt ```
5. Now you can start the web server with ``` node web-server.js ``` and visit http://localhost:3000


### How to work with

Use the available grunt automation tasks to create the boilerplate code for you.
For example, if you want to create a new Angular controller you can simply run:
  ```
  grunt-init ./tasks/ng-controller
  ```

You will be prompted to enter some basics (e.g. name of controller).
When finished, grunt creates the controller (and if choosed to do: even the corresponding unit test).
All steps that you need to do from that point on are documented in the CLI output and inside the generated files as TODO
(e.g. adding the controller module to the main app as dependency).



#### Grunt scaffolding

 As mentioned in the "[How to work with](#how-to-work-with)" section, you can use the grunt automation tasks to create the boilerplate code for you.
 A overview of all available scaffolding automations is shown below

| Command | Description |
| --- |--- |
| ``` grunt-init ./tasks/ng-controller ```| Creates an AngularJS controller in ```public/app-src/js/controller/```. If you choosed to create the corresponding unit test as well, it will be placed in ```public/app-test/unit/controller/```  |
