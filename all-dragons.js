const FriendlyDragon = require("./classes/friendly-dragon.js");
const EvilDragon = require("./classes/evil-dragon.js");
const Dragon = require("./classes/dragon.js");

const falkorLifeGoals = [
  "save Atreyu from the swamp",
  "save Atreyu from the Nothing",
  "scare the local bullies into a dumpster"
];
let falkor = new FriendlyDragon("Falkor", "white", falkorLifeGoals, "Bastian");

const smaugEvilDoings = [
  "take over your mountain kingdom",
  "steal all your dwarven gold",
  "burn down your floating village"
];
let smaug = new EvilDragon("Smaug", "black", smaugEvilDoings, "Dwarf King");

let allDragons = Dragon.getDragons(falkor, smaug);


/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports.falkor = falkor
  module.exports.smaug = smaug
  module.exports.allDragons = allDragons
} catch {
  module.exports = null;
}
