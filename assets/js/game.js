 //Plays background music, repeats on song end
   window.addEventListener("DOMContentLoaded", event => {
  const audio = document.querySelector("audio");
  audio.volume = 0.2;
  audio.play();
});



//Overlay page

//turn links colour on hover

 $("#start-game").mouseenter(function() {
        $(this).css('color', 'lightgreen');
   }); 

$("#start-game").mouseleave(function() {
        $(this).css('color', 'azure');
   });

$("#rules-of-game").mouseenter(function() {
        $(this).css('color', 'lightgreen');
   }); 

$("#rules-of-game").mouseleave(function() {
        $(this).css('color', 'azure');
   });

  
//Opens game instructions on front page
$(document).ready(function(){
    $("#game-rules").hide();    
    $("#rules-of-game").click(function () {
    $("#game-rules").slideToggle(1000);
        
    });
});

//Starts the game when 'Click to Play Game' is clicked on front page
$(document).ready(function(){
  
    $("#start-game").click(function(){
    $("#front-page").hide();
    game.startGame;
   
  });
});

   //Starts the timer when game is started 

    function startGame() {
    var fiveMinutes = 60 * 5,
        display = document.querySelector('#time');
    startTimer(fiveMinutes, display);
};

   function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}





   

  
 