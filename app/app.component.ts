import { Component } from '@angular/core';
import { Car } from './cars/car';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html'
})
export class AppComponent {
    public displayDialog: boolean;
    public newCar: boolean;
    public selectedCar: Car;
    public myCar: Car;
    public cars: String[];
    public car: String;
    public myCollection: Car[];
    public sum: number;
    // for sliders
    public val1: number;
    public val2: number;
    public val3: number;
    public val4: number;
    public val5: number = 50;

    public rangeValues: number[] = [20, 80];
    showDialogToAdd() {
        this.newCar = true;
        this.car = 'tata';
        this.displayDialog = true;
    }
    onRowSelect(event: any) {
        this.newCar = false;
        // this.myCar = event.data;
        this.displayDialog = true;
    }
    sampleForEachLoop(): number {
        this.sum = 0.0;
        let summation = 0.0;
        this.myCollection.forEach((item) => summation = ( summation + item.vin + item.year));
        //this.cases.forEach((item) => totalBalance = (totalBalance + item.balance));
        this.sum = summation;
        return this.sum;
    }
    public buttonClicked(e: any): void {
        this.val1 = 9999.0;
  }
    /*
    cloneCar(c: Car): Car {
        let a_car = new Car();
        for(let prop in c) {
            a_car[prop] = c[prop];
        }
        return car;
    }
    */

    constructor() {
        this.car = 'mahindra';
        this.cars = ['AB','BC','CD'];
        this.cars[1] = 'fiat';
        this.cars[2] = 'ford';
        this.cars[0] = 'ferrari';
        this.myCar = new Car (1977, 1998, 'ferrari', 'red');
        this.myCollection = [ 
            new Car (1978, 1999, 'ford', 'yellow'),
            new Car (1999, 2010, 'maserati', 'blue'),
            new Car (2010, 2016, 'aston martin', 'silver'),
            new Car (2010, 2016, 'lamborghini', 'black')
        ];
        // this.myCollection[1] = this.mycar;
    }
}


