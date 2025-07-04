import { Component, OnInit } from '@angular/core';
import {DeviceNames} from 'src/app/models/devices-names';
import {SonnextParameters} from 'src/app/models/devices-parameters';
import {FormsModule} from '@angular/forms';
import {DeviceComponent} from 'src/app/components/devices-components/device-component';
import {MatFormField} from '@angular/material/input';
import {MatOption} from '@angular/material/core';
import {MatSelect} from '@angular/material/select';

@Component({
  selector: 'app-sonnext',
  imports: [FormsModule, MatFormField, MatOption, MatSelect],
  templateUrl: './sonnext.component.html',
  styleUrl: './sonnext.component.scss'
})
export class SonnextComponent extends DeviceComponent<SonnextParameters> implements OnInit {

  public override ngOnInit(): void {
    this.deviceName = DeviceNames.SONNEXT;
    super.ngOnInit();
  }

  public saveParameters(): void{
    const allParameters = { parameters: this.parameters, material: this.material };
    this.treatmentDataService.setProperties(this.deviceName,allParameters);

    const treatmentParametersStr = `\u202B ${this.deviceName}:\n` +
      `\u202B עצימות: ${this.parameters.intensity}, אורך גל: ${this.parameters.wave}, מהירות: ${this.parameters.velocity}`
      + super.updateTreatmentProperties();

    this.treatmentDataService.setData(this.deviceName, treatmentParametersStr);

  }

  public initializeParameters(): void{
    this.parameters = {
      intensity: undefined,
      wave: undefined,
      velocity: undefined
    }
  }

}
