'use strict';

function grouping_count(collection) {

  //implement here
  const result={};
  collection.filter((number) => {
    result[number]=result[number]>=1?result[number]+1:1;
    return true;
  });
  return result;
}

module.exports = grouping_count;
