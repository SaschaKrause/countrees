LEAN-FrontEndStack
=============
The **LEAN-FrontEndStack** is an opinionated **Seed** for single page apps (SPA).

**LEAN** stands for some of the main technologies used in this seed
* **L**ess *(extends CSS with dynamic behavior such as variables, mixins, operations and functions)*
* **E**xpress *(minimal and flexible node.js web application framework)*
* **A**ngularJS *(clientside MVC based JavaScript Framework)*
* **N**odeJS *(Event-driven I/O server-side JavaScript environment based on V8)*

### Full Stack Overview

This seed uses the following technologies:

| Name | Description | Implemented
| --- |--- | --- |
| NodeJS  | TBD | ✓
| Experss  | TBD | ✓
| Less  | TBD | ✓
| AngularJS  | TBD | ✓
| Karma  | TBD | TBD
| Grunt  | TBD | ✓
| Bower  | TBD | ✓
| Bootstrap  | TBD | ✓
| Jade  | TBD | ✓

### Prerequisites

##### npm
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
