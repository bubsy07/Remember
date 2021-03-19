//Plays background music, repeats on song end
window.addEventListener("DOMContentLoaded", event => {
    const audio = document.querySelector("audio");
    audio.volume = 0.2;
    audio.play();
});


//Overlay page

//turn links colour on hover

$("#start-game").mouseenter(function () {
    $(this).css('color', 'lightgreen');
});

$("#start-game").mouseleave(function () {
    $(this).css('color', 'azure');
});

$("#rules-of-game").mouseenter(function () {
    $(this).css('color', 'lightgreen');
});

$("#rules-of-game").mouseleave(function () {
    $(this).css('color', 'azure');
});
$("#game-over-restart").mouseenter(function () {
    $(this).css('color', 'lightgreen');
});

$("#game-over-restart").mouseleave(function () {
    $(this).css('color', 'azure');
});


//Opens game instructions on front page
$(document).ready(function () {
    $("#game-rules").hide();
    $("#rules-of-game").click(function () {
        $("#game-rules").slideToggle(1000);
    });
});



//Starts the game when 'Click to Play Game' is clicked on front page
$(document).ready(function () {

    $("#start-game").click(startGame);

});

//Starts the timer when game is started - hide front page

function startGame() {
    console.log("starting game")
    var fiveMinutes = 60 * 1,
        display = document.querySelector('#time');
    startTimer(fiveMinutes, display);

    $("#front-page").hide();
    shuffleCards(cardArray);

};

function startTimer(duration, display) {
    let counter = duration;

    const interval = setInterval(() => {
        console.log(counter);
        counter--;

        display.textContent = counter;
        if (counter === 0) {
            clearInterval(interval);
            gameOver();
        }
    }, 1000);
}

//Game Over Function called when you timer expires
//add the overlay to the game-over-page in line 81. But we set the CSS of game-over-page to display: none, 
//so they will not show unless we set the display back:

function gameOver() {
    let el = document.getElementById("game-over-page")
    el.classList.add("overlay");
    el.style.display = "initial";
    
}

//Game restart Function - hide game end over lay - start game

$("#game-over-restart").click(function () {
    $("#game-over-page").hide();
    startGame();
});

//Game Function - image click - box color

let box = document.getElementsByClassName('box');

let l = box.length;
for (let i = 0; i < l; i++) {
    box[i].addEventListener('click', imgClicked);
}

function imgClicked() {
    console.log(this)
    console.log(this.parentElement)
    
this.src="assets/images/greentick.png";


    console.log()

    console.log("clicked")
}


//Create Array from all elements with the 'picture' class
    let cardArray = Array.from(document.getElementsByClassName('picture'));
    console.log(cardArray)
    
    //Card shuffling algorithm based on Fisher-Yates shuffle

    
     function shuffleCards(cardArray){
  var m = cardArray.length, t, i;
console.log(m)
  // While there remain elements to shuffle…
  while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);
console.log(i)
    // And swap it with the current element.
    t = cardArray[m];
    cardArray[m] = cardArray[i];
    cardArray[i] = t;
    console.log(cardArray)
  }

  return cardArray;
}



    

    

    
   

    

    
    
   
    
    

