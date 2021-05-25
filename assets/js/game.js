//Overlay pages
//turn links colour on hover

window.onload = function() {  
    $('#voice-on').css('color', 'green');
    $('#melody-on').css('color', 'green');
    $('#voice-off').css('color', 'red');
    $('#melody-off').css('color', 'red');
}

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
    let play = new remember(cards, 100);

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

 //click mute voice animal
    jQuery('#voice-on').click(function () {
        $(this).css('color', 'green');
        jQuery('audio').prop("muted", false);
        $('#voice-off').removeClass("voice-status");
        $(this).addClass("voice-status");   
        });

    jQuery('#voice-off').click(function () {
         $(this).css('color', 'red');
        jQuery('audio').prop("muted", true);
         $('#voice-on').removeClass("voice-status");
         $(this).addClass("voice-status");
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
        this.playMelody();
        setTimeout(() => {
            this.shuffle(this.cardArray);
            this.busy = false;
            this.timerCountdown = this.timerStart();
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
    shuffle(cardArray) {
        for (let i = cardArray.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            cardArray[j].style.order = i;
            cardArray[i].style.order = j;
    }
}
   


//Timer 
    timerStart() {
        return setInterval(() => {
            this.timeToGo--;
            this.time.innerText = this.timeToGo
            if (this.timeToGo === 0)
                this.gameOver();
        }, 1000);
    }


//Game Over
    gameOver() {
        clearInterval(this.timerCountdown);
        $('#game-finished').addClass('visible')
    }


//win 
    win() {
        clearInterval(this.timerCountdown);
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
    cardMatch(card_A, card_B) {
        this.matchedCards.push(card_A);
        this.matchedCards.push(card_B);
        card_A.classList.add('matched');
        card_B.classList.add('matched');
        this.calculateScore();
        if (this.matchedCards.length === this.cardArray.length)
            this.win();
    }

    //Cards Mis Match Function, hides both cards
    cardMisMatch(card_A, card_B) {
        this.busy = true;
        setTimeout(() => {
            card_A.classList.remove('visible');
            card_B.classList.remove('visible');
            this.busy = false;
        }, 1750);
    }

    //Score
    calculateScore() {  
            $("#game-score").each(function () {
                console.log(this)
                $(this).text(parseInt($(this).text(), 10) + 1);
            });      
    }  
     
    //Plays Melody
    playMelody() {
        var melody = new Audio('assets/melody/audio_c2fcb3b211.mp3')
        melody.play();
        melody.volume = 0.2;
        melody.loop = true;

        //Mutes / play melody
        $('#melody-on').click(function () {
            $(this).css('color', 'green');
            $(melody).each(function () {
                $(melody).prop('muted', false);    
            });
            $('#melody-off').removeClass("audio-status")
            $(this).addClass("audio-status")
        });
        $('#melody-off').click(function () {
            $(this).css('color', 'red');
            $(melody).each(function () {
                $(melody).prop('muted', true);
            });
            $('#melody-on').removeClass("audio-status")
            $(this).addClass("audio-status")
        });
    }
}    

