import mapbox from 'mapbox-gl';

const markerMaker = (type, coordinates) => {
  let image;
  if (type === 'Activity') {
    image = 'http://i.imgur.com/WbMOfMl.png';
  } else if (type === 'Hotel') {
    image = 'http://i.imgur.com/D9574Cu.png';
  } else if (type === 'Restaurant') {
    image = 'http://i.imgur.com/cqR6pUI.png';
  }

  const newMarker = document.createElement('div');
  newMarker.style.width = '32px';
  newMarker.style.height = '39px';
  newMarker.style.backgroundImage = `url(${image})`;

  return new mapbox.Marker(newMarker).setLngLat(coordinates);
};

export default markerMaker;

// const markerDomEl = document.createElement('div'); // Create a new, detached DIV
// markerDomEl.style.width = '32px';
// markerDomEl.style.height = '39px';
// markerDomEl.style.backgroundImage = 'url(http://i.imgur.com/WbMOfMl.png)';

// new mapboxgl.Marker(markerDomEl).setLngLat([-74.009, 40.705]).addTo(map); // [-87.641, 41.895] for Chicago
