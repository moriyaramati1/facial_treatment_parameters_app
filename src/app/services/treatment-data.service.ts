import {Injectable, Type} from '@angular/core';
import { DeviceNames } from 'src/app/models/devices-names';
import { DeviceComponent } from 'src/app/components/devices-components/device-component';
import {PostInformationBody} from 'src/app/models/postRequestData';
import { BioMicroneedlingComponent } from 'src/app/components/devices-components/devices/biomicroneedling/biomicroneedling.component';
import { FractionalPlasmaComponent } from 'src/app/components/devices-components/devices/fractional-plasma/fractional-plasma.component';
import { MicroneedlingComponent } from 'src/app/components/devices-components/devices/microneedling/microneedling.component';
import { PortiaComponent } from 'src/app/components/devices-components/devices/portia/portia.component';
import { HifuComponent } from 'src/app/components/devices-components/devices/hifu/hifu.component';
import { WishComponent } from 'src/app/components/devices-components/devices/wish/wish.component';
import { SonnextComponent } from 'src/app/components/devices-components/devices/sonnext/sonnext.component';
import { GuinotComponent } from 'src/app/components/devices-components/devices/guinot/guinot.component';
import { RinnovaComponent } from 'src/app/components/devices-components/devices/rinnova/rinnova.component';
import { ApolloDuetComponent } from 'src/app/components/devices-components/devices/apollo-duet/apollo-duet.component';
import { PlasmaComponent } from 'src/app/components/devices-components/devices/plasma/plasma.component';
import { AndimedComponent } from 'src/app/components/devices-components/devices/andimed/andimed.component';
import { Device } from 'src/app/models/device-selection';

@Injectable({
  providedIn: 'root'
})
export class TreatmentDataService {
  private selectedDevices: Type<DeviceComponent<any>>[] = [];
  private devicesData: Map<DeviceNames,string> = new Map<DeviceNames, string>();
  private devicesProperties: Map<DeviceNames, object> = new Map<DeviceNames, object>();
  public patientName: string = '';
  public userName: string = '';

  public getProperties(deviceName: DeviceNames) :any | undefined {
    return this.devicesProperties.get(deviceName);
  }

  public getData(): PostInformationBody{
    return {
      employee:this.userName,
      name: this.patientName,
      date: new Date().toLocaleDateString(),
      data:Array.from(this.devicesData.values()).join('\n')
    }
  }

  public setProperties(deviceName: DeviceNames, deviceProperties: object): void {
      this.devicesProperties.set(deviceName, deviceProperties);
  }

  public setData(deviceName: DeviceNames, deviceParsedProperties: string): void {
      this.devicesData.set(deviceName, deviceParsedProperties);
  }

  public updateSelection(deviceName: DeviceNames, deviceComponent: Type<DeviceComponent<any>> ){
    if (this.selectedDevices.includes(deviceComponent)){
      this.selectedDevices = this.selectedDevices.filter(device => device !== deviceComponent);
      this.devicesData.delete(deviceName);
      this.devicesProperties.delete(deviceName);
    }
    else {
      this.selectedDevices.push(deviceComponent);
    }
  }

  public isDeviceSelected(deviceComponent: Type<DeviceComponent<any>>): boolean {
    return this.selectedDevices.some(device => device === deviceComponent);
  }

  public getSelectedDevices():Type<DeviceComponent<any>>[]{
    return this.selectedDevices;
  }

  public getDevicesForSelection(){
    const devices: Device[] = [
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

    ];
    return devices;
  }

}
