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
  
    $("#start-game").click(startGame);
    
  });



   //Starts the timer when game is started 

    function startGame() {
        console.log("starting game")
    var fiveMinutes = 60 * 1,
        display = document.querySelector('#time');
    startTimer(fiveMinutes, display);

    $("#front-page").hide();
    
};

   function startTimer(duration, display)  {
  let counter = duration;
    
  const interval = setInterval(() => {
    console.log(counter);
    counter--;
      
    display.textContent = counter;
    if (counter === 0 ) {
      clearInterval(interval);
      console.log('Ding!');
    
      gameOver();
    }
  }, 1000);
}


  //Game Over Function called when you lose
    function gameOver() {
        let el =  document.getElementById("game-over-page")    
        el.classList.add("overlay");
        el.style.display = "initial";
    //   return  el      
}
    
 $("#game-over-restart").click(function() {
$("#game-over-page").hide();
startGame();
});

 