import { Component, OnInit } from '@angular/core';
import { Agent } from '../../models/agent';
import { AgentsService } from '../../components/agents/agents.service';
import { Defaulter } from '../../models/defaulter';
import { DefaultersService } from './defaulters.service';


@Component({
    moduleId: module.id,
    selector: 'defaulters',
    templateUrl: 'defaulters.component.html',
    styleUrls: ['defaulters.component.css']
})
export class DefaultersComponent implements OnInit {
    defaulterList: Defaulter[];
    selectedDefaulter: Defaulter;
    tempDefaulter: Defaulter;
    agentList: Agent[];
    selectedAgent: Agent;
    tempAgent: Agent;

    constructor(private defaultersService: DefaultersService, private agentsService: AgentsService) {
        this.defaulterList =[];
        this.getDefaulter();
    }

    ngOnInit() {}

    getAgents() {}

    getDefaulter() {
        this.defaulterList =this.defaultersService.generateDefaulter();
    }

    onRowSelect(event: any) {
        //this.newCar = false;
        // this.myCar = event.data;
        //this.displayDialog = true;
    }

    paginate(e: any) {
        console.log('working');
    }
    public buttonClicked(e: any): void {
        //this.val1 = 9999.0;
  }

  /*
  import {Component,OnInit} from '@angular/core';
import {Car} from '../domain/car';
import {CarService} from '../service/carservice';
import {Message} from '../common/api';

@Component({
    templateUrl: 'app/showcase/demo/datatable/datatabledemo.html'
})
export class DataTableDemo implements OnInit {

    cars: Car[];

    cols: any[];

    msgs: Message[] = [];

    checkValue: any;

    selectedCars2: any[];

    constructor(private carService: CarService) { 

        this.checkValue = {};

        this.selectedCars2 = [];

    }

    ngOnInit() {
        this.carService.getCarsCustom().then(
        cars => {
            this.cars = cars;
            for (var car of this.cars) {
            console.log(car.vin)
                this.checkValue[car.vin] = false;
            }
        });

        this.cols = [
            {field: 'vin', header: 'Vin'},
            {field: 'year', header: 'Year'},
            {field: 'brand', header: 'Brand'},
            {field: 'color', header: 'Color'}
        ];
    }

    selectCar(selectedCars) {

        console.log(selectedCars)
        console.log(this.selectedCars2)
    }

}

  */
}


