import {arrayCards} from './data.js';

const listElement = document.querySelector('#map-canvas');
const template = document.querySelector('#card').content.querySelector('.popup');
const data = arrayCards();
const listFragment = document.createDocumentFragment();

function hideElement(element) {
  element.style.display = 'none';
}

const typeDictionary = {flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель'
};

function setTitle(elementTitle, offerTitle) {
  if (offerTitle !== '') {
    elementTitle.textContent = offerTitle;
  } else {
    hideElement(elementTitle);
  }
}

function setAddress(elementAddress,offerAddress) {
  if (offerAddress !== '') {
    elementAddress.textContent = offerAddress;
  } else {
    hideElement(elementAddress);
  }
}

function setPrice(elementPrice, offerPrice) {
  if (offerPrice !== '') {
    elementPrice.textContent = `${offerPrice} ₽/ночь`;
  } else {
    hideElement(elementPrice);
  }
}

function setType(elementType, offerType) {
  if (offerType !== '') {
    switch (offerType) {
      case 'flat':
        elementType.textContent = typeDictionary[offerType];
        break;
      case 'bungalow':
        elementType.textContent = typeDictionary[offerType];
        break;
      case 'house':
        elementType.textContent = typeDictionary[offerType];
        break;
      case 'palace':
        elementType.textContent = typeDictionary[offerType];
        break;
      case 'hotel':
        elementType.textContent = typeDictionary[offerType];
        break;
    }
  } else {
    hideElement(elementType);
  }
}

function setCapacity(elementCapacity, offerRooms, offerGuests){
  if ((offerRooms !== '') & (offerGuests !== '')) {
    elementCapacity.textContent = `${offerRooms} комнаты для ${offerGuests}`;
  } else {
    hideElement(elementCapacity);
  }
}

function setTime(elementTime, offerCheckin, offerCheckout) {
  if ((offerCheckin !== '') & (offerCheckout !== '')) {
    elementTime.textContent = `Заезд после ${offerCheckin}, выезд до ${offerCheckout}`;
  } else {
    hideElement(elementTime);
  }
}

function setListFeatures (featureContainer, offerFeatures) {
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

function setDescription(elementDescription, offerDescription) {
  if (offerDescription !== '') {
    elementDescription.textContent = offerDescription;
  } else {
    hideElement(elementDescription);
  }
}

function setPhotos(photosList, offerPhotos) {
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

function setAvatar(elementAvatar, authorAvatar) {
  if (authorAvatar !== '') {
    elementAvatar.src = authorAvatar;
  } else {
    hideElement(elementAvatar);
  }
}

data.forEach( ({author, offer}) => {
  const element = template.cloneNode(true);
  setTitle(element.querySelector('.popup__title'),offer.title);
  setAddress(element.querySelector('.popup__text--address'),offer.address);
  setPrice(element.querySelector('.popup__text--price'), offer.price);
  setType(element.querySelector('.popup__type'), offer.type);
  setCapacity(element.querySelector('.popup__text--capacity'), offer.rooms, offer.guests);
  setTime(element.querySelector('.popup__text--time'),offer.checkin, offer.checkout);
  setListFeatures(element.querySelector('.popup__features'), offer.features);
  setDescription(element.querySelector('.popup__description'), offer.description);
  setPhotos(element.querySelector('.popup__photos'), offer.photos);
  setAvatar(element.querySelector('.popup__avatar'), author.avatar);
  listFragment.appendChild(element);
});

listElement.appendChild(listFragment);
