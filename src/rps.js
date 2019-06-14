var player1 = document.getElementById('player1');
var player2 = document.getElementById('player2');
var player1choice = document.getElementById('player1choice');
var player2choice = document.getElementById('player2choice');
var result = "";


function RPS(player1choice, player2choice) {
  this._rules = { 'Rock':'Scissors', 'Paper':'Rock', 'Scissors':'Paper'};
}

RPS.prototype.gamerules = function() {
  if (player1choice == player2choice) {
    result = "It's a draw this time";
  } else if (this._rules[player1choice] == player2choice) {
      result = "Congratulations" + player1 + ", you won";
  } else {
    result = "Congratulations" + player2 + ", you won";
  }
  
};
