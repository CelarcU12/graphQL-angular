import { Component, OnInit, Input } from '@angular/core';

import {Apollo} from 'apollo-angular';

import { station } from './one-view.module';
import {Router} from '@angular/router';

@Component({
  selector: 'app-one-view',
  templateUrl: './one-view.component.html',
  styleUrls: ['./one-view.component.css']
})
export class OneViewComponent implements OnInit {
  @Input() 
  public station: any;

  @Input()
  public id1: any;

  public clickedStation: any;
  public stationData: any;

  constructor( private apollo: Apollo, private router: Router) { }

  ngOnInit() {
    console.log(this.id1)
    this.apollo.watchQuery({
      query: station
    }).subscribe(data => {
      this.stationData = data["data"]["stationData"]
    })
  }

  public onStationClick(){
    this.router.navigate([this.id1 ,this.station.id])
  }

}
