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

  public addDevice(device: Type<DeviceComponent<any>>){
    this.selectedDevices.push(device);
    console.log('this.selectedDevices',this.selectedDevices)
    // todo: if unselection then clear data

  }

  public getSelectedDevices():Type<DeviceComponent<any>>[]{
    return this.selectedDevices;
  }

}
