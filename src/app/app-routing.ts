import {Routes,RouterModule }   from '@angular/router';

import { GundamDetailComponent } from './components/gundam-detail/gundam-detail.component';
import { GundamHostComponent } from './components/gundam-host/gundam-host.component';   
import { ModuleWithProviders } from '@angular/core';

export const routes: Routes = [
    {
        path:'',
        component:GundamHostComponent
    },{
        path:'detail/:id',
        component:GundamDetailComponent
    }
];
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);