***

# Project Overview


## Introduction
The website has been created for users to enjoy a fun Paw Patrol memory game.

The owners core goals for the website are:

* to  provide a fun game for children between the ages of 4 - 8 years old
* for users to return to play the game and try to beat their score
* for users to navigate through the site with ease and be intuitive

## Link to memory game live site <a href="   "> Memory Game </a>

insert link to responsive image ![Responsive image of front page on all devices](assets/uxd/responsive-design-mockupv2.PNG)

Image from  <a href="http://ami.responsivedesign.is/">Am I Responsive</a>, to display the websites home page across mobile, tablet and desktop.


***
# Table of Contents <a name="Home"></a>

1. [User Experience (UX)](#ux)
    * [Strategy](#strategy)
        * [Project Objectives & Goals](#goals)
        * [User Stories](#userstories)
        * [Strategy Tradeoffs](#tradeoffs)
    * [Scope](#scope)
    * [Skeleton](#skeleton)
        * [Wireframes](#wireframes)
    * [Surface](#design)
        * [Colours](#colours)
        * [Typography](#typography)
        * [Imagery](#imagery)

2. [Features](#features)
    * [Current Features](#features-current)
    * [Features to implement](#features-toimplement)

3. [Testing](#testing)
    * [User Stories Testing](#user-feedback)
    * [Testing Check List ](#testing-check-list) 
    * [Validation Testing -HTML ](#validation-testing-html)
    * [Validation Testing -CSS ](#validation-testing-css)
    * [Validation Testing -A11y Color Contrast Accessibility](#validation-testing-A11y)
    * [Design Responsiveness Testing](#testing-responsiveness)
        * [Simulated Testing](#testing-simulated)
4. [Deployment](#deployment)
5. [Technologies Used](#technology-used)
6. [Credits](#credits)

7. [Acknowledgements](#acknowledgements)




# User Experience (UX) <a name="ux"></a> [Contents](#home)


## User Stories: <a name="userstories"></a>
* As a user, I want to play an online game
* As a user, I want to read the rules and understand how to play the game
* As a user, I want to be able to know how the scoring works
* As a user, I want to be able to know when I have matched two cards
* As a user, I want to know when I have finished the game and see my score
* As a user, I want to be able to restart the game at any point
* As a user of multiple devices, I need a website that is fully responsive, invoking the same user experience across all devices, in particular my mobile. 


## Strategy Tradeoffs <a name="tradeoffs"></a>
The purpose of this memory game is for users of all ages to have fun playing the game
<br>
to update
<br>

to update -I have rated the features on a scale of 1 to 5 in terms of importance (how important is it for the project now) and feasibility (how realistic is that we can implement a solution)

![Strategy Tradeoffs](assets/uxd/strategy-tradeoffs.PNG)

## 2. Scope <a name="scope"></a>

To achieve the strategy goals, I want to implement the following functional specification and content requirement:

* A home page which will allow users to start the memory game and  view the rules
* The memory game, which users can access when the game has started, the user will be able to see the 12 turned over cards 
* User feedback to let them know they have selected two matching cards
* Number of moves tracker
* Number of correct bonus questions answered correctly
* A end of game feature that will let the user know they have finished the game, display their score

---


# 3. Structure <a name="structure"></a> [Contents](#home)
link to be updated in menu
The site will be on one page, there is no need for a navbar or footer due to the site being simple.
The main page, there will be a background image, with a main playing area that will house the playing cards, scores and buttons

---
# 4. Skelton <a name="skeleton"></a> [Contents](#home)

## Wireframe <a name="wireframes"></a>

I used <a href="https://balsamiq.com/">Balsamiq</a> to create wireframes for my project in order to plan out the layout of the interface, navigation and information design of the webpage on  desktop, tablets and mobile devices.

## Wireframes for Home Page. 
### Desktop

## Wireframe for The Memory Game when loaded
![Start New Game Desktop](assets/images/uxd/wireframes/startgame.png)

## Wireframes for The Memory Game when the rules Modal is displayed
![Rules modal Desktop](assets/images/uxd/wireframes/rules.png)

## Wireframes for The Memory Game when play new game is clicked
![The Game Desktop](assets/images/uxd/wireframes/thegame.png)

## Wireframes for The Memory Game when play new game is completed
![Finish Game Desktop](assets/images/uxd/wireframes/finishgame.png)

## Wireframes for The Memory Game when the scoreboard is displayed
![Score Board modal Desktop](assets/images/uxd/wireframes/scoreboardmodal.png)

The pages will be responsive on all devices



# 4. Surface <a name="surface"></a> [Contents](#home)

## Visual Design

## 1. Colour Palette:  <a name="colours"></a>

The colours have been choosen to mimic the Paw Patrol brand using red, yellow and blue.

## 2. Typography <a name="typography"></a>

The following font cabin have been selected to ensure the text is easy to read, add value to the text, and invoke user to perceive a positive emotion from the text. 

![ Cabin font](assets/images/uxd/fontcabin.PNG)



## 3. Imagery <a name="imagery"></a>

![ Images](assets/images/uxd/pawpatrolimages.PNG)


I used images from the Paw Patrol tv series to ensure all images were related

Please refer to further details in credits section for specific images used within the project


---
# Features <a name="features"></a> [Contents](#home)

## Current Features (short term objectives): <a name="features-current"></a>

## New game modal

A new game modal pop up will be displayed with Paw Patrol logo and two clickable buttons .
-	1. “Play New Game” button  - when the user clicks on the button, the user would be able to begin the memory game.  All moves, matched card numbers will be set to zero.  All cards will show the back face
-	2. “Rules” button– when the user clicks on button, the rules modal pop up will appear which will allow the user to read the rules of the game.  

## Rules Modal
The rules modal  is accessed from the new game modal once the user clicks on the “rules” button.  The user can read the rules of the game and click close [x] to bring them back to the new game modal.

## The game
Once the user initiates the game by clicking “Play New Game” from the new game modal, the user will be presented with the memory game. 3 rows of 4 cards ,totaling 12 cards to choose from which will have a backcard image displayed on each of the cards as default.
The user can click only on 2 cards at a time. 

If they match two cards they will remain up turned and display the front of the card – Paw Patrol characters. The matched pairs counter will increment by 1

The number of moves will update and increment by 1 when a user has selected 2 cards

When all 6 pairs are successfully chosen, the finish game modal popup will appear

The user can restart the game at any point by clicking the “New game” button.  A confirmation modal will appear to confirm there choice whether to continue game or start a new game.

## Confirmation Modal
The confirmation modal  is accessed from the memory game page, once the user clicks “New Game”.  The user can decide wether to click on “New Game” which will goto the new game modal or they can click on “continue”  to carry on with the current game 

## Finish game Modal
When all 6 pairs are successfully chosen, a modal pop up  will appear with 
* the Score
* number of moves

Score calculated by the follow formula
 if moves are

=< 9 - points = 80,

=< 12 - points = 60,

=< 14 - points = 40, 

=< 16 - points = 30, 

=< 18 - points = 20, 

=< 20 - points = 10, 

=> 21 - points = 5

The user will then enter their name for the score board  and click save.  This will then display the score board.  

## Score Board Modal
Displays score board

The user can then click on the close [x] and decide whether they would like to play again or click on the scoreboard to view from the main game page

---
# Features remaining to implement (long term objectives): <a name="features-toimplement"></a>

1.) Add in skill levels with timer

2.) Add additional game type e.g. logos, animals etc



---
# Testing <a name="testing"></a> [Contents](#home)

## User Feedback <a name="user-feedback"></a>

I received the following constructive feedback from friends and family and implemented corrective action:

On the Finish game modal, no need for new game and view scoreboard buttons as the user might forget to press save to save the name/score to the score table

Corrective action: Remove buttons and centered the input/save button

On the scoreboard, i had to click close, then on new game button and then click yes. i would prefer to click new game when i have seen my score on the scoreboard

Corrective action: add new game button, when clicked it would close the scoreboard modal and run new game
---
# My testing Check list <a name="testing-check-list"></a> [Contents](#home)

## I Checked all the following features to ensure they worked

## Main Structure -Header, navigation bar and footer featured on all four pages. 
&#x2611;    Consistency/aesthetically pleasing 



---
# W3C HTML Validator Test <a name="validation-testing-html"></a>  
I used [W3C HTML Validator](https://validator.w3.org/) code checking tool to validate the html code.

* I selected the "Validate by URI" option for each page index.html

## The page came up with the following warning:
Empty heading. From line 151, column 13; to line 151, column 29 <h3 id="results"></h3> 
This is ok as it will be populated from JS

No Errors on report

---
# W3 CSS Validator Test  <a name="validation-testing-css"></a>  
I used [W3C CSS Validator](https://jigsaw.w3.org/css-validator/) code checking tool to validate the css code.
* I opened and selected the "Validate by direct input" option and pasted in the code.

No Errors on report



---
# A11y Color Contrast Acccessibility Validation <a name="validation-testing-A11y"></a>
I used [A11y Color Contrast Acccessibility Validation](https://color.a11y.com/) 
This website provides free color contrast analysis tools that will display the color contrast issues of a web page; per WCAG 2.1 Guidelines. Color Contrast refers to how bright or dark colors appear against each other on screens; particularly with regard to the relative, gray-scale luminosity as perceived by the human eye.

When it comes to website accessibility, the contrast between the text and the text background is a concern for colorblind and other visually impaired users.

This color contrast tool enables users to comply with website accessibilities regulations.

## Testing

Website colour palette was tested for contrast accessibility validation and passed with no issues

---
# JSHint Validation Service <a name="JSHint-Validation-Service"></a>
I used [JSHint Validation](https://jshint.com/)
to test the JavaScript code.

No errors were detected in the code. Warnings were detected in the code however this was due to the use of the new ES6 syntax in the code.

---

Chrome Dev Tools Lighthouse Report to test both on desktop and mobile.

Initial Score performance 99, accessibility 97, best practices 87, seo 90

# Best practice
Displays images with incorrect aspect ratio
Source:  backgroundimg.png:1
Description: Failed to load resource: the server responded with a status of 404 ()

the image had the incorrect file name, corrected with backgroundimg.png

resized all the images to the expected size and rerun the report and best practises scored 100

# SEO - Document does not have a meta description
added meta tags and increased the score Seo to 100



---
# Design Responsiveness Testing <a name="testing-responsiveness"></a> [Contents](#home)

## Simulated Testing <a name="testing-simulated"></a>
For each section on each page, I tested various screen sizes in the development environment. Using the Google Developer tools I tested the responsiveness throughout the development process and all tests passed.

## Tested with Chrome DevTools using profiles for with screen sizes:

* Moto G4

* Galaxy S5

* Pixel 2

* Pixel 2 XL

* iPhone 5 SE

* iPhone 6/7/8

* iPhone 6/7/8 Plus

* iPhone 

* iPad

* iPad Pro


## Desktop testing


### Browsers:

 * Chrome

* Firefox


## Mobile testing:

* Iphone 10

# Known issues during testing

* During testing an issue was identified on the score table. 

When the user entered their name, the score board would display with the scores array initially.  When the user finished the game again.  The array would display after the previous displayed table, therefore dulipcating the names and scoring

Corrective Action: Reset the con variable in the reset function

* During testing an issue was identified on the finish game modal

The users name was still displayed in the text input field from the previous game.

Corrective action: Reset winnerName value to Null when the reset board function is called

* During testing an issue was identified on the main game.  The user could click on a 3rd / 4th card after clicking the 1st/2nd on the same turn.

On investigation i noticed a spelling mistake on the boardDisable variable which stopped boardDisable resulting true and would stop the user from clicking a further card.

Corrective action:  Corrected spelling 

* During testing an issue was identified on the scoreboard. If the user didn't enter a name on the finish game modal, there would be no name on the scoreboard with a score

Corrective action:  i put an if statement in savedetails function. If the value equal empty string then alert the user to enter their name else run the rest of the function

# Unfixed Bugs

No Bugs left to fix



---
# Deployment <a name="deployment"></a> [Contents](#home)
This is the process i took to deploy my project to the hosting platform GitHub
1.	Open Github page up in browser
2.	Log in using your username and password
3.	Select "ccarabine/Churchbarn-holiday-let" from repositories displayed on left-hand side of screen
4.	Click "settings” displayed in the navigation toolbar menu
5.	Click “Pages” on the left hand side navigation menu
6.	Select "Master Branch" in the dropdown under the Source heading
7.	Finally, click “save”

 The live link can be found here <a href="https://ccarabine.github.io/memory-game/">Paw Patrol Memory Game</a>

---
# Technologies Used <a name="technology-used"></a>  <a name="Home"></a>

For this project the main languages used are __Javascript__, __HTML5__ and __CSS3__.

I have also utilised the following frameworks  and tools:

* [GitPod](https://www.gitpod.io/):  I used GitPod as the IDE for this project and Git has been used for Version Control.
* [GitHub](https://www.github.com/): GitHub has been used to create a repository to host the project and receive updated commits from GitPod.
* [Balsamiq](https://balsamiq.com/): I used Balsamiq to create the wireframe for the website for the basic structure and layout.
* [Google Fonts](https://getbootstrap.com/): I have used Google Fonts to import fonts for styling purposes for this project.
* [Chrome Dev Tools](https://developers.google.com/web/tools/chrome-devtools): Chrome Dev Tools was used to test the site and assist with debugging issues.
* [W3C Markup Validation Service](https://validator.w3.org/): The W3C Markup Validation Service was used to validate the HTML document for this project and to identify any issues with the code.
* [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/): The W3C CSS Validation Service was used to validate the CSS document for this project and to identify any issues with the code.
* [Am I Responsive](http://ami.responsivedesign.is/): Am I Responsive was used to create the header image for the README file.
* [Resize Pixel](https://www.img2go.com/compress-image): Img2go was used to reduce the size of the paw patrol images.
* [A11y Colour Contrast checker](https://color.a11y.com/Contrast/):A11y Colour Contrast checker was used to check the colour contrast between background and text colours.
* [Fav Icon Generator](https://favicon.io/favicon-generator/): i used Fav Icon generator to create my fav Icon from text.

---
# Credits <a name="credits"></a>

## Media
Images were downloaded from :

Paw Patrol characters https://www.pngkey.com/pngs/paw-patrol/ 

Paw Patrol Logo https://www.pngegg.com/en/png-bddzo 


## Code
I used the following websites and videos for inspiration and code for my project

Data attributes
https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes


How to create modals https://www.w3schools.com/howto/howto_css_modals.asp

Adding to arrays https://www.youtube.com/watch?v=NxVCq4p0Kb0

Score boards
https://www.chegg.com/homework-help/questions-and-answers/exercise-ll-work-array-ll-add-nodes-dom-display-results-scores-run-application-see-user-in-q24972694

Memory game tutorial https://www.youtube.com/watch?v=ZniVgo8U7ek
i used following tutorial on YouTube. I have used code from this tutorial to assist with creating the memory game. Please note some of the code has been customised by myself to fit this project. I have also added my own code for additional functions for the project.




## Acknowledgements <a name="acknowledgements"></a>
A big thank you to my mentor Maria for her help and guidance throughout my first project

Thank you to to the following:
* My wife for her help and constructive feedback throughout the project. 
* The tutors for help and support.

***