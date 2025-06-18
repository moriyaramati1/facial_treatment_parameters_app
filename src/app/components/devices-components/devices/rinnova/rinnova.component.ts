import { Component, OnInit } from '@angular/core';
import { RinnovaParameters } from 'src/app/models/devices-parameters';
import { DeviceNames } from 'src/app/models/devices-names';
import { FormsModule } from '@angular/forms';
import {DeviceComponent} from 'src/app/components/devices-components/device-component';

@Component({
  selector: 'app-rinnova',
  imports: [FormsModule],
  templateUrl: './rinnova.component.html',
  styleUrl: './rinnova.component.scss'
})
export class RinnovaComponent extends DeviceComponent<RinnovaParameters> implements OnInit{

  public override ngOnInit(): void {
    this.deviceName = DeviceNames.RINNOVA;
    super.ngOnInit();
  }

  public saveParameters(): void{
    const allParameters = { parameters: this.parameters, material: this.material };
    this.treatmentDataService.setProperties(this.deviceName,allParameters);

    const treatmentParametersStr = ` ${this.deviceName}:\n` +  ` \u202Bתוכנית: ${this.parameters.procedureName}, ערך: ${this.parameters.procedureValue}, צפיפות: ${this.parameters.density} , אנרגיה:${this.parameters.energy}`
    + super.updateTreatmentProperties();

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
