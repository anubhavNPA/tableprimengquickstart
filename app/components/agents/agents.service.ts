import { Injectable }       from '@angular/core';
import { Http, Headers }    from '@angular/http';
import { Defaulter }        from '../../models/defaulter';
import 'rxjs/add/operator/map';


@Injectable()

export class AgentsService {
    allocatedDefaulter: Defaulter;
    allocatedDefaulterList: Defaulter[];
    constructor(/*private http: Http */) {
        this.allocatedDefaulterList =[];
        console.log('Agents Service Initialised...');
    }
    sendData() {
        console.log('Agents service called');
        
        return 'message from Agents service';
    }
}