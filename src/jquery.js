$(document).ready(function() {
  var rps = new Rps();
  
  $('#player_name').submit(function(event) {
    event.preventDefault();
    var player1 = $('#player1').val();
    rps.setPlayerName(player1);
    $('#player1name').text("Hello " + rps.playerName + ", choose your tool..");
  });

  $('.playerChoice').on('click', function(event) {
    var player = event.currentTarget.id
    var comp = rps.compChoice();
    var winner = rps.play(player, comp);
    $('#result').text(winner)
  });

});

// Could possibly have a test which covers the mechanics of the game.
// It might be worth looking into a spy: https://jasmine.github.io/2.0/introduction.html 
// or stub to be able to handle the randomness in the game