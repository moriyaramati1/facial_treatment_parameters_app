import { Component, OnInit } from '@angular/core';
import { RinnovaParameters } from 'src/app/models/devices-parameters';
import { DeviceNames } from 'src/app/models/devices-names';
import { FormsModule } from '@angular/forms';
import {DeviceComponent} from 'src/app/components/devices_components/device-component';

@Component({
  selector: 'app-rinnova',
  imports: [FormsModule],
  templateUrl: './rinnova.component.html',
  styleUrl: './rinnova.component.scss'
})
export class RinnovaComponent extends DeviceComponent<RinnovaParameters> implements OnInit{

  public ngOnInit(): void {
    this.deviceName = DeviceNames.RINNOVA;
      this.parameters = this.treatmentDataService.getProperties(this.deviceName);
      if (!this.parameters) {
        this.initializeParameters();
      }
  }

  public saveParameters(): void{
      this.treatmentDataService.setProperties(this.deviceName, this.parameters);
      const treatmentParametersStr = `${this.deviceName}:\n` +  `\u202B תוכנית: ${this.parameters.procedureName}, ערך: ${this.parameters.procedureValue},
      צפיפות: ${this.parameters.density} , אנרגיה:${this.parameters.energy} `
      + super.updateTreatmetProperties();
      console.log(treatmentParametersStr)
      this.treatmentDataService.setData(this.deviceName, treatmentParametersStr);

  }

  public initializeParameters(): void{
    this.parameters = {
      procedureName: 'פיצפטריק',
      procedureValue: undefined,
      density: undefined,
      energy: undefined,
    }
  }
}
