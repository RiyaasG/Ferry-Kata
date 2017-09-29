var assert = require('assert');
var car = require('../car.js');
describe('ferry kata-', function(){
 it('should create a car', function(Done){
     var Thecar = new car("red", 5);
     //console.log(Thecar);
   assert.equal(Thecar.color, "red");
   assert.equal(Thecar.numberOfPeople, 5);
   Done();
 });
});