// script.js

let map;

function initMap() {
    map = new Microsoft.Maps.Map(document.getElementById('map'), {
        credentials: 'YOUR_BING_MAPS_API_KEY',
        center: new Microsoft.Maps.Location(40.7128, -74.0060), // New York City
        zoom: 12
    });

    // Simulated user location (latitude and longitude)
    const userLatitude = 40.7128;
    const userLongitude = -74.0060;
    
    // Simulated points of interest
    const pointsOfInterest = [
        { latitude: 40.7128, longitude: -74.0060, name: "Statue of Liberty" },
        { latitude: 40.7589, longitude: -73.9851, name: "Central Park" },
        { latitude: 40.6892, longitude: -74.0445, name: "Brooklyn Bridge" }
        // Add more points of interest here
    ];

    // Add user's location marker
    const userLocation = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(userLatitude, userLongitude), {
        color: 'blue'
    });
    map.entities.push(userLocation);

    // Add points of interest markers
    pointsOfInterest.forEach(point => {
        const poiLocation = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(point.latitude, point.longitude), {
            color: 'red'
        });
        map.entities.push(poiLocation);

        // Add info box to display point name
        const infobox = new Microsoft.Maps.Infobox(poiLocation.getLocation(), {
            title: point.name,
            visible: false
        });
        map.entities.push(infobox);

        // Show infobox on mouseover
        Microsoft.Maps.Events.addHandler(poiLocation, 'mouseover', () => {
            infobox.setOptions({ visible: true });
        });

        // Hide infobox on mouseout
        Microsoft.Maps.Events.addHandler(poiLocation, 'mouseout', () => {
            infobox.setOptions({ visible: false });
        });
    });
}
