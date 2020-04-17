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

// function cachicken() {
//   var correctAnswer = 7;
//   for (var i = 0; i < 4; i = i + 1) {
//     var numberGuess = prompt(
//       "How many chicken breast does Captain America eat per day?"
//     );
//     if (numberGuess == correctAnswer) {
//       alert("You are correct!");
//       break;
//     } else {
//       alert("Nope, Try again.");
//     }
//     // if ((i = 3)) {
//     //   alert("Nope!");
//     // }
//   }
// }

function cachicken() {
  var correctAnswer = 7;
  var guess = "";

  while (guess != correctAnswer) {
    guess = prompt(
      "How many chicken breast does Captain America eat per day? Hint: Answer is 1-10"
    );
  }
  alert("Good job!");
}

// var i = 0;
// while(i < 10) {
//   console.log(i);
//   i++;
// }

zone();

whoUrFav();

favMarvelMovie();

cachicken();

var today = new Date();
document.write(today);
