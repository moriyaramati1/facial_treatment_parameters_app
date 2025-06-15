import { Component } from '@angular/core';
import {HifuParameters} from 'src/app/models/devices-parameters';
import {DeviceNames} from 'src/app/models/devices-names';
import {BoosterHandlers, HifuHandles} from 'src/app/models/handles';
import {KeyValuePipe} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormField} from '@angular/material/input';
import {MatOption} from '@angular/material/core';
import {MatSelect} from '@angular/material/select';
import {DeviceComponent} from 'src/app/components/devices-components/device-component';

@Component({
  selector: 'app-hifu',
  imports: [
    FormsModule,
    KeyValuePipe,
    ReactiveFormsModule,
    MatFormField,
    MatOption,
    MatSelect
  ],
  templateUrl: './hifu.component.html',
  styleUrl: './hifu.component.scss'
})
export class HifuComponent extends DeviceComponent<HifuParameters>{
  public hifuHandles = HifuHandles;
  public materialRequired: boolean = false;

  public override ngOnInit(): void {
    this.deviceName = DeviceNames.HIFU;
    super.ngOnInit();
  }

  public saveParameters(): void{
    const allParameters = {...this.parameters, material: this.material};
    this.treatmentDataService.setProperties(this.deviceName,allParameters);
    const treatmentParametersStr = `\u202B ${this.deviceName}:\n ידיות:` +
      this.parameters.handles
        .map(handle => `\u202B ${handle}`)
        .join(',') +
    `\n עוצמה: ${this.parameters.intensity} ` + super.updateTreatmetProperties()
    console.log(`${treatmentParametersStr}`);
    this.treatmentDataService.setData(this.deviceName, treatmentParametersStr);
  }

  public initializeParameters(): void{
    this.parameters = {
      handles: [],
      intensity: undefined,
    };
  }

  public computeRequired(): void {
    this.materialRequired = this.parameters.handles.some((handle) => BoosterHandlers.includes(handle));
    console.log('computeRequired',this.materialRequired)

  }

}
