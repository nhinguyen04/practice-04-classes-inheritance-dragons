const phaseModulePath = "./dragon.js";
const Dragon = require(phaseModulePath);

class FriendlyDragon extends Dragon {
    constructor(name, color, lifeGoals, friend) {
        super(name, color);
        this.lifeGoals = lifeGoals;
        this.friend = friend;
    }

    hasLifeGoals() {
        this.lifeGoals.forEach((ele) => {
            console.log(`${this.name} likes to ${ele}`);
        })
    }

    helpsPeople() {
        return `${this.name} helps their friend ${this.friend}`;
    }
}


/****************************************************************************/

try {
    module.exports = FriendlyDragon;
  } catch {
    module.exports = null;
  }
