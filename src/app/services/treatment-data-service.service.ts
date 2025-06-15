import { Injectable } from '@angular/core';
import { DeviceNames } from 'src/app/models/devices-names';

@Injectable({
  providedIn: 'root'
})
export class TreatmentDataServiceService {
  private devicesData: Map<DeviceNames,string> = new Map<DeviceNames, string>();
  private devicesProperties: Map<DeviceNames,object> = new Map<DeviceNames, object>();


  public getProperties(deviceName: DeviceNames) :any | undefined {

    return this.devicesProperties.get(deviceName);
  }

  public setProperties(deviceName: DeviceNames, deviceProperties: object): void {
      this.devicesProperties.set(deviceName, deviceProperties);
  }

  public setData(deviceName: DeviceNames, deviceParsedProperties: string): void {
      this.devicesData.set(deviceName, deviceParsedProperties);
  }

}
