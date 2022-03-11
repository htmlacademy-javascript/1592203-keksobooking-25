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

function getTitle(elementTitle, offerTitle) {
  if (offerTitle !== '') {
    elementTitle.textContent = offerTitle;
  } else {
    hideElement(elementTitle);
  }
}

function getAddress(elementAddress,offerAddress) {
  if (offerAddress !== '') {
    elementAddress.textContent = offerAddress;
  } else {
    hideElement(elementAddress);
  }
}

function getPrice(elementPrice, offerPrice) {
  if (offerPrice !== '') {
    elementPrice.textContent = `${offerPrice} ₽/ночь`;
  } else {
    hideElement(elementPrice);
  }
}

function getType(elementType, offeType) {
  if (offeType !== '') {
    switch (offeType) {
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
}

function getCapacity(elementCapacity, offerRooms, offerGuests){
  if ((offerRooms !== '') & (offerGuests !== '')) {
    elementCapacity.textContent = `${offerRooms} комнаты для ${offerGuests}`;
  } else {
    hideElement(elementCapacity);
  }
}

function getTime(elementTime, offerCheckin, offerCheckout) {
  if ((offerCheckin !== '') & (offerCheckout !== '')) {
    elementTime.textContent = `Заезд после ${offerCheckin}, выезд до ${offerCheckout}`;
  } else {
    hideElement(elementTime);
  }
}

function getListFeatures (featureContainer, offerFeatures) {
  if (offerFeatures.length !== 0) {
    const featureList = featureContainer.querySelectorAll('.popup__feature');
    featureList.forEach((featureListItem) => {
      const isNecessary = offerFeatures.some(
        (userFeature) => featureListItem.classList.contains(`popup__feature--${userFeature}`),
      );
      if (!isNecessary) {
        featureListItem.remove();
      }
    });
  } else {
    hideElement(featureContainer);
  }
}

function getDescription(elementDescription, offerDescription) {
  if (offerDescription !== '') {
    elementDescription.textContent = offerDescription;
  } else {
    hideElement(elementDescription);
  }
}

function getPhotos(photosList, offerPhotos) {
  if (offerPhotos.length !== 0) {
    const templatePhoto = photosList.querySelector('.popup__photo');
    photosList.innerHTML = '';
    offerPhotos.forEach((photo) => {
      const photoElement = templatePhoto.cloneNode(true);
      photoElement.src = photo;
      photosList.appendChild(photoElement);
    });
  } else {
    hideElement(photosList);
  }
}

function getAvatar(elementAvatar, authorAvatar) {
  if (authorAvatar !== '') {
    elementAvatar.src = authorAvatar;
  } else {
    hideElement(elementAvatar);
  }
}

data.forEach( ({author, offer}) => {
  const element = template.cloneNode(true);
  getTitle(element.querySelector('.popup__title'),offer.title);
  getAddress(element.querySelector('.popup__text--address'),offer.address);
  getPrice(element.querySelector('.popup__text--price'), offer.price);
  getType(element.querySelector('.popup__type'), offer.type);
  getCapacity(element.querySelector('.popup__text--capacity'), offer.rooms, offer.guests);
  getTime(element.querySelector('.popup__text--time'),offer.checkin, offer.checkout);
  getListFeatures(element.querySelector('.popup__features'), offer.features);
  getDescription(element.querySelector('.popup__description'), offer.description);
  getPhotos(element.querySelector('.popup__photos'), offer.photos);
  getAvatar(element.querySelector('.popup__avatar'), author.avatar);
  listFragment.appendChild(element);
});

listElement.appendChild(listFragment);
