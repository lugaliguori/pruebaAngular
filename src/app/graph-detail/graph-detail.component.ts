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
      select: ['tipo_soporte',[Validators.required]]
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
    let count  = await this.updateData(this.data, this.selectForm.value.select);
    this.chartOptions = {
      series: [{
        data: count,
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
    let count = await this.updateData(this.data, this.selectForm.value.select);
    this.chartOptions = {
      title: {
        text: this.selectForm.value.select
      },
      series: [{
        data: count,
        type: 'pie'
      }]
    }
    this.update = true;
  }

  async updateData(data: any, value: string){
    let count: any = {};
    let finalData = [];
    data.features.forEach( (element: any) => {
      count[element.properties[value.toString()]] = (count[element.properties[value.toString()]] || 0) +1
      })
    for (let key in count){
      finalData.push({name: key, y: count[key]})
    }
    return finalData;
    }


}
