// `use strict`;
function zone() {
  confirm("You are entering the Avenger Zone.");
}

function whoUrFav() {
  var avenger = prompt("Who is your favorite Marvel character?");
  if (avenger == "Iron Man") {
    alert("Same! How cool!");
  } else {
    alert("oh, mine is Iron Man.");
  }
}

function favMarvelMovie() {
  var marvfav = prompt("Which Marvel movie is your favorite?").toLowerCase();
  if (marvfav == "guardians of the galaxy") {
    alert("I love Rocket!");
  } else if (marvfav == "captain america") {
    alert("Steve Rogers is so cool.");
  } else if (marvfav == "iron man") {
    alert("Iron Man is awesome!");
  } else {
    alert("Such a good movie!");
  }
}

zone();

whoUrFav();

favMarvelMovie();

var today = new Date();
document.write(today);
