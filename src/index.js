console.log('HI!!!!!!!!!!!');

import mapboxgl from 'mapbox-gl';
import markerMaker from './marker';

mapboxgl.accessToken =
  'pk.eyJ1IjoiYWtvcGVsbCIsImEiOiJja2tlOGxwZXQwMnNqMnBuZzlqaXQwMmEwIn0._KlmHz79iqcGc5CQRjC0-Q';
const map = new mapboxgl.Map({
  container: 'map',
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: 'mapbox://styles/mapbox/streets-v11', // mapbox has lots of different map styles available.
});

const markerDomEl = document.createElement('div'); // Create a new, detached DIV
markerDomEl.style.width = '32px';
markerDomEl.style.height = '39px';
markerDomEl.style.backgroundImage = 'url(http://i.imgur.com/WbMOfMl.png)';

new mapboxgl.Marker(markerDomEl).setLngLat([-74.009, 40.705]).addTo(map); // [-87.641, 41.895] for Chicago

const marker = markerMaker('Restaurant', [-74.009151, 40.705086]);

marker.addTo(map);
