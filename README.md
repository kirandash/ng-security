# NgSecurity

## Angular Security

### 1. Installation and testing XSS attacks
Install node
Install angular cli: npm install -g @angular/cli@latest

Create project: ng new ng-security

ng serve

Angular bydefault saves us from XSS(Cross site Scripting attacks) for example, innerHTML or interpolation does treat the content as text and ingores scripts

### 2. Cross Site Request Forgery
To check if URL and Signed Token coming from request header to server is same URL and same Signed Token or not?

This can be done with 1. JWT with Auth0. Or 2. Using HttpClient: A simple Angular library to do HTTP API calls

### 3. DomSanitizer and bypassSecurityTrustHtml

### 4. Setting up Server
Create two folders named client and server
Server: npm init
Install Dependencies JWT
npm install body-parser cors express express-jwt jwks-rsa nodemon
dev dependencies: 
npm install --save-dev babel-cli babel-preset-env babel-preset-stage-0

Modify package.json
"scripts": {
    "start": "nodemon ./index.js --exec babel-node -e js"
},
To auto start the server with nodemon (nodemon ./index.js)  --exec babel-node -e js(allows ES6 code in our server)
