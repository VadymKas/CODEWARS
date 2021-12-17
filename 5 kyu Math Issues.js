Math.round = function(number) {
  return (number - parseInt(number) >= 0.5) ? parseInt(number) + 1 : parseInt(number);           
};

Math.ceil = function(number) {
  return (parseInt(number) == number) ? parseInt(number) : parseInt(number) + 1;
};

Math.floor = function(number) {
  return parseInt(number);
};

// you can use for fun something like 
//return ( +number.toString().split('.')[1] > 0 ) ? +number.toString().split('.')[0] + 1: +number.toString().split('.')[0];