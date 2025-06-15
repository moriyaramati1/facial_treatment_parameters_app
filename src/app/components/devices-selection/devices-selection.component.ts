import {Component, inject, Type} from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import {Router} from '@angular/router';
import {TreatmentDataService} from 'src/app/services/treatment-data.service';
import {
  BioMicroneedlingComponent
} from 'src/app/components/devices-components/devices/biomicroneedling/biomicroneedling.component';
import {DeviceComponent} from 'src/app/components/devices-components/device-component';
import {
  FractionalPlasmaComponent
} from 'src/app/components/devices-components/devices/fractional-plasma/fractional-plasma.component';
import {
  MicroneedlingComponent
} from 'src/app/components/devices-components/devices/microneedling/microneedling.component';
import {PortiaComponent} from 'src/app/components/devices-components/devices/portia/portia.component';
import {WishComponent} from 'src/app/components/devices-components/devices/wish/wish.component';
import {HifuComponent} from 'src/app/components/devices-components/devices/hifu/hifu.component';
import {SonnextComponent} from 'src/app/components/devices-components/devices/sonnext/sonnext.component';
import {GuinotComponent} from 'src/app/components/devices-components/devices/guinot/guinot.component';
import {RinnovaComponent} from 'src/app/components/devices-components/devices/rinnova/rinnova.component';
import {ApolloDuetComponent} from 'src/app/components/devices-components/devices/apollo-duet/apollo-duet.component';
import {PlasmaComponent} from 'src/app/components/devices-components/devices/plasma/plasma.component';
import {AndimedComponent} from 'src/app/components/devices-components/devices/andimed/andimed.component';
import {DeviceNames} from 'src/app/models/devices-names';

export interface Device {
  image: string,
  cols: number,
  rows: number,
  name: DeviceNames,
  component: Type<DeviceComponent<any>>
}

@Component({
  selector: 'app-devices-selection',
  imports: [ MatGridListModule ],
  templateUrl: './devices-selection.component.html',
  styleUrl: './devices-selection.component.scss'
})

export class DevicesSelectionComponent {
  public router = inject(Router);
  public treatmentDataService = inject(TreatmentDataService);
  devices: Device[] = [
    {name: DeviceNames.BIOMICRONEEDLING, cols: 2,rows: 1 ,  image: 'https://picsum.photos/id/238/400/300',component: BioMicroneedlingComponent},
    {name: DeviceNames.FRACTIONALPLASMA, cols: 2 ,rows: 1 ,image:'https://picsum.photos/id/238/400/300',component: FractionalPlasmaComponent},
    {name: DeviceNames.MICRONEEDLING, cols: 2 ,rows: 1 ,image:'https://picsum.photos/id/238/400/300',component: MicroneedlingComponent},

    {name: DeviceNames.PORTIA, cols: 2,rows: 1 ,  image: 'https://picsum.photos/id/238/400/300',component: PortiaComponent},
    {name: DeviceNames.HIFU, cols: 2 ,rows: 1 ,image:'https://picsum.photos/id/238/400/300',component: HifuComponent},
    {name: DeviceNames.WISH, cols: 2 ,rows: 1 ,image:'https://picsum.photos/id/238/400/300',component: WishComponent},

    {name: DeviceNames.SONNEXT, cols: 2,rows: 1 ,  image: 'https://picsum.photos/id/238/400/300',component: SonnextComponent},
    {name: DeviceNames.GUINOT, cols: 2 ,rows: 1 ,image:'https://picsum.photos/id/238/400/300',component: GuinotComponent},
    {name: DeviceNames.RINNOVA, cols: 2 ,rows: 1 ,image:'https://picsum.photos/id/238/400/300',component: RinnovaComponent},

    {name: DeviceNames.APOLLO_DUET, cols: 2,rows: 1 ,  image: 'https://picsum.photos/id/238/400/300',component: ApolloDuetComponent},
    {name: DeviceNames.PLASMA, cols: 2 ,rows: 1 ,image:'https://picsum.photos/id/238/400/300',component: PlasmaComponent},
    {name: DeviceNames.ANDIMED, cols: 2 ,rows: 1 ,image:'https://picsum.photos/id/238/400/300',component: AndimedComponent},

  ]
  public moveToDevicesComponent(){
    this.router.navigate(['/devices']);
  }
}
