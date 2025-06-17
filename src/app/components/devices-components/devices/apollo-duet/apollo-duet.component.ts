import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {DeviceComponent} from 'src/app/components/devices-components/device-component';
import {ApolloDuetParameters} from 'src/app/models/devices-parameters';
import {DeviceNames} from 'src/app/models/devices-names';

@Component({
  selector: 'app-apollo-duet',
  imports: [CommonModule, FormsModule],
  templateUrl: './apollo-duet.component.html',
  styleUrl: './apollo-duet.component.scss'
})
export class ApolloDuetComponent extends DeviceComponent<ApolloDuetParameters[]> implements OnInit{

  public override ngOnInit(): void {
      this.deviceName = DeviceNames.APOLLO_DUET;
      super.ngOnInit();
    }

  public saveParameters(): void{
      const allParameters = { parameters: this.parameters, material: this.material };
      this.treatmentDataService.setProperties(this.deviceName,allParameters);
      const treatmentParametersStr = `\u202B ${this.deviceName}:\n` +
      this.parameters
        .map(procedure => `\u202B תוכנית: ${procedure.procedureName} עוצמה: ${procedure.intensity} טמפרטורה: ${procedure.temperature}`)
        .join('\n') + super.updateTreatmetProperties();
      console.log(treatmentParametersStr)
      this.treatmentDataService.setData(this.deviceName, treatmentParametersStr);
  }

  public initializeParameters(): void   {
    this.parameters = [{
    procedureName: 'אלקטרופורציה',
    intensity: undefined,
    maxIntensity: 40,
    temperature: undefined,
    maxTemperature: 45
  },
  {
    procedureName: 'RF',
    intensity: undefined,
    maxIntensity: 6,
    temperature: undefined,
    maxTemperature: 45 }]

  }
}

