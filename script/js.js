"use strict";

function initMap() {
  let leicester = {lat: 52.629311, lng: -1.1397591999999577};
  let GH = {lat: 52.629434, lng: -1.137825};
  let QB = {lat: 52.628950, lng: -1.140277};
  let BI = {lat: 52.629645, lng: -1.143200};
  let KL = {lat: 52.628982, lng: -1.139461};

  let mapDemo = document.getElementById("map");

  // this sets the default location for when the map is first loaded
  let map = new google.maps.Map(mapDemo, {
    zoom: 17,
    center: leicester
  });

  // these set different markers you want to show on your map
  let GatewayHouse = new google.maps.Marker({
    position: GH,
    map: map,
    title: 'Gateway house'
  });
  
   let QueensBuilding = new google.maps.Marker({
    position: QB,
    map: map,
    title: 'Queens building'
  });
  
   let BedeIsland = new google.maps.Marker({
    position: BI,
    map: map,
    title: 'Bede island'
  });
  
  let markerUoL = new google.maps.Marker({
    position: KL,
    map: map,
    title: 'kimberlin library'
  });
}