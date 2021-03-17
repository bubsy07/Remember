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
$("#game-over-restart").mouseenter(function() {
        $(this).css('color', 'lightgreen');
   }); 

$("#game-over-restart").mouseleave(function() {
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


   //Starts the timer when game is started - hide front page

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
      gameOver();
    }
  }, 1000);
}

//Game Over Function called when you timer expires
//add the overlay to the game-over-page in line 81. But we set the CSS of game-over-page to display: none, 
//so they will not show unless we set the display back:

    function gameOver() {
        let el =  document.getElementById("game-over-page")    
        el.classList.add("overlay");
        el.style.display = "initial";     
}
   
//Game restart Function - hide game end over lay - start game

 $("#game-over-restart").click(function() {
$("#game-over-page").hide();
startGame();
});


 //Game Function - image click - box color


function imgClicked() {
    
  document.getElementById("overlay").style.display = "block";
}



let box = document.getElementsByClassName('box');
for(let i = 0, l = box.length; i < l; i++) {
    box[i].addEventListener('click', imgClicked);
}

