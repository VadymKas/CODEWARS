function digital_root(n) {
  let result = n.toString().split('').reduce((sum, cur) => sum + +cur, 0);

  return (result > 9) ? digital_root(result) : result;
}