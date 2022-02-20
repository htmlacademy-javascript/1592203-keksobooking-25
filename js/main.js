function getRandomPositiveInt(min, max) {
  if (Math.min(min,max)<0) {
    throw new RangeError('Incorrect range!');
  }

  const start =  Math.min(min,max);
  const end =  Math.max(min,max);

  return Math.floor(Math.random() * (start - end + 1)) + end;
}

function getRandomPositiveFloat(min, max, lengthFractional) {
  if (Math.min(min,max)<0) {
    throw new RangeError('Incorrect range!');
  }

  const start =  Math.min(min,max);
  const end =  Math.max(min,max);

  return (Math.random() * (start - end) + end).toFixed(lengthFractional);
}

getRandomPositiveInt(1000, 400);
getRandomPositiveFloat(0.1, 0.3, 2);
