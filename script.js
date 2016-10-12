var speechVoice = speechSynthesis.getVoices()[10];

var onSubmit = function() {
  var setupNumber = $('#setup-number').val();
  var player1 = $('#player-1').val();
  var player2 = $('#player-2').val();

  var msg = 'setup ' + setupNumber + '. ' + player1 + '. ' + player2;
  var msg = new SpeechSynthesisUtterance(msg);
  msg.voice = speechSynthesis.getVoices()[0];
  msg.rate = .5;

  // Speak and repeat once.
  window.speechSynthesis.speak(msg);
  window.speechSynthesis.speak(msg);

  //clearForm();
};

var clearForm = function() {
  // Currently, initialize with dummy data.
  $('#player-1').val('homemadewaffles');
  $('#player-2').val('phil');
  $('#setup-number').val('2');
};

$('#submit').click(onSubmit);

$('#form').keypress(function(e) {
  if(e.which == 13) {
    onSubmit();
  }
});

clearForm();

$('#player-1').autocomplete({
  source: ['java', 'javascript'],
  autoFocus: true
});
