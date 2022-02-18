function randomNumberInt(min, max) {
  if ((min >= max) || (min < 0)) {
    return 'некоректный диапазон';
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomNumberFload(min, max, length) {
  if ((min >= max) || (min < 0)) {
    return 'некоректный диапазон';
  }

  return (Math.random() * (max - min) + min).toFixed(length);
}

console.log('случайное целок число ' + randomNumberInt(1, 500));
console.log("случайное число с плавующей запятой " + randomNumberFload(0, 5.5, 2));
