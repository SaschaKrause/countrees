LEAN-FrontEndStack
=============
The **LEAN-FrontEndStack** is an opinionated **Seed** for single page apps (SPA).

**LEAN** is an acronym for some of the main technologies used in this seed
* **L**ess *(extends CSS with dynamic behavior such as variables, mixins, operations and functions)*
* **E**xpress *(minimal and flexible node.js web application framework)*
* **A**ngularJS *(clientside MVC based JavaScript Framework)*
* **N**odeJS *(Event-driven I/O server-side JavaScript environment based on V8)*

### Aims

TBD

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
##### Bower
Bower depends on Node and npm. It's installed globally using npm:
```
npm install -g bower
```
Also make sure that git is installed as some bower packages require it to be fetched and installed.

##### Grunt
```
npm install -g grunt-cli
```
You will also need to install **grunt-init** globally to take advantage of the scaffolding possibilies.
```
npm install -g grunt-init
```

### How to run

1. Clone this repository with
  ```
  git clone git@github.com:SaschaKrause/FrontEndStack.git
  ```
2. Install all npm depenencies with
  ```
  npm install
  ```
3. Install all client-side dependencies with
  ```
  bower install
  ```
4. Run tests and build minified and concatinated JavaScript files for production with
   ```
   grunt
   ```
5. Now you can start the web server and visit http://localhost:3000
  ```
  node web-server.js
  ```

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
| ``` grunt-init ./tasks/ng-controller ```| Creates an AngularJS controller in ```public/app-src/js/controller/```. |