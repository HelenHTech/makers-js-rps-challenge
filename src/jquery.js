$( document ).ready(function() {
 
  var rps = new Rps();

    // $('#newplayer1').text(rps._player1);
    // $('#newplayer2').text(rps._player2);
  
    $('.player1_choice').on('click', function() {
      console.log('test')
    rps.game('rock', 'paper');
    $('#result').text(rps._result)
  })

});
