$( document ).ready(function(){
  var startGame=Math.floor(Math.random()*101+19)
  $('#gamePoints').text(startGame);

$('#one').on ('click', function(){
    total = total + gemone;
    console.log("New total= " + total);
    $('#finalTotal').text(total); 

    if (total == startGame){
          winner();
        }
        else if ( total > startGame){
          loser();
        }   
  })  
  $('#two').on ('click', function(){
    total = total + gemtwo;
    console.log("New userTotal= " + total);
    $('#finalTotal').text(total); 
        if (total == startGame){
          winner();
        }
        else if ( total > startGame){
          loser();
        } 
  })  
  $('#three').on ('click', function(){
    total = total + gemthree;
    console.log("New userTotal= " + total);
    $('#finalTotal').text(total);

    if (total == startGame){
          winner();
        }
        else if ( total > startGame){
          loser();
        } 
  })  
  $('#four').on ('click', function(){
    total = total + gemfour;
    console.log("New userTotal= " + total);
    $('#finalTotal').text(total); 
      
          if (total == startGame){
          winner();
        }
        else if ( total > startGame){
          loser();
        }
  });   
var gemone= Math.floor(Math.random()*11+1)
var gemtwo= Math.floor(Math.random()*11+1)
var gemthree= Math.floor(Math.random()*11+1)
var gemfour= Math.floor(Math.random()*11+1)
var total= 0; 
var wins= 0;
var losses = 0;
$('#wins').text(wins);
$('#losses').text(losses);
    function reset(){
      startGame=Math.floor(Math.random()*101+19);
        console.log(startGame)
$('#gamePoints').text(startGame);
      gemone= Math.floor(Math.random()*11+1);
      gemtwo= Math.floor(Math.random()*11+1);
      gemthree= Math.floor(Math.random()*11+1);
      gemfour= Math.floor(Math.random()*11+1);
      total= 0;
      $('#finalTotal').text(total);
      } 

      function winner(){
alert("congratulations you won!");
  wins++; 
  $('#wins').text(wins);
  reset();
}
function loser(){
alert ("congratulations you played yourself!");
  losses++;
  $('#losses').text(losses);
  reset()
}
}); 