import { Component, OnInit } from '@angular/core';
import { tileLayer, latLng, Map } from 'leaflet';


interface Marker {
    lat: number;
    lng: number;
    label?: string;
    draggable?: boolean;
}
@Component({
    selector: 'app-maps',
    templateUrl: './maps.component.html',
    styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {

    private options = {
        layers: [
            tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
                { maxZoom: 18, attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>' })
        ],
        zoom: 15,
        center: latLng(36.8065, 10.1815)
    };

    constructor() { }

    ngOnInit() {
    }

    onMapReady(map: Map) {
        setTimeout(() => {
            map.invalidateSize();
        }, 0);
    }

}
