 //Plays background music, repeats on song end
   window.addEventListener("DOMContentLoaded", event => {
  const audio = document.querySelector("audio");
  audio.volume = 0.2;
  audio.play();
});



//Overlay page

//turn links colour on hover

 $("#start").mouseenter(function() {
        $(this).css('color', 'lightgreen');
   }); 

$("#start").mouseleave(function() {
        $(this).css('color', 'azure');
   });

$("#how-to-play").mouseenter(function() {
        $(this).css('color', 'lightgreen');
   }); 

$("#how-to-play").mouseleave(function() {
        $(this).css('color', 'azure');
   });


//Starts the game when 'Click to Start' is clicked on landing overlay
        
$(document).ready(function(){
  $("#start").click(function(){
    $("#front-page").hide();
  });
});

   //Opens game instructions
    $("#how-to-play").click(function () {
        $("#instructions").slideToggle(1000);
        
    });