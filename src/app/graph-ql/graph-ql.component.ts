import { Component, OnInit } from '@angular/core';

import {Apollo} from 'apollo-angular';

import { viewsName, viewsNameAndId, view } from './graph-ql.module';
import {Subscription} from 'rxjs/Subscription';


@Component({
  selector: 'app-graph-ql',
  templateUrl: './graph-ql.component.html',
  styleUrls: ['./graph-ql.component.css']
})
export class GraphQlComponent implements OnInit {
  public views: any;
  public viewsSub: Subscription;
  public viewsNameAndId:any;
  public clickedView: any;
  public view2:any;
  public clickedPositionSet: any;
  public id: any;

  constructor(
      private apollo: Apollo
  ) { }

  ngOnInit() {
    console.log(this.views)
    this.viewsSub = this.apollo.watchQuery({
      query: viewsName
    }).subscribe( data => {
      this.views = data['data']['views']
      console.log(data['data']['views'])
    })

    this.apollo.watchQuery({
      query: viewsNameAndId
    })
    .subscribe( data =>{
      this.viewsNameAndId = data['data']['views']
    })

    this.apollo.watchQuery({
      query: view
    })
    .subscribe( d => { 
     
      this.view2 = d['data']['view2']})
    
  }

  public onViewClick(view){
    this.clickedView=view.name +' --> id:'+ view.id
    this.id = view.id
    this.clickedPositionSet = view.position_set
    console.log(this.clickedPositionSet)
  }

}
