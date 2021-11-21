function findUniq(arr) {
  let result = +arr.filter(x => x != arr[0]).toString();
  return isNaN(result) ? arr[0] : result;
}