# pharmapp
Team 
Product Owner: ghofrane messaoudi
Scrum Master: nouha jbeli
Development Team Members: marwen khorchani, mejdi kouira

Pre-requisites
git - Installation guide .
node.js - Download page .
npm - comes with node or download yarn - Download page .
mongodb - Download page .


Credits
The MEAN name was coined by Valeri Karpov.
Initial concept and development was done by Amos Haviv and sponsered by Linnovate.
Inspired by the great work of Madhusudhan Srinivasa.

Cloning The GitHub Repository
The recommended way to get MEAN.js is to use git to directly clone the MEAN.JS repository:

$ git clone https://github.com/PHARM-APP/pharmapp.git meanjs

Quick Install :
Once you've downloaded the boilerplate and installed all the prerequisites, you're just a few steps away from starting to develop your MEAN application.

The boilerplate comes pre-bundled with a package.json and bower.json files that contain the list of modules you need to start your application.

To install the dependencies, run this in the application folder from the command-line:

$ npm install 
This command does a few things:

First it will install the dependencies needed for the application to run.
If you're running in a development environment, it will then also install development dependencies needed for testing and running your application.
When the npm packages install process is over, npm will initiate a bower install command to install all the front-end modules needed for the application
To update these packages later on, just run npm update

Running Your Application
Run your application using npm:

$ npm start
Your application should run on port 8000 with the development environment configuration, so in your browser just go to http://localhost:8000

That's it! Your application should be running. To proceed with your development, check the other sections in this documentation. If you encounter any problems, try the Troubleshooting section.

Explore config/env/development.js for development environment configuration options.
