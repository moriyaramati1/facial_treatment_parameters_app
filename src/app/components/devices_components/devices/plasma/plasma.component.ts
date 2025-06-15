import { Component, OnInit } from '@angular/core';
import { PlasmaProcedures } from 'src/app/models/procedures-types';
import { CommonModule } from '@angular/common';
import { DeviceNames } from 'src/app/models/devices-names';
import { FormsModule } from '@angular/forms';
import { PalsmaParameters } from 'src/app/models/devices-parameters';
import {DeviceComponent} from 'src/app/components/devices_components/device-component';


@Component({
  selector: 'app-plasma',
  imports: [CommonModule, FormsModule],
  standalone: true,
  templateUrl: './plasma.component.html',
  styleUrl: './plasma.component.scss'
})
export class PlasmaComponent extends DeviceComponent<PalsmaParameters> implements OnInit{
  public plasmaProcedures = PlasmaProcedures;

  public ngOnInit(): void {
      this.deviceName = DeviceNames.PLASMA;
      this.parameters = this.treatmentDataService.getProperties(this.deviceName);
      if (!this.parameters) {
        this.initializeParameters();
      }
  }

  public saveParameters(): void{
      this.treatmentDataService.setProperties(this.deviceName, this.parameters);
      const treatmentParametersStr = `${this.deviceName}:\n` +  `\u202B תוכנית: ${this.parameters.selectedProcedure}, ערך: ${this.parameters.parameterValue}`
      + super.updateTreatmetProperties();
      console.log(treatmentParametersStr)
      this.treatmentDataService.setData(this.deviceName, treatmentParametersStr);

  }

  public initializeParameters(): void{
    this.parameters = {
      selectedProcedure: undefined,
      parameterValue: undefined,
    }
  }
}
