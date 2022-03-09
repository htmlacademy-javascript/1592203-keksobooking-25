import {arrayCards} from './data.js';

const similarListElement = document.querySelector('#map-canvas');
const similarTemplatePopup = document.querySelector('#card').content.querySelector('.popup');
const similarPopups = arrayCards();
const similarListFragment = document.createDocumentFragment();

similarPopups.forEach( ({author, offer}) => {
  const popupElement = similarTemplatePopup.cloneNode(true);
  if (offer.title !== '') {
    popupElement.querySelector('.popup__title').textContent = offer.title;
  } else {
    popupElement.querySelector('.popup__title').style.display = 'none';
  }
  if (offer.address !== '') {
    popupElement.querySelector('.popup__text--address').textContent = offer.address;
  } else {
    popupElement.querySelector('.popup__text--address').style.display = 'none';
  }
  if (offer.price !== '') {
    popupElement.querySelector('.popup__text--price').textContent = `${offer.price} ₽/ночь`;
  } else {
    popupElement.querySelector('.popup__text--price').style.display = 'none';
  }
  if (offer.type !== '') {
    switch (offer.type) {
      case 'flat':
        popupElement.querySelector('.popup__type').textContent = 'Квартира';
        break;
      case 'bungalow':
        popupElement.querySelector('.popup__type').textContent = 'Бунгало';
        break;
      case 'house':
        popupElement.querySelector('.popup__type').textContent = 'Дом';
        break;
      case 'palace':
        popupElement.querySelector('.popup__type').textContent = 'Дворец';
        break;
      case 'hotel':
        popupElement.querySelector('.popup__type').textContent = 'Отель';
        break;
    }
  } else {
    popupElement.querySelector('.popup__type').style.display = 'none';
  }
  if ((offer.rooms !== '') || (offer.guests !== '')) {
    popupElement.querySelector('.popup__text--capacity').textContent = `${offer.rooms} комнаты для ${offer.guests}`;
  } else {
    popupElement.querySelector('.popup__text--capacity').style.display = 'none';
  }
  if ((offer.checkin !== '') || (offer.checkout !== '')) {
    popupElement.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
  } else {
    popupElement.querySelector('.popup__text--time').style.display = 'none';
  }
  if (offer.features.length !== 0) {
    const featureContainer = popupElement.querySelector('.popup__features');
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
    popupElement.querySelector('.popup__features').style.display = 'none';
  }
  if (offer.description !== '') {
    popupElement.querySelector('.popup__description').textContent = offer.description;
  } else {
    popupElement.querySelector('.popup__description').style.display = 'none';
  }
  if (offer.photos.length !== 0) {
    const popupPhotosList = popupElement.querySelector('.popup__photos');
    const templatePhoto = popupElement.querySelector('.popup__photo');
    popupPhotosList.innerHTML = '';
    offer.photos.forEach((photo) => {
      const photoElement = templatePhoto.cloneNode(true);
      photoElement.src = photo;
      popupPhotosList.appendChild(photoElement);
    });
  } else {
    popupElement.querySelector('.popup__photos').style.display = 'none';
  }

  if (author.avatar !== '') {
    popupElement.querySelector('.popup__avatar').src = author.avatar;
  } else {
    popupElement.querySelector('.popup__avatar').style.display = 'none';
  }

  similarListFragment.appendChild(popupElement);
});

similarListElement.appendChild(similarListFragment);
