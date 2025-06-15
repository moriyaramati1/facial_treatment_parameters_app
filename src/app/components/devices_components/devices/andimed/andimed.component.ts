import { Component, OnInit } from '@angular/core';
import { DeviceNames } from 'src/app/models/devices-names';
import { AndimedHandlers } from 'src/app/models/handles';
import { AndimedParameters } from 'src/app/models/devices-parameters';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {DeviceComponent} from 'src/app/components/devices_components/device-component';

@Component({
  selector: 'app-andimed',
  imports: [CommonModule, FormsModule],
    templateUrl: './andimed.component.html',
  styleUrl: './andimed.component.scss'
})
export class AndimedComponent extends DeviceComponent<AndimedParameters[]> implements OnInit{
  public andimedHandlers = AndimedHandlers;

  public ngOnInit(): void {
      this.deviceName = DeviceNames.ANDIMED;
      this.parameters = this.treatmentDataService.getProperties(this.deviceName);
      if (!this.parameters) {
        this.initializeParameters();
      }
  }

  public saveParameters(): void{
    this.treatmentDataService.setProperties(this.deviceName, this.parameters);
    const treatmentParametersStr = `${this.deviceName}:\n` +
      this.parameters
        .map(procedure => `\u202B ידית: ${procedure.handle} רמה: ${procedure.level}`)
        .join(',\n') + super.updateTreatmetProperties();

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

}
