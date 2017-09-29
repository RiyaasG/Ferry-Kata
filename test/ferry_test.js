var assert = require('assert');
var ferry = require('../ferry.js');
describe('ferry kata-', function(){
 it('should create a ferry', function(Done){
     var Theferry = new ferry(7, 7);
     //console.log(Theferry);
   assert.equal(Theferry.numberOfCars, 7);
   assert.equal(Theferry.numberOfPeople, 7);
   Done();
 });
});