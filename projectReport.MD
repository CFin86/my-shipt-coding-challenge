# Web Coding Challenge for Shipt by Chris Finney
===========================================

This website is hosted on AWS [here.](http://cfin-shipt-challenge.us-east-2.elasticbeanstalk.com/)

### User Interface 
 -I modeled the Jumbotron header after Shipt's own homepage, because imitation is the most sincere form of flattery.

 -The red accent color's hue is actually very close to Shipt's green.

### User Experience

Whenever I receive a coding challenge, I usually first solve the problem to have a minimum viable product, and build a quick User Interface. I then host it on AWS and send the link to my 60 year old mother. My logic is that if someone with no previous knowledge of the project or subject matter can understand what the goal is and use it properly, then I have succeeded.

-In the navigation bar, there are links to my source code and to my resume. In full disclosure, I am a brand new developer. I truly started to learn to code on May 31st, 2017. This is the first time I have written code that some one else is going to review. So this is the code that I am particularly proud of. Any constructive criticism is welcome and greatly appreciated. 

### Things I focused on:

#### Mobile First Design 

-As you enlarge the window, more recommended user cards are added to fill the screen for large screen sizes.

-As you minimize the window, less users are shown;   on extra small screen size, animations are disabled and the suggested Users to search are stacked in order to preserve the readability of the interesting fact.

#### Ease of Use
-As soon as you visit the site you're ready to use it. I found myself searching for github user's names and figured that if I had to do it, someone else would have to do it as well. The choices for the suggested users are *almost* an accurate representation of all the possible outcomes of searching any user name. 

-I could have written an if/else statement or used ng-valid to prevent a user from searching without any input; however since there are user accounts name 'null' and 'undefined' that return followers # and followers url, I thought it would be fun to leave them in.

-I also could have used Angular's $index directive to create a multiple unique ng-repeats; however, I decided to allow for the pagination to overwrite the previous one, but create the effect that there's a  huge list of follower's pictures. In reality, there are never more than 60 avatars on the page at one time
### Things to add in the future

* Better error handling for 403 errors
* Hosted RDS mySQL database to query for the suggested github users. Perform an ng-repeat, so there would be less lines of code in my html files
* OAuth2.0 authentication to remove the limit on 60 requests per hour

### The challenge of searching 'indiesquidge'

Obviously, when I receive a coding challenge about searching Github users and their followers, one of the first things I did was search the person who wrote the directions to the challenge. 
Initially, when I used my page search [indiesquidge](https://i.imgur.com/O8hUC2n.png), it would return that he had 29 followers. However, if you actually go through and manually count his followers, he has 30 followers. I then verified it against Github's actually website only to find that they displayed the same information I received from the API call. My first idea for a solution was because arrays start with 0 and the response information payload being 30 arrays, it could return a number that was off by 1. However, if that was true; then all user's followers would be off by 1. My accounts follower's count was three and it was quick to verify, so why is indiesquige's count incorrect on my site, or Github's site? 

Github's API has to call to two endpoints. 1st, to get indiesquidge's login name and followers, and then a 2nd call to get his follower's information. The follower's avatar data is updated as soon as one account followers another; however, the indiesquidge's follower's count is only updated when he makes a commit/initializes a repository/updates his account. Look at the image I posted again. You will see that at the time I took the screenshot, it had been almost two weeks since he had committed, thus giving me the error in the data. 