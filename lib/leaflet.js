const mymap = L.map('mymap').setView([51.505, -0.09], 13);

//const TOKEN = 'd25b86f5d99c05' ; LocationIQ access token'

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mymap);

L.control.geocoder(ACCESS_TOKEN).addTo(mymap);