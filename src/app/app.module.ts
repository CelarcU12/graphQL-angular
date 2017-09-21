import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ApolloModule } from 'apollo-angular';


import { AppComponent } from './app.component';
import { GraphQlComponent } from './graph-ql/graph-ql.component';

import {ApolloClient, createNetworkInterface } from 'apollo-client';
import {SubscriptionClient, addGraphQLSubscriptions} from 'subscriptions-transport-ws/dist/client';


import {provideClient } from './client';
import { OneViewComponent } from './one-view/one-view.component';
import { StationComponent } from './station/station.component';

import {Routes, RouterModule} from '@angular/router';
const routes: Routes =[
  {path:'', component: GraphQlComponent},
  {path:':id1/:id2', component: StationComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    GraphQlComponent,
    OneViewComponent,
    StationComponent
  ],
  imports: [
    ApolloModule.forRoot(provideClient),
    RouterModule.forRoot(routes),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
