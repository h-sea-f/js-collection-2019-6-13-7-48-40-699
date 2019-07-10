'use strict';

function choose_multiples_of_three(collection) {

  //implement here
  const selectMultiplesThree=(number)=>number%3===0;
  return collection.filter(selectMultiplesThree);
}

module.exports = choose_multiples_of_three;
