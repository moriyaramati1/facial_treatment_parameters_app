import { Component, OnInit } from '@angular/core';
import { GuinotProcedures } from 'src/app/models/procedures-types';
import { DeviceNames } from 'src/app/models/devices-names';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {GuinotParameters} from 'src/app/models/devices-parameters';
import {DeviceComponent} from 'src/app/components/devices-components/device-component';
import {MatFormField} from '@angular/material/input';
import {MatOption, MatSelect} from '@angular/material/select';

@Component({
  selector: 'app-guinot',
  imports: [CommonModule, FormsModule, MatFormField, MatSelect, MatOption],
  templateUrl: './guinot.component.html',
  styleUrl: './guinot.component.scss'
})
export class GuinotComponent extends DeviceComponent<GuinotParameters> implements OnInit{
  public guinotProcedures = GuinotProcedures;

  public override ngOnInit(): void {
      this.deviceName = DeviceNames.GUINOT;
      super.ngOnInit();
  }

  public saveParameters(): void{
    const allParameters = { parameters: this.parameters, material: this.material };
    this.treatmentDataService.setProperties(this.deviceName,allParameters);

    const treatmentParametersStr = ` ${this.deviceName}:\n` +  `\u202B תוכנית: ${this.parameters.selectedProcedure}, ערך: ${this.parameters.parameterValue} ,`
      + super.updateTreatmetProperties();

    this.treatmentDataService.setData(this.deviceName, treatmentParametersStr);
  }

  public initializeParameters(): void{
      this.parameters = {
          selectedProcedure: undefined,
          parameterValue: undefined,
      }
  }
}

