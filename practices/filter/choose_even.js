'use strict';

function choose_even(collection) {

  //implement here
  const selectEvenNumber=(number)=>number%2===0;
  return collection.filter(selectEvenNumber);
}

module.exports = choose_even;
