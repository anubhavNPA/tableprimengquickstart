import { Component } from '@angular/core';
import { Defaulter } from './defaulter';

export class Agent {
    id: Number;
    fullName: String;
    defaulters: Defaulter[];
    constructor( id: Number, fullName: string) {
        this.id = id;
        this.fullName = fullName;
    }
    allocateDefaulter(defaulter: Defaulter) {
        this.defaulters.push(defaulter);
    }
}
