function SubtractSum(n){
  const fruitsList = ['kiwi','pear','kiwi','banana','melon','banana','melon','pineapple','apple','pineapple','cucumber','pineapple','cucumber','orange','grape','orange','grape','apple','grape','cherry','pear','cherry','pear','kiwi','banana','kiwi','apple','melon','banana','melon','pineapple','melon','pineapple','cucumber','orange','apple','orange','grape','orange','grape','cherry','pear','cherry','pear','apple','pear','kiwi','banana','kiwi','banana','melon','pineapple','melon','apple','cucumber','pineapple','cucumber','orange','cucumber','orange','grape','cherry','apple','cherry','pear','cherry','pear','kiwi','pear','kiwi','banana','apple','banana','melon','pineapple','melon','pineapple','cucumber','pineapple','cucumber','apple','grape','orange','grape','cherry','grape','cherry','pear','cherry','apple','kiwi','banana','kiwi','banana','melon','banana','melon','pineapple','apple','pineapple'];

  const step = n - n.toString().split('').reduce((a, b) => +a + +b, 0)

  return (step >= 0 && step < 100) ? fruitsList[step - 1] : SubtractSum(step);
}