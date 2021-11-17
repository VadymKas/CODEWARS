function findOdd(A) {
  let counter = 0;
  let sortArray = A.sort((a, b) => a - b);

  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < A.length; j++) {
      if(A[i] === A[j]) {
        counter++;
      }
    }
    if (counter % 2 !== 0) {
      return A[i];
    }  
  }
}