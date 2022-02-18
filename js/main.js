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

randomNumberInt(1, 500);
randomNumberFload(0, 5.5, 2);
