function getRandomPositiveInt(min, max) {
  try {
    if (Math.min(min,max)<0) {throw NaN;}
  }
  catch (err) {
    return err;
  }

  const minInt =  Math.min(min,max);
  const maxInt =  Math.max(min,max);

  return Math.floor(Math.random() * (maxInt - minInt + 1)) + minInt;
}

function getRandomPositiveFloat(min, max, charAfterSign) {
  try {
    if (Math.min(min,max)<0) {throw NaN;}
  }
  catch (err) {
    return err;
  }

  const minFloat =  Math.min(min,max);
  const maxFloat =  Math.max(min,max);

  return (Math.random() * (maxFloat - minFloat) + minFloat).toFixed(charAfterSign);
}

getRandomPositiveInt(1000, 500);
getRandomPositiveFloat(0, 1, 2);
