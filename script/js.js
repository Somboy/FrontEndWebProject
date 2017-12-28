"use strict";

function initMap() {
  let leicester = {lat: 52.629311, lng: -1.1397591999999577};
  let dmu = {lat: 52.629311, lng: -1.137836};
  let KimLibrary = {lat: 52.628982, lng: -1.139461};
  let mapDemo = document.getElementById("map");

  // this sets the default location for when the map is first loaded
  let map = new google.maps.Map(mapDemo, {
    zoom: 17,
    center: leicester
  });

  // these set different markers you want to show on your map
  let markerDMU = new google.maps.Marker({
    position: dmu,
    map: map,
    title: 'De Montfort'
  });
  let markerUoL = new google.maps.Marker({
    position: KimLibrary,
    map: map,
    title: 'kimberlin library'
  });
}