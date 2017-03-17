import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { Car } from './cars/car';
import { CarComponent } from './components/car.component';

@NgModule({
    imports: [
        RouterModule.forChild([
			{path: 'demo', component: AppComponent},
            {path: '', component: AppComponent},
            {path: 'car', component: CarComponent}
        ])
    ],
    exports: [
        RouterModule
    ]
})

export class AppRouter {}
