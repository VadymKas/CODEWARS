multiplicationTable = function(size) {
  let result = [];

  for (let i = 1; i <= size; i++) {
    let count = 0;
    result.push( Array.from({length: size}, () => count += i) );
  }

  return result;
}