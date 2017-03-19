import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { Car } from './cars/car';
import { CarComponent } from './components/car.component';
import { DefaultersComponent } from './components/defaulters/defaulters.component';
import { AgentsComponent } from './components/agents/agents.component';

const appRoutes: Routes = [
			{path: 'demo', component: AppComponent},
            {path: '', component: DefaultersComponent},
            {path: 'cars', component: CarComponent},
            {path: 'agents', component: AgentsComponent},
            {path: 'defaulters', component: DefaultersComponent}
        ];
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

