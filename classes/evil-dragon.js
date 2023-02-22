const phaseModulePath = "./dragon.js";
const Dragon = require(phaseModulePath);

class EvilDragon extends Dragon {
    constructor(name, color, evilDoings, nemesis) {
        super(name, color);
        this.evilDoings = evilDoings;
        this.nemesis = nemesis;
    }

    dontInviteThemOverForDinner() {
        for(const index in this.evilDoings) {
            console.log(`${this.name} will ${this.evilDoings[index]}`);
        }
    }

    burnsNemesis() {
        return `${this.name} destroys ${this.nemesis} with fire! WHOOOSH!!!`
    }
}


/****************************************************************************/

try {
    module.exports = EvilDragon;
  } catch {
    module.exports = null;
  }
