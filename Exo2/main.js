"use strict";

let players = [];
let wheel = document.querySelector("img");
let filter = document.querySelector("#filter");
let result = document.querySelector(".result");
let addPlayer = document.querySelector(".addPlayer");

//Class for get new player
class Player {
  constructor(name, genre, age) {
    this.name = name;
    this.genre = genre;
    this.age = age;
  }
}

//Check value and create new player
addPlayer.addEventListener("click", () => {
  let name = document.querySelector("#input__name"),
    genre = document.querySelector("#input__genre"),
    age = document.querySelector("#input__age");

  if (name.value !== "" || genre.value !== "" || age.value !== "") {
    let newPlayer = new Player(
      `${name.value.trim()}`,
      `${genre.value.trim()}`,
      `${age.value}`
    );
    players.push(newPlayer);
    printPlayers();
  } else alert("Les champs sont vides");
});

//Print player in the DOM
const printPlayers = () => {
  document.querySelector(".players__container").innerHTML = "";
  players.forEach((player) => {
    console.log(player);
    document.querySelector(
      ".players__container"
    ).innerHTML += `<p>${player.name} - ${player.genre} - ${player.age} ans</p>`;
  });
};

//Start function for launch the random
const start = () => {
  if (players.length > 0) {
    wheel.style.opacity = "1";
    wheel.style.visibility = "visible";
    if (filter.checked) {
      players = players.filter((element) => {
        return element.name.length <= 5;
      });
      getRandomPlayer(players);
    } else {
      getRandomPlayer(players);
    }
  } else {
    alert("Vous devez rentrez au moins un joueur");
  }
};

/*
 * Pick random player from global array
 * @param {array} List of players.
 */
const getRandomPlayer = (players) => {
  setTimeout(() => {
    wheel.style.opacity = "0";
    wheel.style.visibility = "hidden";

    result.innerHTML = "";
    const randomPlayer = players[Math.floor(Math.random() * players.length)];
    result.innerHTML += `Le joueur choisi est ${randomPlayer.name}`;
  }, 2000);
};
