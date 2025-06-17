import { Component, OnInit } from '@angular/core';
import { PlasmaProcedures } from 'src/app/models/procedures-types';
import { CommonModule } from '@angular/common';
import { DeviceNames } from 'src/app/models/devices-names';
import { FormsModule } from '@angular/forms';
import { PalsmaParameters } from 'src/app/models/devices-parameters';
import {DeviceComponent} from 'src/app/components/devices-components/device-component';
import {NgSelectModule} from '@ng-select/ng-select';


@Component({
  selector: 'app-plasma',
  imports: [CommonModule, FormsModule,NgSelectModule],
  standalone: true,
  templateUrl: './plasma.component.html',
  styleUrl: './plasma.component.scss'
})
export class PlasmaComponent extends DeviceComponent<PalsmaParameters> implements OnInit{
  public plasmaProcedures = PlasmaProcedures;

  public override ngOnInit(): void {
      this.deviceName = DeviceNames.PLASMA;
      super.ngOnInit();
  }

  public saveParameters(): void{
    const allParameters = { parameters: this.parameters, material: this.material };
    this.treatmentDataService.setProperties(this.deviceName,allParameters);

      const treatmentParametersStr = `${this.deviceName}:\n` +  `\u202Bתוכנית: ${this.parameters.selectedProcedure}, ערך: ${this.parameters.parameterValue}`
      + super.updateTreatmetProperties();

      this.treatmentDataService.setData(this.deviceName, treatmentParametersStr);

  }

  public initializeParameters(): void{
    this.parameters = {
      selectedProcedure: undefined,
      parameterValue: undefined,
    }
  }

  protected readonly Object = Object;
}
