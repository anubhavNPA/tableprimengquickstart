import { Injectable }       from '@angular/core';
import { Http, Headers }    from '@angular/http';
import { Defaulter }        from '../../models/defaulter';
import { Agent }            from '../../models/agent';
import 'rxjs/add/operator/map';


@Injectable()

export class DefaultersService {
    defaulterList: Defaulter[];
    selectedDefaulter: Defaulter;
    tempDefaulter: Defaulter;
    agentList: Agent[];
    selectedAgent: Agent;
    tempAgent: Agent;

    constructor(/*private http: Http */) {
        this.defaulterList = [];
        this.generateDefaulter();
        this.agentList = [];
        this.generateAgent();
        console.log('Defaulters Service Initialised...');
    }
    generateDefaulter():Defaulter[] {
        let defaulter1 = new Defaulter(1, 'Anubhav Singh Gahlowt');
        let defaulter2 = new Defaulter(2, 'Kushal Gahlowt');
        let defaulter3 = new Defaulter(3, 'Prateek Gahlowt');
        let defaulter4 = new Defaulter(4, 'Prashant Gahlowt');
        let defaulter5 = new Defaulter(5, 'Vikas Gahlowt');
        let defaulter6 = new Defaulter(6, 'Pramod Gahlowt');
        let defaulter7 = new Defaulter(7, 'Vinay Gahlowt');
        let defaulter8 = new Defaulter(8, 'Vinod Gahlowt');
        let defaulter9 = new Defaulter(9, 'HK Gahlowt');
        this.defaulterList.push(defaulter1);
        this.defaulterList.push(defaulter2);
        this.defaulterList.push(defaulter3);
        this.defaulterList.push(defaulter4);
        this.defaulterList.push(defaulter5);
        this.defaulterList.push(defaulter6);
        this.defaulterList.push(defaulter7);
        this.defaulterList.push(defaulter8);
        this.defaulterList.push(defaulter9);
        return this.defaulterList;
    }
    generateAgent() {}
    sendData() {
        console.log('Defaulters service called');
        
        return 'message from Defaulters service';
    }
}