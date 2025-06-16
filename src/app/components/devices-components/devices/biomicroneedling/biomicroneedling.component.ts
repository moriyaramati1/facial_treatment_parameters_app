import { Component } from '@angular/core';
import {DeviceComponent} from 'src/app/components/devices-components/device-component';
import {DeviceNames} from 'src/app/models/devices-names';
import {BioMicroneedlingParameters} from 'src/app/models/devices-parameters';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-biomicroneedling',
  imports: [
    FormsModule
  ],
  templateUrl: './biomicroneedling.component.html',
  styleUrl: './biomicroneedling.component.scss'
})
export class BioMicroneedlingComponent extends DeviceComponent<BioMicroneedlingParameters>{
  public override ngOnInit(): void {
    this.deviceName = DeviceNames.BIOMICRONEEDLING;
    super.ngOnInit();
  }

  public saveParameters(): void{
    const allParameters = {...this.parameters, material: this.material};
    this.treatmentDataService.setProperties(this.deviceName,allParameters);
    console.log('this.parameters',this.parameters);
    const treatmentParametersStr = `\u202B ${this.deviceName}:\n \u200Fסוג: ${this.parameters.type}` + super.updateTreatmetProperties();
    console.log(`${treatmentParametersStr}`);
    this.treatmentDataService.setData(this.deviceName, treatmentParametersStr);
  }

  public initializeParameters(): void{
    this.parameters = {
      type: undefined,
    }
  }

}
