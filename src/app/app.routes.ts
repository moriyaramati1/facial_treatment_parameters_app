import { Routes } from '@angular/router';
import { DevicesSelectionComponent } from 'src/app/components/devices-selection/devices_selection.component';
import { FinalStageComponent } from './components/final-stage/final-stage.component';
import {DevicesLoaderComponent} from 'src/app/components/devices-components/devices-loader/devices-loader.component';

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
