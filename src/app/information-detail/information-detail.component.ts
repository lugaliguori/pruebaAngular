import { Component, OnInit } from '@angular/core';
import { MarkerInformationService } from '../services/marker-information.service';
import { luminaria } from '../model/luminaria';

@Component({
  selector: 'app-information-detail',
  templateUrl: './information-detail.component.html',
  styleUrls: ['./information-detail.component.css']
})
export class InformationDetailComponent implements OnInit {

  public itemSelected: boolean = false;

  public data: luminaria | undefined;

  constructor(private marker: MarkerInformationService) { }

  ngOnInit(): void {
    this.getData();
   

  }

  async getData(){
    this.marker.luminaria.subscribe((lum) =>{
      this.data = lum;
    }) 
  }

}
