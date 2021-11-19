function high(x){
  const alphabet = ["0","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  const arr = x.split(' ');
  let highestScore = arr[0];

  let score = data => data.split('').reduce( (sum, cur) => sum + alphabet.indexOf(cur), 0);

  for (let elem of arr) {
    if ( score(elem) > score(highestScore) ) highestScore = elem;
  }

  return highestScore;
}