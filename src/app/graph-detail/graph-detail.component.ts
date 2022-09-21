import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-graph-detail',
  templateUrl: './graph-detail.component.html',
  styleUrls: ['./graph-detail.component.css']
})
export class GraphDetailComponent implements OnInit {

  public data :any | undefined;

  Highcharts: typeof Highcharts = Highcharts; // required
  chartConstructor: string = 'chart'; // optional string, defaults to 'chart'
  chartOptions: Highcharts.Options = { 
  }; // required
  update = false;
  public selectForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.selectForm = formBuilder.group({
      select: ['Tipo Soporte',[Validators.required]]
    })
   }

  ngOnInit(): void {
   this.loadData();
  }

   get select(){
    return this.selectForm.get('select');
  }

  async loadData(){
    this.data = await (await fetch('assets/data/luminarias.geojson')).json();
    console.log(this.data);
    this.chartOptions = {
      series: [{
        data: [1, 2, 3],
        type: 'pie'
      }],
      title: {
        text: this.selectForm.value.select
      },
      subtitle: {
        text: `Cantidad de luminarias: ${this.data.features.length}`
      }  
    }
  }

  async updateChart(){
    this.chartOptions.title = {
     text: this.selectForm.value.select
    }
    this.update = true;
  }

  
}
