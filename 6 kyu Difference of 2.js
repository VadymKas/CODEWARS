function twosDifference(input){
  let result = [];

  for (let elem of input.sort( (a, b) => a - b ) ) {
    if ( input.includes( elem + 2 ) ) result.push([elem, elem + 2]);
  }

  return result;
}