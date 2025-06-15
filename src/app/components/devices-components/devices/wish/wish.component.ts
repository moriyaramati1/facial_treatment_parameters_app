import { Component } from '@angular/core';
import {DeviceComponent} from 'src/app/components/devices_components/device-component';
import {WishParameters} from 'src/app/models/devices-parameters';
import {DeviceNames} from 'src/app/models/devices-names';
import {KeyValuePipe} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {WishHeads, WishCapsules} from 'src/app/models/wish-types';
import {MatOption} from '@angular/material/core';
import {MatFormField} from '@angular/material/input';
import {MatSelect} from '@angular/material/select';

@Component({
  selector: 'app-wish',
  imports: [FormsModule, KeyValuePipe, MatOption, MatFormField, MatSelect],
  templateUrl: './wish.component.html',
  styleUrl: './wish.component.scss'
})
export class WishComponent extends DeviceComponent<WishParameters>{
  public wishHeads = WishHeads;
  public wishCapsules = WishCapsules;

  public ngOnInit(): void {
    this.deviceName = DeviceNames.WISH;
    this.parameters = this.treatmentDataService.getProperties(this.deviceName);
    if (!this.parameters) {
      this.initializeParameters();
    }
  }

  public saveParameters(): void{
    this.treatmentDataService.setProperties(this.deviceName, this.parameters);
    const treatmentParametersStr = `\u202B ${this.deviceName}:\n` +
      `קפסולה: ${this.parameters.capsule}\n ראשים:` +
      this.parameters.head
        .map(head => `\u202B ${head}`)
        .join(',') + super.updateTreatmetProperties();
    console.log(`${treatmentParametersStr}`);
    this.treatmentDataService.setData(this.deviceName, treatmentParametersStr);
  }

  public initializeParameters(): void{
    this.parameters = {
      head: [],
      capsule: undefined
    };
  }
}
