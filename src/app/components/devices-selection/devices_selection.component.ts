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

export interface Device {
  image: string,
  cols: number,
  rows: number,
  name: string
  component: Type<DeviceComponent<any>>
}


@Component({
  selector: 'app-devices-selection',
  imports: [ MatGridListModule ],
  templateUrl: './devices_selection.component.html',
  styleUrl: './devices_selection.component.scss'
})

export class DevicesSelectionComponent {
  public router = inject(Router);
  public treatmentDataService = inject(TreatmentDataService);

  devices: Device[] = [
    {name: 'אנדימד', cols: 2,rows: 1 ,  image: 'https://picsum.photos/id/238/400/300',component: BioMicroneedlingComponent},
    {name: 'אנ   דימד', cols: 2 ,rows: 1 ,image:'https://picsum.photos/id/238/400/300',component: FractionalPlasmaComponent},
    {name: 'אנ   דימד', cols: 2 ,rows: 1 ,image:'https://picsum.photos/id/238/400/300',component: MicroneedlingComponent},

    {name: 'אנדימד', cols: 2,rows: 1 ,  image: 'https://picsum.photos/id/238/400/300',component: PortiaComponent},
    {name: 'אנ   דימד', cols: 2 ,rows: 1 ,image:'https://picsum.photos/id/238/400/300',component: HifuComponent},
    {name: 'אנ   דימד', cols: 2 ,rows: 1 ,image:'https://picsum.photos/id/238/400/300',component: WishComponent},

    {name: 'אנדימד', cols: 2,rows: 1 ,  image: 'https://picsum.photos/id/238/400/300',component: SonnextComponent},
    {name: 'אנ   דימד', cols: 2 ,rows: 1 ,image:'https://picsum.photos/id/238/400/300',component: GuinotComponent},
    {name: 'אנ   דימד', cols: 2 ,rows: 1 ,image:'https://picsum.photos/id/238/400/300',component: RinnovaComponent},

    {name: 'אנדימד', cols: 2,rows: 1 ,  image: 'https://picsum.photos/id/238/400/300',component: ApolloDuetComponent},
    {name: 'אנ   דימד', cols: 2 ,rows: 1 ,image:'https://picsum.photos/id/238/400/300',component: PlasmaComponent},
    {name: 'אנ   דימד', cols: 2 ,rows: 1 ,image:'https://picsum.photos/id/238/400/300',component: AndimedComponent},

  ]
  public moveToDevicesComponent(){
    this.router.navigate(['/devices']);
  }
}
