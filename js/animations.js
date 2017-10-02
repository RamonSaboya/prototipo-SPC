var focusFunction = function(param) {
  var other;
  if(param == 'how'){
    other = 'where';
    $('#'+other+'-input').attr('placeholder','Where?');
    $('#'+param+'-input').attr('placeholder','Tell me your ideal hotel');
  }
  else {
    other = 'how';
    $('#'+other+'-input').attr('placeholder','How?');
    $('#'+param+'-input').attr('placeholder','Where do you want to go?');
  }

  $('#'+param).animate({
    width: "80%"
  });
  $('#'+other).animate({
    width: "20%"
  });
}
