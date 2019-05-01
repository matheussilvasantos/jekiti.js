'use strict';

var jekiti = function jekiti(ad) {
  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;

  try {
    var adElement = document.querySelector(ad);
    adElement.style.display = 'block';
    setTimeout(function () {
      adElement.style.display = 'none';
    }, duration);
  } catch (error) {
    var jekitiContainerElement = document.createElement('div');
    jekitiContainerElement.style.left = 0;
    jekitiContainerElement.style.top = 0;
    jekitiContainerElement.style.position = 'fixed';
    jekitiContainerElement.style.height = '100vh';
    jekitiContainerElement.style.width = '100vw';
    jekitiContainerElement.style.background = 'white';
    jekitiContainerElement.style['z-index'] = 9999;
    jekitiContainerElement.innerHTML = ad;
    document.querySelector('body').append(jekitiContainerElement);
    Element.prototype.remove = function () {
      this.parentElement.removeChild(this);
    };
    setTimeout(function () {
      jekitiContainerElement.remove();
    }, duration);
  }
};
