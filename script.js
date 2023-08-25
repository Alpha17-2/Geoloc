// script.js

let map;

function initMap() {
    map = new Microsoft.Maps.Map(document.getElementById('map'), {
        credentials: 'AnCHimfxgLwemKyuJZYVq0Js4tBrDgI69aue-fYZg2xDvuhljPFFdK6qjNBdvD5U',
        center: new Microsoft.Maps.Location(12.9362, 77.6062), // Bangalore
        zoom: 15
    });


    const userLatitude = 12.9362;
    const userLongitude = 77.6062;
    

    const userLocation = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(userLatitude, userLongitude), {
        color: 'Red'
    });
    map.entities.push(userLocation);

    
}
