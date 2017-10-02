// $(document).ready(function() {
//   $("#howinput").focus(function(){
//
//   });
// });

var focus = function(param) {
  var other;
  if(param == "how") other = "where";
  else other = "how";
  $('#'+param+"-input").animate({
    width: "80%"
  }, 1000);
}
