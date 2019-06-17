$(document).ready(function() {
  var rps = new Rps();
  
  $('.playerChoice').on('click', function(event) {
    var player = $('.playerChoice').val();
    var comp = rps.compChoice();
    var winner = rps.play(player, comp);
    // console.log("event", event.currentTarget.id)
    console.log('event', event)
    console.log("comp", comp)
    console.log("winner", winner)
    var result = $('#result').text(winner)
    console.log("result", result)
  })

});
