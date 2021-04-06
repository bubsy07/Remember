//Plays background music, repeats on song end
window.addEventListener("DOMContentLoaded", event => {
    const audio = document.querySelector("audio");
    audio.volume = 0.2;
    
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
    let play = new remember(cards, 300);

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

    //Flips the cards on click and say card animal
    cards.forEach(card => {
        card.addEventListener('click', () => {
        play.flipCard(card);

        let audio = card.querySelector("audio");
        audio.play();
        audio.volume = 1;
        
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
        this.playBackgroundMusic();
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

//match
    checkForCardMatch(card) {
        if (this.getCardType(card) === this.getCardType(this.cardToCheck))
            this.cardMatch(card, this.cardToCheck);
        else
            this.cardMisMatch(card, this.cardToCheck);

        this.cardToCheck = null;
    }

    //Card Match function pushes matched cards into matchedArray
    cardMatch(card1, card2) {
        this.matchedCards.push(card1);
        this.matchedCards.push(card2);
        card1.classList.add('matched');
        card2.classList.add('matched');
        this.calculateScore();
        if (this.matchedCards.length === this.cardArray.length)
            this.win();
    }

    //Cards Mis Match Function, hides both cards
    cardMisMatch(card1, card2) {
        this.busy = true;
        setTimeout(() => {
            card1.classList.remove('visible');
            card2.classList.remove('visible');
            this.busy = false;
        }, 1250);
    }

    //Score
    calculateScore() {  
            $("#game-score").each(function () {
                console.log(this)
                $(this).text(parseInt($(this).text(), 10) + 1);
            });      
    }  
    
    
    //Plays background music, repeats on song end
    playBackgroundMusic() {
        var bgMusic = new Audio('assets/melody/audio_c2fcb3b211.mp3')
        bgMusic.play();
        bgMusic.volume = 0.3;
        bgMusic.loop = true;

        //Mutes background music on click
        $('#on').click(function () {
            $(bgMusic).each(function () {
                $(bgMusic).prop('muted', false);
            });
            $('#off').removeClass("audio-status")
            $(this).addClass("audio-status")
        });
        $('#off').click(function () {
            $(bgMusic).each(function () {
                $(bgMusic).prop('muted', true);
            });
            $('#on').removeClass("audio-status")
            $(this).addClass("audio-status")
        });
    }
}    
