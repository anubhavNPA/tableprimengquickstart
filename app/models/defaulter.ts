import { Component } from '@angular/core';

export class Defaulter {
    id: Number;
    fullName: String;
    constructor( id: Number, fullName: string) {
        this.id = id;
        this.fullName = fullName;
    }
}
