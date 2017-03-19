import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import {HttpModule}    from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { routing, appRoutingProviders } from './app.router';


// Valor SOftware Modules
import { PaginationModule } from 'ng2-bootstrap/ng2-bootstrap';
import { TabsModule } from 'ng2-bootstrap/ng2-bootstrap';
import { Ng2TableModule } from 'ng2-table/components/ng-table-module';

// Primeng Modules
import {
  InputTextModule,
  DataTableModule,
  ButtonModule,
  DialogModule,
  SliderModule,
  TabViewModule,
  CodeHighlighterModule,
  PaginatorModule
} from 'primeng/primeng';
// import { TableDemoComponent } from './components/table/table-demo';
// import { TableSectionComponent } from './components/table-section';

import { AppComponent }  from './app.component';
import { Car } from './cars/car';
import { CarComponent } from './components/car.component';
import { AgentsComponent } from './components/agents/agents.component';
import { DefaultersComponent } from './components/defaulters/defaulters.component';
//Services
import { CarsService } from './cars/cars.service';
import { AgentsService } from './components/agents/agents.service';
import { DefaultersService } from './components/defaulters/defaulters.service';

@NgModule({
  imports: [
    routing,
    BrowserModule,
    FormsModule,
    CommonModule,
    HttpModule,
    InputTextModule,
    DataTableModule,
    ButtonModule,
    DialogModule,
    SliderModule,
    TabViewModule,
    CodeHighlighterModule,
    PaginatorModule
    /*
    FormsModule,
    Ng2TableModule,
    PaginationModule,
    TabsModule,
    CommonModule
    */
  ],
  declarations: [
    AppComponent,
    CarComponent,
    AgentsComponent,
    DefaultersComponent,
    //Car
    //TableDemoComponent,
    //TableSectionComponent
  ],
  providers: [appRoutingProviders,CarsService, AgentsService, DefaultersService],
  bootstrap: [ AppComponent ]
})
export class AppModule {

 }

