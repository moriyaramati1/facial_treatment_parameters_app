import { DeviceNames } from 'src/app/models/devices-names';
import { Type } from '@angular/core';
import { DeviceComponent } from 'src/app/components/devices-components/device-component';

export interface Device {
  image: string,
  name: DeviceNames,
  component: Type<DeviceComponent<any>>
}
