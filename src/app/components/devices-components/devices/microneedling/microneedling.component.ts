import { Component } from '@angular/core';
import {DeviceComponent} from 'src/app/components/devices-components/device-component';
import {MicroNeedlingParameters} from 'src/app/models/devices-parameters';
import {DeviceNames} from 'src/app/models/devices-names';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-microneedling',
  imports: [
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './microneedling.component.html',
  styleUrl: './microneedling.component.scss'
})
export class MicroneedlingComponent extends DeviceComponent<MicroNeedlingParameters>{

  public override ngOnInit(): void {
    this.deviceName = DeviceNames.MICRONEEDLING;
    super.ngOnInit();
  }

  public saveParameters(): void{
    const allParameters = { parameters: this.parameters, material: this.material };
    this.treatmentDataService.setProperties(this.deviceName,allParameters);

    const treatmentParametersStr = `\u202B ${this.deviceName}:\n עומק: ${this.parameters.depth}`+ super.updateTreatmetProperties();

    this.treatmentDataService.setData(this.deviceName, treatmentParametersStr);
  }

  public initializeParameters(): void{
    this.parameters = {
      depth: undefined
    }
  }
}
