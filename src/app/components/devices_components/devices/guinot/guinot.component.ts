import { Component, OnInit } from '@angular/core';
import { GuinotProcedures } from 'src/app/models/procedures-types';
import { DeviceNames } from 'src/app/models/devices-names';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {GuinotParameters} from 'src/app/models/devices-parameters';
import {DeviceComponent} from 'src/app/components/devices_components/device-component';

@Component({
  selector: 'app-guinot',
  imports: [CommonModule,FormsModule],
  templateUrl: './guinot.component.html',
  styleUrl: './guinot.component.scss'
})
export class GuinotComponent extends DeviceComponent<GuinotParameters> implements OnInit{
  public guinotProcedures = GuinotProcedures;

  public ngOnInit(): void {
      this.deviceName = DeviceNames.GUINOT;
      this.parameters = this.treatmentDataService.getProperties(this.deviceName);
      if (!this.parameters) {
        this.initializeParameters();
      }
  }

  public saveParameters(): void{
      this.treatmentDataService.setProperties(this.deviceName, this.parameters);
       const treatmentParametersStr = `${this.deviceName}:\n` +  `\u202B תוכנית: ${this.parameters.selectedProcedure}, ערך: ${this.parameters.parameterValue} ,`
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

