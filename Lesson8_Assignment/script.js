
//Program Name: Recipe Display Application

//Author: Stevie Leone

//Date: 11/13/2015

//Filename: script.js

function display(event){
  
  $(event.currentTarget).next().fadeIn("slow");

}//end of display()

$("h3").click(display);

function display2(event) {
  
  $(event.currentTraget).next().animate( { height: 'toggle'}, "slow");
  
}

/*
$("h3").click(display2);
*/
$("h3").hover(display2);

$("h3").hover(function(){
  $(this).css("background-color", "yellow");
}, function(){
  $(this).css("background-color", "pink");
});