

/*
Node.js - NPM

NPM − an acronym for Node Package Manager, refers to the Command line utility to install 
Node.js packages, perform version management and dependency management of Node.js packages. 

npm -v

npm install npm -g

======================================

Install Package Locally

npm install <Module Name>


======================================

Create a new folder for a new Node.js project, and run pnm init command inside it −

PS D:\nodejs\newnodeapp> npm init

package name: (newnodeapp) newnodeapp
version: (1.0.0)
description: Test Node.js App
entry point: (index.js)
test command:
git repository:
keywords: test, nodejs
author: mvl
license: (ISC)


Then yout package.json file ready to userAgent

=============================================================

npm i chalk --save


-S: --save

-D: --save-dev      installs and adds the entry to the package.json file devDependencies

-O: --save-optional  installs and adds the entry to the package.json file optionalDependencies


================================================

Install Package Globally

npm install express -g


================================================

Update Package

npm update <package name>

================================================

Uninstall Packages

npm uninstall <package name>

*/
const colors=require('colors');
console.log("Hi hello package.json".red);
