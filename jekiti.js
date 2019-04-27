var jekiti = function(ad, duration) {
  try {
    var adElement = document.querySelector(ad);
    adElement.style.display = 'block';
    setTimeout(function() {
      adElement.style.display = 'none';
    }, duration);
  } catch(error) {    
    var jekitiContainerElement = document.createElement('div');
    jekitiContainerElement.style.left = 0;
    jekitiContainerElement.style.top = 0;
    jekitiContainerElement.style.position = 'fixed';
    jekitiContainerElement.style.height = '100vh'
    jekitiContainerElement.style.width = '100vw'
    jekitiContainerElement.style.background = 'white';
    jekitiContainerElement.style['z-index'] = 9999;
    jekitiContainerElement.innerHTML = ad;
    document.querySelector('body').append(jekitiContainerElement);
    Element.prototype.remove = function() {
      this.parentElement.removeChild(this);
    }
    setTimeout(function() {
      jekitiContainerElement.remove();
    }, duration);
  }
}
