# Web Coding Challenge for Shipt by Chris Finney
===========================================

This website is hosted on AWS [here.](http://cfin-shipt-challenge.us-east-2.elasticbeanstalk.com/)

If you have cloned this project, I am sure that you are familiar with Nodejs, but just in case you are not here's the documentation to get [started.](https://nodejs.org/en/download/package-manager/)

### When nodejs is installed, you will first need to run the command 

`$npm install`

### After, the project's server can be started locally by running the command: 

`$npm start`

### If you desire to run the test scripts I have written, while the server is running, use the command 

`$npm test`

## Functional Spec
The goals of this challenge has a few necessities: First, it must be a functional web app that queries Github's username database via API calls and return 

* the user's log in name
* the user's followers number 
* the user's followers avatar

Because each time you send a request to Github's server, it delivers up to 30 followers, 
* A "load more" button should appear on the page, that persists until there are no more followers remaining
A more detailed report about UI/UX and problem solutions can be found in projectReport.MD

## Technical Spec

* File architecture - I modularlized the file tree so that if another page had to be created, it could easily be done by duplicating the contents of the home folder. The contents of the core folder are to be reused throughout the rest of the site. The shared folder is where the SEOservice is included so that it may be repeatedly used throughout the site. Although a User Login/Logout/me service is not included, it would also go in this folder. 

### Frameworks
* [Bootstrap v3.3.7](https://www.bootstrapcdn.com/)
 For styling, animations, and responsive design. I only used vanilla CSS, but I am happy with the Table of Contents in the style.css file. I plan on continuing to work on this coding challenge. In the future I will run gulp tests with minification, uglification, and concatenation. 
 * [AngularJS v1.6](https://angularjs.org/) + [UI-Router](https://ui-router.github.io/ng1/) These are go-to's for Single Page Applications. The combination of Angular's ng-repeat, ng-hide, and $http requests made for quick progress on the functional spec portion of the project.
### Testing
* [Mocha.JS](http://mochajs.org/) I actually do not have experience with running tests, so this is by far the part I am most uncomfortable with. I researched describe() tests, and wrote a few to based on the initial responses from the github API.

### Closing comments
* I am fully aware that there are a number of package managers that wrap around nodejs that will act as a boilplate for github searches. In the spirit of a challenge, I tried my best to ignore them, and produce code that I had personally written.
* If you don't read through the project report; it's ok. But please look over the section about searching the username 'indiesquidge'