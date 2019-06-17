function Rps() {
  this.playerName = "";
  this._rules = { 'rock':'scissors', 'paper':'rock', 'scissors':'paper' };
  this._tools = ['rock', 'paper', 'scissors']
}

Rps.prototype.setPlayerName = function(name) {
  return this.playerName = name;
};

Rps.prototype.play = function(playerChoice, compChoice) {
  if (playerChoice === compChoice) {
    return "It's a draw this time";
  } else if (this._rules[playerChoice] === compChoice) {
    return "Congratulations, you won";
  } else {
    return "You lost to the computer, try again!";
  }
};

Rps.prototype.compChoice = function(){
  var random = this._tools[Math.floor(Math.random()*this._tools.length)];
  return random;
};
