import { Component } from '@angular/core';

export class Car {
    vin: number;
    year: number;
    brand: string;
    color: string;

    constructor(vintage: number, yr: number,
    brand: string, color: string) {
        this.vin = vintage;
        this.year = yr;
        this.brand = brand;
        this.color = color;
    }
}
