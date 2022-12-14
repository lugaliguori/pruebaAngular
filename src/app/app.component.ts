import { Component } from '@angular/core';
import { circleMarker, geoJSON, GeoJSONOptions, LatLng, LatLngBounds, Layer, Map, MapOptions, tileLayer, TileLayer } from 'leaflet';
import { luminaria } from './model/luminaria';
import { MarkerInformationService } from './services/marker-information.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  public map:Map;

  public mapOptions:MapOptions = {
    zoom: 17,
    zoomControl: false,
    center: [40.395347, -3.694041],
    preferCanvas: true
  };

  public baseLayer:TileLayer;

  public  mapFitBounds:LatLngBounds = new LatLngBounds([
    [37.50547228, -4.22810257],
    [37.70590845000001, -3.98959274]
  ]);

  public constructor(private service: MarkerInformationService)
  {
    
    this.baseLayer = tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      crossOrigin: 'anonymous',
      className: 'OSM',
      maxNativeZoom: 19,
      maxZoom: 22,
      minZoom: 5
    });

  }

  public onMapReady(map:Map):void
  {
    this.map = map;
    this.addLuminairesLayer();
  }

  private async addLuminairesLayer():Promise<void>
  {
    const luminaires = await (await fetch('assets/data/luminarias.geojson')).json();
    const options:GeoJSONOptions = {
      pointToLayer: (feature:GeoJSON.Feature, latLng:LatLng) => circleMarker(latLng),
      style: feature =>  ({
        radius: 8, 
        color: "#333",
        fillColor: "#FFFA4D",
        weight: 1,
        opacity: 1,
        fillOpacity: 1
      }),
      onEachFeature: this.onEachFeature.bind(this)
    };
    geoJSON(luminaires, options).addTo(this.map);
  }

  public clickedElement(event: any){
    this.map.flyTo(event.latlng,18)
  }

  public setData(marker: luminaria){
    this.service.setLuminaria(marker)
  }

  public onEachFeature(feature: GeoJSON.Feature, layer: Layer) {
    layer.on('click', e => {
      e.target.setStyle({
        color: 'blue',
        fillColor: 'blue'
      })
      let marker  = new luminaria(feature)

      this.setData(marker);
    })
    
  }



}
