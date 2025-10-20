/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal = {};

animal.species = 'snake';
animal['name'] = 'Tony';
animal.noises = [];

//console.log(animal);

//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var noises = [];

noises[0] = 'rattle';
noises.push('buzzing');
noises.unshift('hissing');
noises[noises.length] = 'whistling';

// console.log(noises.length);
// console.log(noises[noises.length - 1]);
//console.log(noises);


//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
animal['noises'] = noises;
animal.noises.push('shrieking');
//console.log(animal);


/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *dot-notation:objectName.objectKey='objectValue';
 *bracket-notation:objectName['objectKey']=objectValueDeclared or 'objectValue';
 *bracket-notation:objectName[objectKey]=objectValue
 * 2. What are the different ways of accessing elements on arrays?
 *bracket-notation:arrayName[array index];
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animals = [];
animals.push(animal);
//console.log(animals); //[{...}]

var duck = {};
duck.species = 'duck';
duck['name'] = 'Jerome';
duck.noises = ['quack', 'honk', 'sneeze', 'woosh'];

animals.push(duck);
//console.log(animals); //2 [{...}, {...}]

var rooster = {};
rooster.species = 'rooster';
rooster.name = 'Ronnie';
rooster.noises = ['crow', 'peck'];

animals.push(rooster);

var monkey = {};
monkey['species'] = 'monkey';
monkey['name'] = 'Molly';
monkey['noises'] = ['howl', 'chatter'];

animals.push(monkey);

//console.log(animals); //4 [{...}, {...}, {...}, {...}]
//console.log(animals.length); //4 

//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//choose data structure - array
//explain why - arrays are easy to arrange and search; great when creating lists

var friends = [];

/*create function
*inputs array - animals array
*returns index of input array at random
*use Math.random syntax: Math.floor(Math.random() *array end point);
*/
function getRandom(animals){

return Math.floor(Math.random() * animals.length);

}

//console.log(animals[getRandom(animals)]); //rooster

var randomAnimal = animals[getRandom(animals)];

friends.push(randomAnimal.name);

console.log(friends);

randomAnimal.friends = friends
console.log(friends);








/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}