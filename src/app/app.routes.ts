import { Routes } from '@angular/router';
import { DevicesSelectionComponent } from './components/devices_selection/devices_selection.component';
import { FinalStageComponent } from './components/final-stage/final-stage.component';
import { DevicesLoaderComponent } from './components/devices_components/devices-loader/devices-loader.component';

export const routes: Routes = [
    {
        path:'',
        component: DevicesSelectionComponent,
    },
    {
        path:'devices',
        component: DevicesLoaderComponent,
    },
    {
        path:'final-stage',
        component: FinalStageComponent,
    },
];
