function getRandomPositiveInt(min, max) {
  if ((min === max) || (min < 0) || (max < 0)) {
    return console.error('data error %d',NaN);
  }

  if (max < min) {
    min = min + max;
    max = min - max;
    min = min - max;
    return console.warn('reverse range %d', Math.floor(Math.random() * (max - min + 1)) + min);
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomPositiveFloat(min, max, charAfterSign) {
  if ((min === max) || (min < 0) || (max < 0)) {
    return console.error('data error %d',NaN);
  }

  if (max < min) {
    min = min + max;
    max = min - max;
    min = min - max;
    return console.warn('reverse range %d', (Math.random() * (max - min) + min).toFixed(charAfterSign));
  }

  return (Math.random() * (max - min) + min).toFixed(charAfterSign);
}

getRandomPositiveInt(1000, 500);
getRandomPositiveFloat(1, -3, 2);
