var sauce = true;

var comments = [
  "Very nice! Around the hotel there are <b>funny</b> pubs where people my age hang out!",
  "I really liked spending my vacation there! It's really nice to have <b>funny</b> and cool bars near the hotel!",
  "It was fun to hang out with other people at the hotel! They were really <b>fun</b> and cheerful.",
  "It's near the beach. What more can I ask for? <b>Electric atmosphere</b>.",
  "There was food there. I like food. Therefore, I like this hotel",
  "Meh. This hotel isn't really my thing. I enjoy quiet and peaceful places better.",
  "Breakfast was actually quite good. How often can you say that about a hotel?!",
  "Lost a necklace after our stay. Called the place and they said they were already shipping it to my place. How nice are those people?",
  "Wouldn't recommend. The beds are stiffy, the shower isn't warm or cold enough. I just hated it."
]

var randomComments = shuffle(comments);

var list = '';
var randomList = '';

comments.forEach(function(comment,i){
  list += "<li>"+comment+"</li>";
  randomList += "<li>"+randomComments[i]+"</li>";
});

$(document).ready(function(){
  document.getElementById('hotel-comments').innerHTML = list;
})

var secretSauce = function(){
  if(sauce) {
    sauce = false;
    document.getElementById('hotel-comments').innerHTML = randomList;
    document.getElementById('secretSauce').innerHTML = "Secret sauce off";
  } else{
    sauce = true;
    document.getElementById('hotel-comments').innerHTML = list;
    document.getElementById('secretSauce').innerHTML = "Secret sauce on";
  }
}

function shuffle(array) {
  var copy = array.slice();
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = copy[currentIndex];
    copy[currentIndex] = copy[randomIndex];
    copy[randomIndex] = temporaryValue;
  }

  return copy;
}
