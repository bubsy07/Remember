//Plays background music, repeats on song end
window.addEventListener("DOMContentLoaded", event => {
    const audio = document.querySelector("audio");
    audio.volume = 0.2;
    audio.play();
});

//Overlay pages

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

$("#back-to-home").mouseenter(function () {
    $(this).css('color', 'lightgreen');
});

$("#back-to-home").mouseleave(function () {
    $(this).css('color', 'azure');
});

$("#win-home").mouseenter(function () {
    $(this).css('color', 'lightgreen');
});

$("#win-home").mouseleave(function () {
    $(this).css('color', 'azure');
});

$("#contact").mouseenter(function () {
    $(this).css('color', 'lightgreen');
});

$("#contact").mouseleave(function () {
    $(this).css('color', 'azure');
});


$(document).ready(function () {
    //Create Array of 'card'
    let cards = Array.from(document.getElementsByClassName('card'));

    //time/card array
    let play = new remember(cards, 10);

    //Start on front page

$('#start-game').click(function () {
    $("#front-page").hide();
        
        play.startRemember();
    });

    //Rules of the game
    $("#rules-of-game").click(function () {
        $("#what-to-do").slideToggle("slow"); 
        $("#contact-form").hide("slow");   
    });

    //Reload game 
    $('#back-to-home, #win-home').click(function () {
        location.reload();
    });

    //contact
    $("#contact").click(function () {
        $("#contact-form").slideToggle("slow"); 
        $("#what-to-do").hide("slow");  
    });

    //Flips the cards on click
    cards.forEach(card => {
        card.addEventListener('click', () => {
            play.flipCard(card);
        });
    });
});
 //add constructor to handle the game https://www.w3schools.com/js/js_object_constructors.asp
class remember {

    //Game content
    constructor(cards, GameTime) {
        this.GameTime = GameTime;
        this.timeToGo = GameTime;
        this.time = document.getElementById('time-to-go');
        this.cardArray = cards; 
    }
     //Delay @ Start Game
    startRemember() {
        this.timeToGo = this.GameTime;
        this.cardToCheck = null;
        this.matchedCards = [];
        this.busy = true;
        setTimeout(() => {
            this.shuffleCards(this.cardArray);
            this.busy = false;
            this.countDown = this.startTimer();
        }, 750);
    }

    
//Flipping stopped if matched and if flipping active
    canFlipCard(card) {
        return !this.busy && !this.matchedCards.includes(card) && card !== this.cardToCheck;
    }

    //Flip function
    flipCard(card) {
        if (this.canFlipCard(card)) { 
            card.classList.add('visible');
            if (this.cardToCheck) {
                this.checkForCardMatch(card);
            } else {
                this.cardToCheck = card;
            };
        }
    } 
    
//shuffling algorithm  
     shuffleCards(cardArray) {
        for (let i = cardArray.length - 1; i > 0; i--) {
            let randIndex = Math.floor(Math.random() * (i + 1));
            cardArray[randIndex].style.order = i;
            cardArray[i].style.order = randIndex;
        }
    }
    
//Timer 
    startTimer() {
        return setInterval(() => {
            this.timeToGo--;
            this.time.innerText = this.timeToGo
            if (this.timeToGo === 0)
                this.gameOver();
        }, 1000);
    }

    //Game Over
    gameOver() {
        clearInterval(this.countDown);
        $('#game-finished').addClass('visible')
    }

//win 
    win() {
        clearInterval(this.countDown);
        $('#win').addClass('visible');
    }

//animal clicked
    getCardType(card) {
        return card.getElementsByClassName('animal-img')[0].src;
    }
}