/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  var KEY = {
    LEFT : 37,
    UP : 38,
    RIGHT : 39,
    DOWN: 40,
    W: 87,
    A: 65,
    S: 83,
    D: 68,
 }

  // Game Item Objects
  var leftPaddle = {};
  leftPaddle.id = "#leftPaddle";
  leftPaddle.x = 1;
  leftPaddle.y = 100;
  leftPaddle.speedX = 1;
  leftPaddle.speedY = 1;
 
  var rightPaddle = {};
  rightPaddle.id = "#rightPaddle";
  rightPaddle.x = 1;
  rightPaddle.y = 100;
  rightPaddle.speedX = 1;
  rightPaddle.speedY = 1;
  
  var ball = {};
  ball.id = "#ball";
  ball.x = 0;
  ball.y = 100;
  ball.speedX = 1;
  ball.speedY = 1;

   var player1Score = {};
  player1Score.id = "#player1Score";
  
  var player2Score = {};
  player2Score.id = "#player2Score";
 

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
    moveRightPaddle();
    
  }
  
  /* 
  Called in response to events.
  */
  function handleKeyDown(event) {

   if (event.which === KEY.LEFT){
   
      rightPaddle.speedX = -5;
   }
    if (event.which === KEY.UP){
  
      rightPaddle.speedY = -5;
   }
    if (event.which === KEY.RIGHT){
    
      rightPaddle.speedX = 5;
   }
    if (event.which === KEY.DOWN){
      rightPaddle.speedY = 5;
   }
 
  }
  function handleKeyUp(event) {

   if (event.which === KEY.LEFT){
  
     rightPaddle.speedX = 0;
   }
   if (event.which === KEY.UP){

     rightPaddle.speedY = 0;
   }
   if (event.which === KEY.RIGHT){
 
     rightPaddle.speedX = 0;
   }
   if (event.which === KEY.DOWN){

     rightPaddle.speedY = 0;
   }

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////
   function moveRightPaddle(){
      rightPaddle.x += rightPaddle.speedX;
      $("#rightPaddle").css("left", rightPaddle.speedX); 
      
      rightPaddle.x += rightPaddle.speedY;
      $("#rightPaddle").css("top", rightPaddle.speedY);
   }
   function moveLeftPaddle(){
      leftPaddle.x += leftPaddle.speedX;
      $("#leftPaddle").css("left", rightPaddle.speedX); 
      
      leftPaddle.x += leftPaddle.speedY;
      $("#leftPaddle.id").css("top", leftPaddle.speedY);
   }
  
  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
  
}
