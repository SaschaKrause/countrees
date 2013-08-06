FrontEndStack
=============

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

* Clone this repository with
  ```
  git clone git@github.com:SaschaKrause/FrontEndStack.git
  ```
* Install all npm depenencies with
  ```
  npm install
  ```
* Install all client-side dependencies with
  ```
  bower install
  ```

* Run tests and build minified javascript file for production with
   ```
   grunt
   ```

* Now you can start the web server and visit http://localhost:3000
  ```
  node web-server.js
  ```