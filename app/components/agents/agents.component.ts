import { Component, OnInit } from '@angular/core';
import { Agent } from '../../models/agent';

@Component({
    moduleId: module.id,
    selector: 'agents',
    templateUrl: 'agents.component.html',
    styleUrls: ['agents.component.css']
})

export class AgentsComponent implements OnInit {
    agentList: Agent[];
    selectedagent: Agent;
    cols: any[];
    defaulterAllocated: boolean;

    constructor() {
        this.agentList =[];
        this.generateAgent();
        this.defaulterAllocated = false;
    }

    ngOnInit(){
         if(this.defaulterAllocated) {this.cols = [
                {field: 'id', header: 'ID'},
                {field: 'fullName', header: 'Name'},
                {field: 'defaulter', header: 'DefaulterName'}
                ];
            }
            else {this.cols = [
                {field: 'id', header: 'ID'},
                {field: 'fullName', header: 'Name'},
                //{field: 'color', header: 'Color'}
                ];
            }
    }

    generateAgent() {
        let agent1 = new Agent(1, 'Modi');
        let agent2 = new Agent(2, 'Jaitley');
        let agent3 = new Agent(3, 'Amit Shah');
        
        this.agentList.push(agent1);
        this.agentList.push(agent2);
        this.agentList.push(agent3);
        
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

    allocateDefaulterStatus() {
        this.defaulterAllocated = true;
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


