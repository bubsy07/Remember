## Welcome to Remember Memory Game,

I have been exposed over past years to Alzheimers / Dementia and I never really saw anthing Tech wise used for support.
With this in mind I have decided to base my 2nd milestone project on a memory game.

Project Goals
I will create a game which is easy to use, with animals, flowers, soothing music and colour schemes that render well 
with this horrible disease.

In doing so i will try and utilise the best skills from the course notes and any other information along the way. 
Keeping it simple.


Wireframe
I created a wire frame as an outline and it changed along the way, but the main concept i kept.

[Memory wireframe.zip](https://github.com/bubsy07/Remember/files/6217838/Memory.wireframe.zip)

Issues and support
I firstly wanted to make the project simple to use, but as the design progressed I ran into issue around the selection of
the cards, I was changing the image to a tick via the src and then had further issues reshuffling original images. 

![green tick](https://user-images.githubusercontent.com/76811599/112763198-63de2c00-8ffb-11eb-932e-d3be0c2076ae.png)

I decided to keep the design layout similar, but encorporate the fliping of cards. As there are many game examples online, to learn from. I used these 
and tutorials to aid me to create this basic game and add my own game thoughts around it to better understand js etc.
Also with help from W3Schools, stack overflow, course notes and tutor support. So Thank you for the massive help, it would have been 
impossible without this help and information available.

Project Layout

Font I will use for h1, h2, h3, h4 font-family: "Architects Daughter color: #555555;
Will use bootstrap , font awesome, Email.js 
1.	Front overlay.
2.	Game page.
3.	Game over overlay.
4.	Game win overlay.

with navigation to enable to enter the game, restart and contact me via email.

Front Page overlay

Front page will be an overlay over the top of the actual game.
This will comprise of 

1. A welcome message 
2. Contact form via email.
3. How to play the game description.
4. Option to Start game 

I originally was to have a seperate page for the contact via email, but decided to have it on the Front overlay.
So for room all links clickable will have event listener animation which will reveal text how to play, Start button and option to 
email me regarding anything.

Front Page overlay

![front-page](https://user-images.githubusercontent.com/76811599/112762748-4a3be500-8ff9-11eb-9a47-c4c999b4570b.png)

Contact form via email

![contact](https://user-images.githubusercontent.com/76811599/112762868-f1b91780-8ff9-11eb-8146-d3b5796f6419.png)

How to play the game and Start Game

![how to play](https://user-images.githubusercontent.com/76811599/112762946-4a88b000-8ffa-11eb-8c73-5f4d918dc801.png)


Game page

The game page will consist of a countdown timer from 5 minutes, a running score up to 6 and optional soothing music, which the volume 
can be unmuted while playing the game. 

![game-page](https://user-images.githubusercontent.com/76811599/112763036-b2d79180-8ffa-11eb-9a7a-2ff704ab5934.png)

The game has a deck of 6 cards duplicated, so 12 cards in total to match, like snap. The cards are clickable and will rotate to reveal
an animal, if on the second click the duplicate animal is not revealed the cards rotate back. But if on the second click the duplicate 
card is found, the images will remain , the score will count. The game will either finish when all cards are matched or when the timer expires.

![game-over](https://user-images.githubusercontent.com/76811599/112763123-0b0e9380-8ffb-11eb-88c9-fbbf3d0b1e1b.png)


Colours and melody was used with assistance from the following sites.

https://www.uksmobility.co.uk/blog/2015/05/the-importance-of-colour-and-contrast-in-dementia/

https://pixabay.com/music/meditationspiritual-139-meditate-for-meditation-2819/





