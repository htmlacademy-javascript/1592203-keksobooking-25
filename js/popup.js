import {arrayCards} from './data.js';

const listElement = document.querySelector('#map-canvas');
const template = document.querySelector('#card').content.querySelector('.popup');
const data = arrayCards();
const listFragment = document.createDocumentFragment();

function hideElement(element) {
  element.style.display = 'none';
}

const typeDictionary = new Map();
typeDictionary.set('flat', 'Квартира');
typeDictionary.set('bungalow', 'Бунгало');
typeDictionary.set('house', 'Дом');
typeDictionary.set('palace', 'Дворец');
typeDictionary.set('hotel', 'Отель');

data.forEach( ({author, offer}) => {
  const element = template.cloneNode(true);
  const elementTitle = element.querySelector('.popup__title');
  if (offer.title !== '') {
    elementTitle.textContent = offer.title;
  } else {
    hideElement(elementTitle);
  }
  const elementAddress = element.querySelector('.popup__text--address');
  if (offer.address !== '') {
    elementAddress.textContent = offer.address;
  } else {
    hideElement(elementAddress);
  }
  const elementPrice = element.querySelector('.popup__text--price');
  if (offer.price !== '') {
    elementPrice.textContent = `${offer.price} ₽/ночь`;
  } else {
    hideElement(elementPrice);
  }
  const elementType = element.querySelector('.popup__type');
  if (offer.type !== '') {
    switch (offer.type) {
      case 'flat':
        elementType.textContent = typeDictionary.get('flat');
        break;
      case 'bungalow':
        elementType.textContent = typeDictionary.get('bungalow');
        break;
      case 'house':
        elementType.textContent = typeDictionary.get('house');
        break;
      case 'palace':
        elementType.textContent = typeDictionary.get('palace');
        break;
      case 'hotel':
        elementType.textContent = typeDictionary.get('hotel');
        break;
    }
  } else {
    hideElement(elementType);
  }
  const elementCapacity = element.querySelector('.popup__text--capacity');
  if ((offer.rooms !== '') & (offer.guests !== '')) {
    elementCapacity.textContent = `${offer.rooms} комнаты для ${offer.guests}`;
  } else {
    hideElement(elementCapacity);
  }
  const elementTime = element.querySelector('.popup__text--time');
  if ((offer.checkin !== '') & (offer.checkout !== '')) {
    elementTime.textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
  } else {
    hideElement(elementTime);
  }
  const featureContainer = element.querySelector('.popup__features');
  if (offer.features.length !== 0) {
    const featureList = featureContainer.querySelectorAll('.popup__feature');
    featureList.forEach((featureListItem) => {
      const isNecessary = offer.features.some(
        (userFeature) => featureListItem.classList.contains(`popup__feature--${userFeature}`),
      );
      if (!isNecessary) {
        featureListItem.remove();
      }
    });
  } else {
    hideElement(featureContainer);
  }
  const elementDescription = element.querySelector('.popup__description');
  if (offer.description !== '') {
    elementDescription.textContent = offer.description;
  } else {
    hideElement(elementDescription);
  }
  const photosList = element.querySelector('.popup__photos');
  if (offer.photos.length !== 0) {
    const templatePhoto = photosList.querySelector('.popup__photo');
    photosList.innerHTML = '';
    offer.photos.forEach((photo) => {
      const photoElement = templatePhoto.cloneNode(true);
      photoElement.src = photo;
      photosList.appendChild(photoElement);
    });
  } else {
    hideElement(photosList);
  }
  const elementAvatar = element.querySelector('.popup__avatar');
  if (author.avatar !== '') {
    elementAvatar.src = author.avatar;
  } else {
    hideElement(elementAvatar);
  }
  listFragment.appendChild(element);
});

listElement.appendChild(listFragment);
