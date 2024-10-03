const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
  printGoals: function (...playersName) {
    let total = 0;

    for (let i = 0; i < playersName.length; i++) {
      total += 1;
    }
    console.log(...playersName, `Number of goals scored ${total}`);
  },
};

//1
const [players1, players2] = game.players;

console.log(players1);
console.log(players2);

//2
const [gk, ...fieldPlayers] = players1;

console.log(gk, fieldPlayers);

//3
const allPlayers = [...players1, ...players2];

console.log(allPlayers);

//4
const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];

console.log(players1Final);

//5
const { team1, x: draw, team2 } = game.odds;
console.log(team1, draw, team2);

//6
game.printGoals(...game.scored);

//7
team1 < team2 && console.log("team 1 is more likely to win. ");
team1 > team2 && console.log("team 2 is more likely to win. ");

/*

    Coding Challenge #2
    Let's continue with our football betting app! Keep using the 'game' variable from 
    before.
    Your tasks:
    1. Loop over the game.scored array and print each player name to the console, 
    along with the goal number (Example: "Goal 1: Lewandowski")
    2. Use a loop to calculate the average odd and log it to the console (We already 
    studied how to calculate averages, you can go check if you don't remember)
    3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
    Odd of victory Bayern Munich: 1.33
    Odd of draw: 3.25
    Odd of victory Borrussia Dortmund: 6.5
    Get the team names directly from the game object, don't hardcode them 
    (except for "draw"). Hint: Note how the odds and the game objects have the 
    same property names �
    4. Bonus: Create an object called 'scorers' which contains the names of the 
    players who scored as properties, and the number of goals as the value. In this 
    game, it will look like this:
    {
    Gnarby: 1,
    Hummels: 1,
    Lewandowski: 2
    }

*/

console.log("Coding Challenge #2");

//1
for (const [goalNumber, player] of game.scored.entries()) {
  console.log(`Goal ${goalNumber + 1}: ${player}`);
}

//2
let sumOdd = 0;
let totalOdds = Object.values(game.odds).length;

for (const odd of Object.values(game.odds)) sumOdd += odd;

console.log(`The avarege odd is ${sumOdd / totalOdds}`);

//3

//const [array1, array2] = Object.entries(game);

for (const [propertyName, value] of Object.entries(game.odds)) {
  //console.log(propertyName, value);

  //bad implementation
  /*if (propertyName === array1[0]) {
    console.log(`Odd for victory  for ${array1[1]} is ${value}`);
  } else if (propertyName === array2[0]) {
    console.log(`Odd for victory  for ${array2[1]} is ${value}`);
  } else {
    console.log(`Odd for draw is ${value}`);
  }*/

  //good one
  const strTeam = propertyName === "x" ? "draw" : game[propertyName];
  console.log(`Odd for ${strTeam} is ${value}`);
}

//4
let scorers = {};

for (const [index, player] of game.scored.entries()) {
  scorers[player] = scorers[player] === undefined ? 1 : scorers[player] + 1;
}

console.log(scorers);
