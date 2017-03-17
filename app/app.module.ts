import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import {HttpModule}    from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { AppRouter } from './app.router';
import { Car } from './cars/car';
import { CarComponent } from './components/car.component';

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
  CodeHighlighterModule
} from 'primeng/primeng';
// import { TableDemoComponent } from './components/table/table-demo';
// import { TableSectionComponent } from './components/table-section';

import { AppComponent }  from './app.component';

@NgModule({
  imports: [
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
    CodeHighlighterModule
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
    CarComponent
    // Car
    //TableDemoComponent,
    //TableSectionComponent
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {

 }

