function order(words){
  let result = [];

  for ( let elem of words.split(' ') ) {
    result[elem.replace(/[^0-9]/g, '') - 1] = elem;
  }

  return result.join(' ');
}