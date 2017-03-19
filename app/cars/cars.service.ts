import { Injectable }       from '@angular/core';
import { Http, Headers }    from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()

export class CarsService {
    constructor(/*private http: Http */) {
        console.log('Cars Service Initialised...');
    }
    sendData() {
        console.log('cars service called');
        
        return 'message from cars service';
    }
}