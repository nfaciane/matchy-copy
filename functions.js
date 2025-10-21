/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function search(animals, name){
    for(let i = 0; i < animals.length; i++){
        let a = animals[i].name;
        let b = name;
        if(a === b){
            return animals[i];
        } else{
            
        }
        }
        return null;
    }
  function replace(animals, name, replacement){
    for(let i = 0; i < animals.length; i++){
        let a = animals[i].name;
        let b = name;
        if(a === b){
            animals.splice(animals[i], 1, replacement);
        }
        }
        
  }
  function remove(animals, name){
    for(let i = 0; i < animals.length; i++){
        let a = animals[i].name;
        let b = name;
        if(a === b){
            animals.splice(animals[i], 1);
        }
        }
  }
  function add(animals, animal){
    for(let i = 0; i < animals.length; i++){
      let a = animals[i].name;
      console.log(a);
      let b = animals[i].species;
      if(a.length > 0 && b.length > 0 && a !== animal){
        animals.push(animal);
      }
  }
}


//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////



/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}