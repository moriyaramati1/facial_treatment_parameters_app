import {Injectable, Type} from '@angular/core';
import { DeviceNames } from 'src/app/models/devices-names';
import {DeviceComponent} from 'src/app/components/devices-components/device-component';

@Injectable({
  providedIn: 'root'
})
export class TreatmentDataService {
  private selectedDevices: Type<DeviceComponent<any>>[] = [];
  private devicesData: Map<DeviceNames,string> = new Map<DeviceNames, string>();
  private devicesProperties: Map<DeviceNames, object> = new Map<DeviceNames, object>();


  public getProperties(deviceName: DeviceNames) :any | undefined {

    return this.devicesProperties.get(deviceName);
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

  public getSelectedDevices():Type<DeviceComponent<any>>[]{
    return this.selectedDevices;
  }

}
