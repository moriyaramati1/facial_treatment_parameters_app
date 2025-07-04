import { Component, OnInit } from '@angular/core';
import { DeviceNames } from 'src/app/models/devices-names';
import { EndimedHandlers } from 'src/app/models/handles';
import { EndimedParameters } from 'src/app/models/devices-parameters';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {DeviceComponent} from 'src/app/components/devices-components/device-component';
import {MatFormField} from '@angular/material/input';
import {MatOption} from '@angular/material/core';
import {MatSelect} from '@angular/material/select';

@Component({
  selector: 'app-endimed',
  imports: [CommonModule, FormsModule, MatFormField, MatSelect, MatOption],
    templateUrl: './endimed.component.html',
  styleUrl: './endimed.component.scss'
})
export class EndimedComponent extends DeviceComponent<EndimedParameters[]> implements OnInit{
  public endimedHandlers = EndimedHandlers;

  public override ngOnInit(): void {
      this.deviceName = DeviceNames.ENDIMED;
      super.ngOnInit();
  }

  public saveParameters(): void{
    const allParameters = { parameters: this.parameters, material: this.material };
    this.treatmentDataService.setProperties(this.deviceName, allParameters);

    const treatmentParametersStr = ` ${this.deviceName}:\n` +
      this.parameters
        .map(procedure => `\u202B ידית: ${procedure.handle} רמה: ${procedure.level}`)
        .join(',\n') + super.updateTreatmentProperties();

    this.treatmentDataService.setData(this.deviceName, treatmentParametersStr);
  }

  public initializeParameters(): void{
    this.parameters = [{
      handle: undefined,
      level: undefined,
    }]
  }

  public addParameter(): void {
    this.parameters.push({
      handle: undefined,
      level: undefined,
    })
  }

  public removeParameter(index: number): void{
    this.parameters.splice(index, 1);
  }

}
