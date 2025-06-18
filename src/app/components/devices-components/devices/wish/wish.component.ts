import { Component } from '@angular/core';
import {WishParameters} from 'src/app/models/devices-parameters';
import {DeviceNames} from 'src/app/models/devices-names';
import {KeyValuePipe} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {WishHeads, WishCapsules} from 'src/app/models/wish-types';
import {MatOption} from '@angular/material/core';
import {MatFormField} from '@angular/material/input';
import {MatSelect} from '@angular/material/select';
import {DeviceComponent} from 'src/app/components/devices-components/device-component';

@Component({
  selector: 'app-wish',
  imports: [FormsModule, KeyValuePipe, MatOption, MatSelect, MatFormField],
  templateUrl: './wish.component.html',
  styleUrl: './wish.component.scss'
})
export class WishComponent extends DeviceComponent<WishParameters>{
  public wishHeads = WishHeads;
  public wishCapsules = WishCapsules;

  public override ngOnInit(): void {
    this.deviceName = DeviceNames.WISH;
    super.ngOnInit();
  }

  public saveParameters(): void{
    const allParameters = { parameters: this.parameters, material: this.material };
    this.treatmentDataService.setProperties(this.deviceName,allParameters);

    const treatmentParametersStr = `\u202B ${this.deviceName}:\n` +
       ` קפסולה: ${this.parameters.capsule}\n ראשים:` +
      this.parameters.head
        .map(head => `\u202B ${head}`)
        .join(',') + super.updateTreatmentProperties();

    this.treatmentDataService.setData(this.deviceName, treatmentParametersStr);
  }

  public initializeParameters(): void{
    this.parameters = {
      head: [],
      capsule: undefined
    };
  }
}
