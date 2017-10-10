var assert = require("assert");
var Dinosaur = require("../dinosaur");
var Park = require("../park");

describe("Dinosaur", function() {
  var dinosaur1;
  var dinosaur2;
  var dinosaur3;
  var dinosaur4;
  var dinosaur5;

  beforeEach(function() {
    dinosaur1 = new Dinosaur("Tyrannosaurus", 3);
    dinosaur2 = new Dinosaur("Diplodocus", 4);
    dinosaur3 = new Dinosaur("Triceratops", 2);
    dinosaur4 = new Dinosaur("Velociraptor", 1);
    dinosaur5 = new Dinosaur("Nyanosaurus", 18);
  })

  it("should have a type", function() {
    assert.strictEqual(dinosaur1.type, "Tyrannosaurus");
  })

  it("should havea number of offspring", function() {
    assert.strictEqual(dinosaur1.numberOfOffspring, 3);
  })






})
