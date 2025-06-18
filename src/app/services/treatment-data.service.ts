import {Injectable, Type} from '@angular/core';
import { DeviceNames } from 'src/app/models/devices-names';
import { DeviceComponent } from 'src/app/components/devices-components/device-component';
import {PostInformationBody} from 'src/app/models/post-request-data';
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
import { EndimedComponent } from 'src/app/components/devices-components/devices/endimed/endimed.component';
import { Device } from 'src/app/models/device-selection';
import { TreatmentReport } from 'src/app/models/treatment-report';

@Injectable({
  providedIn: 'root'
})
export class TreatmentDataService {
  private devicesData: Map<DeviceNames,string> = new Map<DeviceNames, string>();
  private devicesProperties: Map<DeviceNames, object> = new Map<DeviceNames, object>();
  public patientName!: string;
  public userName!: string;
  public selectedDevices: Type<DeviceComponent<any>>[] = [];
  public currentComponentIndex: number = 0;
  public treatmentReport!: TreatmentReport;


  public getProperties(deviceName: DeviceNames) :any | undefined {
    return this.devicesProperties.get(deviceName);
  }

  public getData(): PostInformationBody{
    const { anesthetic, reaction, notes } = this.treatmentReport || {};

    const treatmentReportStr = '\n' +
      (anesthetic ? `\n אלחוש: ${anesthetic}` : '') +
      (reaction ? `\n תגובת העור: ${reaction}` : '') +
      (notes ? `\n הערות: ${notes}` : '');

    return {
      employee:this.userName,
      name: this.patientName,
      date: new Date().toLocaleDateString(),
      data: Array.from(this.devicesData.values()).join('\n\n') + treatmentReportStr
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

  public getDevicesForSelection(){
    const devices: Device[] = [
      {name: DeviceNames.BIOMICRONEEDLING,image: 'assets/images/biomicroneedling.png',component: BioMicroneedlingComponent},
      {name: DeviceNames.FRACTIONALPLASMA,image:'assets/images/plasma-fractioal.png',component: FractionalPlasmaComponent},
      {name: DeviceNames.MICRONEEDLING,image:'assets/images/microideling.png',component: MicroneedlingComponent},

      {name: DeviceNames.PORTIA,image: 'assets/images/poatia.png',component: PortiaComponent},
      {name: DeviceNames.HIFU, image:'assets/images/hifu.png',component: HifuComponent},
      {name: DeviceNames.WISH,image:'assets/images/wish.png',component: WishComponent},

      {name: DeviceNames.SONNEXT,image: 'assets/images/sonnext.png',component: SonnextComponent},
      {name: DeviceNames.GUINOT, image:'assets/images/guinot.png',component: GuinotComponent},
      {name: DeviceNames.RINNOVA,image:'assets/images/renuva.png',component: RinnovaComponent},

      {name: DeviceNames.APOLLO_DUET,image: 'assets/images/apollo-duet.png',component: ApolloDuetComponent},
      {name: DeviceNames.PLASMA,image:'assets/images/plasma.png',component: PlasmaComponent},
      {name: DeviceNames.ENDIMED, image:'assets/images/endimed.png',component: EndimedComponent},

    ];
    return devices;
  }

}
