function getRandomPositiveInt(min, max) {
  if (Math.min(min,max)<0) {
    throw new RangeError('Incorrect range!');
  }

  const start =  Math.min(min,max);
  const end =  Math.max(min,max);

  return Math.floor(Math.random() * (end - start + 1)) + start;
}

function getRandomPositiveFloat(min, max, lengthFractional) {
  if (Math.min(min,max)<0) {
    throw new RangeError('Incorrect range!');
  }

  const start =  Math.min(min,max);
  const end =  Math.max(min,max);

  return (Math.random() * (end - start) + start).toFixed(lengthFractional);
}

function getRandomElement(elements) {
  return elements[getRandomPositiveInt(0, elements.length - 1)];
}

export{getRandomPositiveInt, getRandomPositiveFloat, getRandomElement};
