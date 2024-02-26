import { Component } from '@angular/core';

import {
	DrawEvents,
	featureGroup,
	FeatureGroup,
	icon,
	latLng,
	tileLayer,
} from 'leaflet';

@Component({
	selector: 'leafletDrawCoreDemo',
	templateUrl: './core-demo.component.html',
})
export class LeafletDrawCoreDemoComponent {
	drawnItems: FeatureGroup = featureGroup();
	options = {
		layers: [
			tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
				maxZoom: 10,
				attribution: '',
			}),
		],
		zoom: 5,
		center: latLng({ lat: 30.40319, lng: -9.52874 }),
	};

	drawOptions: any = {
		position: 'topright',
		draw: {
			marker: {
				icon: icon({
					iconSize: [25, 41],
					iconAnchor: [13, 41],
					iconUrl: 'assets/leaflet/marker-icon.png',
					iconRetinaUrl: 'assets/leaflet/marker-icon-2x.png',
					shadowUrl: 'assets/leaflet/marker-shadow.png',
				}),
			},
		},
		edit: {
			featureGroup: this.drawnItems,
		},
	};

	drawLocal: any = {
		draw: {
			toolbar: {
				buttons: {
					polygon: ' ',
				},
			},
		},
	};

	public onDrawCreated(e: any) {
		// tslint:disable-next-line:no-console
		console.log(' ');

		const layer = (e as DrawEvents.Created).layer;
		this.drawnItems.addLayer(layer);
	}

	public onDrawStart(e: any) {
		// tslint:disable-next-line:no-console
		console.log(' ');
	}
}
