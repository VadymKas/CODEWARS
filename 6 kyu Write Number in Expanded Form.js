function expandedForm(num) {
  let arr = num.toString().split('');
  let result = [];
  let counter = 1;

  for (let i = arr.length - 1; i >= 0; i--) { 
    if (arr[i] > 0) result.unshift(arr[i] * counter);
    
    counter *= 10;
  }

  return result.join(' + ');
}