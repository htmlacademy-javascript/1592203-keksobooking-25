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

const TYPE = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const TITLE = ['The Resident Covent Garden', 'Pan Pacific London', 'Canopy By Hilton London City', 'The Gate', 'The Resident Victoria', 'Royal Lancaster London'];
const CHECKIN = ['12:00', '13:00', '14:00'];
const CHECKOUT = ['12:00', '13:00', '14:00'];
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const DESCRIPTION = ['good', 'satisfactory', 'excellent', 'bad'];
const PHOTOS = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];

function getRandomElement(elements) {
  return elements[getRandomPositiveInt(0, elements.length - 1)];
}

function getArrayFeature(elements, length) {
  const features = [];
  for (let i=0; i < length; i++) {
    let elementFeatures;
    do {
      elementFeatures = getRandomElement(elements);
    }
    while (features.includes(elementFeatures));
    features.push(elementFeatures);
  }
  return features;
}

function getArrayPhoto(elements, length) {
  const photos = [];
  for (let i=0; i < length; i++) {
    photos.push(getRandomElement(elements));
  }
  return photos;
}

function getPhotoAuthor() {
  const numberImages = String(getRandomPositiveInt(1, 10));
  return `img/avatars/user${numberImages.padStart(2,'0')}.png`;
}

function getCard() {
  return {
    author: {avatar: getPhotoAuthor()},
    offer: {
      title: getRandomElement(TITLE),
      address: `${getRandomPositiveFloat(35.65000, 35.70000, 5)}  ${getRandomPositiveFloat(139.70000, 139.80000, 5)}`,
      price: getRandomPositiveInt(2500, 15000),
      type: getRandomElement(TYPE),
      rooms: getRandomPositiveInt(10, 400),
      guests: getRandomPositiveInt(50, 1400),
      checkin: getRandomElement(CHECKIN),
      checkout: getRandomElement(CHECKOUT),
      features: getArrayFeature(FEATURES, getRandomPositiveInt(1, 6)),
      description: getRandomElement(DESCRIPTION),
      photos: getArrayPhoto(PHOTOS,getRandomPositiveInt(1, 3))
    },
    location: {
      lat: getRandomPositiveFloat(35.65000, 35.70000, 5),
      lng: getRandomPositiveFloat(139.70000, 139.80000, 5)
    }
  };
}

getCard();
