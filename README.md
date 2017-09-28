<h1>What to Do:</h1>
<h4>You should:</h4>
<li>Fork this repo</li>
<li>Use TDD</li>
<li>write test using <a href="https://webapplog.com/tdd/">Mocha</a></li>
<li>Always write the code test first, this will help you understand whats needs to be done and get you in the habit of doing TDD</li>
<li>You need Mocha installed: install it global use, sudo npm install -g mocha</li>
<li font-family:"italic">Run NPM Install</li>
<h1>Ferry Kata</h1>

<h2> Instructions</h2>

Solve the Kata below using TDD. Complete it in Javascript or Python. Once done in one Language in the alotted time try it out in the other. Use flowcharts and diagrams to think through the required logic.

<h4> Part 1</h4>

In an island country far far away there are lots of Ferries that allow people to travel easily by car between all the different islands of this country.

This country's government would like to control the number of cars and people that can get onto a Ferry.

To help them they need you to:

* Create a Car class: each car instance has a color and keeps track of the number of passengers in the car.

* Create a Ferry class: the constructor should specify the number of cars allowed on the ferry and also how many people are allowed on the ferry. 

Cars are allowed onto the Ferry using the `board` method. If the ferry is not full yet the 
board method returns 'accepted'. If there are enough people or cars on the Ferry already, the board method should return 'rejected'.

The Ferry class instance should keep track of the number of people and cars on the Ferry using the people_count and car_count properties.

<h4> Part 2</h4>

Once you can load cars into the Ferry, look at other things the Ferry company is interested in.

The Ferry company is also interested in:
* knowing how many cars of a certain color are on the Ferry. 
* updating the people and car counts correctly when a car leaves the Ferry
* giving a car 50% discount after three trips on the same ferry. The board method should return ‘half price!’.
* giving a free trip after 7 trips on any Ferry. The board method should return ‘you go free!’
