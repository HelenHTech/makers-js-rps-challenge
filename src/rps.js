function Rps() {
  this._player1 = document.getElementById('newplayer1').innerHTML;
  this._player2 = document.getElementById('newplayer2').innerHTML;
  this._result = "";
  this._rules = { 'rock':'scissors', 'paper':'rock', 'scissors':'paper' };
}

function playerChoice(player, choice) {
  document.getElementById(player).value = choice;
}

Rps.prototype.game = function(player1choice, player2choice) {
  player1choice = (document.getElementById("player1").value)
  player2choice = (document.getElementById("player2").value)
  if (player1choice === player2choice) {
    this._result.textContent = "It's a draw this time";
  } else if (this._rules[player1choice] === player2choice) {
    this._result.textContent = "Congratulations ${player1}, you won";
  } else {
    this._result.textContent = "Congratulations ${player2}, you won";
  }
}
