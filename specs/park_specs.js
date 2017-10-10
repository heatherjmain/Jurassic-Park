var assert = require("assert");
var Dinosaur = require("../dinosaur");
var Park = require("../park");

describe("Park", function() {
  var park1;
  var dinosaur1;
  var dinosaur2;
  var dinosaur3;
  var dinosaur4;
  var dinosaur5;

  beforeEach(function() {
    park1 = new Park();
    dinosaur1 = new Dinosaur("Tyrannosaurus", 3);
    dinosaur2 = new Dinosaur("Diplodocus", 4);
    dinosaur3 = new Dinosaur("Triceratops", 2);
    dinosaur4 = new Dinosaur("Velociraptor", 1);
    dinosaur5 = new Dinosaur("Nyanosaurus", 18);
  });

  it("should start empty", function() {
    assert.strictEqual(park1.enclosure.length, 0);
  });


  it("should be able to add dinosaur", function() {
    park1.addDino(dinosaur1);
    park1.addDino(dinosaur2);
    park1.addDino(dinosaur3);
    park1.addDino(dinosaur4);
    park1.addDino(dinosaur5);

    assert.strictEqual(park1.enclosure.length, 5);
  });


  it("should be able to remove all dinosaurs of a particular type", function() {
    park1.addDino(dinosaur1);
    park1.addDino(dinosaur2);
    park1.addDino(dinosaur2);
    park1.addDino(dinosaur3);
    park1.addDino(dinosaur2);
    park1.removeByType("Diplodocus")
    assert.strictEqual(park1.enclosure.length, 2);
  });


  it("should get all the dinosaurs with an offspring count of more than 2", function() {
    park1.addDino(dinosaur1);
    park1.addDino(dinosaur2);
    park1.addDino(dinosaur3);
    park1.addDino(dinosaur4);
    park1.addDino(dinosaur5);
    var moreThan2Offspring = park1.dinosWithMoreThan2Offspring();

    assert.strictEqual(park1.dinosWithMoreThan2Offspring().length, 3);
    assert.strictEqual(moreThan2Offspring[0].type, "Tyrannosaurus");
    assert.strictEqual(moreThan2Offspring[1].type, "Diplodocus");
    assert.strictEqual(moreThan2Offspring[2].type, "Nyanosaurus");
  });


  it("should be able to calculate number of dinosaurs after year one, starting with 1 dinosaur", function() {
    park1.addDino(dinosaur1);
    assert.strictEqual(park1.numberOfDinosaurs(1), 4);
  });

  it("should be able to calculate number of dinosaurs after year two, starting with 1 dinosaur", function() {
    park1.addDino(dinosaur1);
    assert.strictEqual(park1.numberOfDinosaurs(2), 7);
  });

  it("should be able to calculate number of dinosaurs after year two, starting with 2 dinosaurs", function() {
    park1.addDino(dinosaur1);
    park1.addDino(dinosaur2);
    assert.strictEqual(park1.numberOfDinosaurs(2), 16);
  });

  it("should be able to calculate number of dinosaurs after year ten, starting with 5 dinosaurs", function() {
    park1.addDino(dinosaur1);
    park1.addDino(dinosaur2);
    park1.addDino(dinosaur3);
    park1.addDino(dinosaur4);
    park1.addDino(dinosaur5);
    assert.strictEqual(park1.numberOfDinosaurs(10), 285);
  });

})
