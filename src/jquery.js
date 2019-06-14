$( document ).ready(function() {
 
  var rps = new RPS();
  $('#newplayer1').text(rps._player1);
  $('#newplayer2').text(rps._player2);
  
  function updateResult() {
    rps.gamerules();
    $('#result').test(rps._result)
  }

});
