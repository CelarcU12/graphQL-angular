import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import {Apollo} from 'apollo-angular';

import { view } from '../graph-ql/graph-ql.module';
import { station } from '../one-view/one-view.module';

@Component({
  selector: 'app-station',
  templateUrl: './station.component.html',
  styleUrls: ['./station.component.css']
})
export class StationComponent implements OnInit {
  public id:any; id2:any;
  public view: any;
  public data:any;

  constructor(private router:Router,
              private apollo: Apollo) { }

  ngOnInit() {
    this.id = this.router.url.split('/')[1];
    this.id2 = this.router.url.split('/')[2];
  
  this.apollo.watchQuery({
    query: view
  })
  .subscribe( data => {
    console.log(data['data']['view2'])
    this.view = data['data']['view2']
    .find(
      d => {return d.id === +this.id}
    )
    .position_set.find( p => {
      return p.id === +this.id2
    })
  });

  this.apollo.watchQuery({
    query: station
  })
  .subscribe( data => {
    console.log(data)
    this.data = data['data']['stationData']
  })

}
}