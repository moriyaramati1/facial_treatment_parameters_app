import { Component, OnInit } from '@angular/core';
import {DeviceComponent} from 'src/app/components/devices_components/device-component';
import {DeviceNames} from 'src/app/models/devices-names';
import {SonnextParameters} from 'src/app/models/devices-parameters';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-sonnext',
  imports: [FormsModule],
  templateUrl: './sonnext.component.html',
  styleUrl: './sonnext.component.scss'
})
export class SonnextComponent extends DeviceComponent<SonnextParameters> implements OnInit {

  public ngOnInit(): void {
    this.deviceName = DeviceNames.SONNEXT;
    this.parameters = this.treatmentDataService.getProperties(this.deviceName);
    if (!this.parameters) {
      this.initializeParameters();
    }
  }

  public saveParameters(): void{
    this.treatmentDataService.setProperties(this.deviceName, this.parameters);
    const treatmentParametersStr = `\u202B ${this.deviceName}:\n` +
      `\u202B עצימות: ${this.parameters.intensity}, אורך גל: ${this.parameters.wave}, מהירות: ${this.parameters.velocity}`
      + super.updateTreatmetProperties();
    console.log(treatmentParametersStr)
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
