/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////
debugger; 
  // Constant Variables
  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  var BOARD_WIDTH = $('#board').width();
  var BOARD_HEIGHT = $(window).height();
  var KEY = {
    "LEFT": 37,
    "UP": 38,
    "RIGHT": 39,
    "DOWN": 40
  }

  var positionX = 0;
  var positionY = 0;
  var speedX = 0;
  var speedY = 0;
  
  // Game Item Objects


  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('keydown', handleKeyDown);                           // change 'eventType' to the type of event you want to handle
  $(document).on('keyup', handleKeyUp);

  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
   repositionGameItem(); 
   

  }
  
  /* 
  Called in response to events.
  */
  function handleKeyDown(event) {

      if (event.which === KEY.LEFT){
        console.log("left key pressed");
        speedX = -5;
      }
      if (event.which === KEY.UP){
        console.log("up key pressed");
        speedY = -5;
      }
      if (event.which === KEY.RIGHT){
        console.log("right key pressed");
        speedX = 5;
      }
      if (event.which === KEY.DOWN){
        console.log("down key pressed");
        speedY = 5;
      }

  }
  function handleKeyUp(event) {

    if (event.which === KEY.LEFT){
      console.log("left key pressed");
      speedX = 0;
    }
    if (event.which === KEY.UP){
      console.log("up key pressed");
      speedY = 0;
    }
    if (event.which === KEY.RIGHT){
      console.log("right key pressed");
      speedX = 0;
    }
    if (event.which === KEY.DOWN){
      console.log("down key pressed");
      speedY = 0;
    }

}

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////
    
    function repositionGameItem(){
        positionX += speedX;
        $('#gameItem').css("left", positionX);
  
        positionY += speedY;
        $('#gameItem').css("top", positionY);
    }
    //keep box within bounds//
    /*function keepGameItem(){
      if (positionX > BOARD_WIDTH) {
        speedX < -speedX; 
      }
      if (positionX <= 0) {
        speedX = speedX *-1;
      }
      if (positionY <= BOARD_HEIGHT) {
        speedY = -speedY;      
      }
      if (positionY >= 0) {
        speedY = speedY *-1;
      }
    }*/
    function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
  
}
