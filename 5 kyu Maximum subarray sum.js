//ver.3
function maxSequence(arr) {
  let result = 0;
  let count = 0;

  for (let el of arr) {
    count += el;

    (count < 0) ? count = 0 : (count > result) ? result = count : 'skip';
  } 
  return result;
}



//ver.1
/*
function maxSequence(arr) {
  let result = 0;
  let res = [];

  for (let i = 0; i < arr.length; i++) {
    result = arr[i];
    res.push(arr[i]);
    for (let y = i + 1; y < arr.length; y++) {
      result += arr[y];
      res.push(result); 
    }
  } 
  return (Math.max(...res) < 0) ? 0 : Math.max(...res);
}
*/

//ver.2
/*
function maxSequence(arr) {
  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    let counting = 0;
    for (let y = i; y < arr.length; y++) {
      counting += arr[y];
      if (counting > result) result = counting;
    }
  } 
  return result;
}
*/

//ver.3

/*

*/