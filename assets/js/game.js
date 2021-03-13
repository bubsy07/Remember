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


//Starts the game when 'Click to Start' is clicked on landing overlay
        
$(document).ready(function(){
  $("#start-game").click(function(){
    $("#front-page").hide();
  });
});

   //Opens game instructions
    $("#rules-of-game").click(function () {
        $("#game-rules").slideToggle(1000);
        
    });