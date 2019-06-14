function RPS() {
  this._player1 = document.getElementById('newplayer1').innerHTML;
  this._player2 = document.getElementById('newplayer2').innerHTML;
  this._result = "";
}

function playerChoice(player, choice) {
  document.getElementById(player).value = choice;
}

RPS.prototype.gamerules = function() {
  this._rules = { 'Rock':'Scissors', 'Paper':'Rock', 'Scissors':'Paper'};
  if (player1.choice == player2.choice) {
    result = "It's a draw this time";
  } else if (this._rules[player1.choice] == player2.choice) {
      result = "Congratulations" + player1 + ", you won";
  } else {
    result = "Congratulations" + player2 + ", you won";
  }
  
};
