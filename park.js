var Dinosaur = require("./dinosaur");

var Park = function() {
  this.enclosure = [];
}

module.exports = Park;

Park.prototype.addDino = function(dinosaur) {
  this.enclosure.push(dinosaur);
}


Park.prototype.removeByType = function(species) {
  var dinosToKeep = [];
    for (var dinosaur of this.enclosure) {
      if (dinosaur.type !== species) {
        dinosToKeep.push(dinosaur);
      }
    }
    this.enclosure = dinosToKeep;
}

Park.prototype.dinosWithMoreThan2Offspring = function() {
  var moreThan2Offspring = [];
    for (var dinosaur of this.enclosure) {
      if (dinosaur.numberOfOffspring > 2) {
        moreThan2Offspring.push(dinosaur);
      }
    }
    return moreThan2Offspring;
}

Park.prototype.numberOfDinosaurs = function(timeInYears) {
  var dinosaurCount = this.enclosure.length;
    for (var dinosaur of this.enclosure) {
      dinosaurCount += (dinosaur.numberOfOffspring * timeInYears)
    }
    return dinosaurCount;
}
