import { Component, OnInit } from '@angular/core';
import { MarkerInformationService } from '../services/marker-information.service';
import { luminaria } from '../model/luminaria';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-information-detail',
  templateUrl: './information-detail.component.html',
  styleUrls: ['./information-detail.component.css']
})
export class InformationDetailComponent implements OnInit {

  public itemSelected: boolean = false;

  public data: luminaria | undefined;

  private subscription: any;

  constructor(private marker: MarkerInformationService) { }

  ngOnInit(): void {
    this.getData();
   

  }

  async getData(){
    this.subscription = this.marker.luminaria.subscribe((lum) =>{
      this.data = lum;
    }) 
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    
  }

}
